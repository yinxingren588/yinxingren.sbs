import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

// 计算 CRC32
function crc32(buf: Buffer): number {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let j = 0; j < 8; j++) {
      c = (c >>> 1) ^ (c & 1 ? 0xedb88320 : 0);
    }
  }
  return (c ^ 0xffffffff) >>> 0;
}

function makeChunk(type: string, data: Buffer): Buffer {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const typeAndData = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  chunk.writeUInt32BE(crc32(typeAndData), 8 + len);
  return chunk;
}

function createPng(width: number, height: number, colorFn: (x: number, y: number) => [number, number, number]): Buffer {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8-bit
  ihdrData[9] = 2; // RGB
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;
  const ihdr = makeChunk('IHDR', ihdrData);

  // Scanlines (Filter byte 0 + 3 bytes per pixel)
  const rowBytes = 1 + width * 3;
  const rawData = Buffer.alloc(rowBytes * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowBytes;
    rawData[rowOffset] = 0; // Filter None
    for (let x = 0; x < width; x++) {
      const [r, g, b] = colorFn(x, y);
      const pxOffset = rowOffset + 1 + x * 3;
      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
    }
  }

  const compressed = zlib.deflateSync(rawData, { level: 9 });
  const idat = makeChunk('IDAT', compressed);
  const iend = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdr, idat, iend]);
}

// 1. 生成 1200x630 og-image.png (深曜石黑 #0B0F17 底色 + 极光隐青 #0EA5E9 光栅母题)
const ogImageBuf = createPng(1200, 630, (x, y) => {
  // 深曜石黑底色基底
  let r = 11 + Math.floor((x / 1200) * 6);
  let g = 15 + Math.floor((y / 630) * 8);
  let b = 23 + Math.floor(((x + y) / 1830) * 12);

  // 外围 1px 细微边界 (Slate Border #1E293B)
  if (x === 40 || x === 1160 || y === 40 || y === 590) {
    return [30, 41, 59];
  }

  // 中央抽象隐形人与折射棱镜核心
  const cx = 600;
  const cy = 300;
  const dx = x - cx;
  const dy = y - cy;
  const dist = Math.sqrt(dx * dx + dy * dy);

  // 微光漫射层 (半径 280px)
  if (dist < 280) {
    const glow = Math.pow(1 - dist / 280, 2);
    r = Math.min(255, r + Math.floor(glow * 14));
    g = Math.min(255, g + Math.floor(glow * 165));
    b = Math.min(255, b + Math.floor(glow * 233));
  }

  // 抽象棱镜光栅与“人”字隐匿护盾
  const inPrism = Math.abs(dx) * 1.5 + (dy > 0 ? dy * 1.0 : Math.abs(dy) * 0.7);
  if (Math.abs(inPrism - 130) < 3 || Math.abs(inPrism - 80) < 2) {
    return [14, 165, 233]; // #0EA5E9
  }

  // 折射光线水平横切线
  if (Math.abs(dy) < 2 && Math.abs(dx) < 220) {
    return [56, 189, 248]; // #38BDF8
  }

  // 中心偏振晶点
  if (dist < 8) {
    return [248, 250, 252]; // #F8FAFC
  }

  return [r, g, b];
});

// 2. 生成 180x180 apple-touch-icon.png
const appleIconBuf = createPng(180, 180, (x, y) => {
  let r = 11;
  let g = 15;
  let b = 23;

  const cx = 90;
  const cy = 90;
  const dx = x - cx;
  const dy = y - cy;
  const dist = Math.sqrt(dx * dx + dy * dy);

  // 内部抽象棱镜图形
  const inPrism = Math.abs(dx) * 1.5 + (dy > 0 ? dy * 1.0 : Math.abs(dy) * 0.7);
  if (Math.abs(inPrism - 60) < 3 || Math.abs(inPrism - 35) < 2) {
    return [14, 165, 233];
  }

  if (Math.abs(dy) < 2 && Math.abs(dx) < 50) {
    return [56, 189, 248];
  }

  if (dist < 5) {
    return [248, 250, 252];
  }

  return [r, g, b];
});

// 3. 生成 32x32 favicon.png 并封装为 favicon.ico
const favicon32Buf = createPng(32, 32, (x, y) => {
  let r = 11;
  let g = 15;
  let b = 23;

  const cx = 16;
  const cy = 16;
  const dx = x - cx;
  const dy = y - cy;
  const inPrism = Math.abs(dx) * 1.5 + (dy > 0 ? dy * 1.0 : Math.abs(dy) * 0.7);
  if (Math.abs(inPrism - 11) < 2) {
    return [14, 165, 233];
  }
  return [r, g, b];
});

// 构建包含 PNG 格式的 ICO 文件
const icoHeader = Buffer.alloc(22);
icoHeader.writeUInt16LE(0, 0); // Reserved
icoHeader.writeUInt16LE(1, 2); // Type 1 = ICO
icoHeader.writeUInt16LE(1, 4); // 1 Image
icoHeader.writeUInt8(32, 6);   // Width
icoHeader.writeUInt8(32, 7);   // Height
icoHeader.writeUInt8(0, 8);    // Color count
icoHeader.writeUInt8(0, 9);    // Reserved
icoHeader.writeUInt16LE(1, 10); // Color planes
icoHeader.writeUInt16LE(32, 12); // Bits per pixel
icoHeader.writeUInt32LE(favicon32Buf.length, 14); // Image size
icoHeader.writeUInt32LE(22, 18); // Image offset

const icoBuf = Buffer.concat([icoHeader, favicon32Buf]);

const publicDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'og-image.png'), ogImageBuf);
if (!fs.existsSync(path.join(publicDir, 'apple-touch-icon.png'))) {
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleIconBuf);
}
if (!fs.existsSync(path.join(publicDir, 'favicon.ico'))) {
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuf);
}

// 同步到 dist 目录（如果存在）
const distDir = path.resolve(process.cwd(), 'dist');
if (fs.existsSync(distDir)) {
  ['favicon.svg', 'favicon.ico', 'apple-touch-icon.png', 'favicon-16x16.png', 'favicon-32x32.png', 'favicon-48x48.png', 'og-image.png', 'logo.png', 'logo.jpg', 'logo-avatar.png', 'logo-transparent.png'].forEach(file => {
    const src = path.join(publicDir, file);
    const dest = path.join(distDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
    }
  });
}

console.log('Successfully generated public/og-image.png (1200x630)');
console.log('Preserved mascot brand icons in public and dist');

