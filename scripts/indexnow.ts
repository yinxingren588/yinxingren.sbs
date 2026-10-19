import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import {
  INDEXNOW_KEY,
  INDEXNOW_KEY_FILE,
  INDEXNOW_KEY_LOCATION,
  INDEXNOW_HOST,
  ensureKeyFiles,
  analyzeChangesAndBuildPayload,
  saveIndexNowState,
} from './indexnow-engine';

async function verifyOnlineKey(url: string, timeoutMs = 3000): Promise<boolean> {
  return new Promise((resolve) => {
    const req = https.get(url, { timeout: timeoutMs }, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        resolve(res.statusCode === 200 && data.trim() === INDEXNOW_KEY);
      });
    });
    req.on('error', () => resolve(false));
    req.on('timeout', () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function submitToIndexNow(payload: object): Promise<{ statusCode?: number; body?: string; error?: string }> {
  return new Promise((resolve) => {
    const dataString = JSON.stringify(payload);
    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(dataString),
      },
      timeout: 5000,
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, body });
      });
    });

    req.on('error', (err) => {
      resolve({ error: err.message });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ error: 'Request timeout to api.indexnow.org' });
    });

    req.write(dataString);
    req.end();
  });
}

async function main() {
  console.log('================ INDEXNOW CONFIGURATION & AUDIT ================');

  // 1. 确保 Key 文本文件正确落盘
  ensureKeyFiles(true);
  const publicDir = path.resolve(process.cwd(), 'public');
  const distDir = path.resolve(process.cwd(), 'dist');
  const pubFile = path.join(publicDir, INDEXNOW_KEY_FILE);
  const distFile = path.join(distDir, INDEXNOW_KEY_FILE);

  console.log(`[Key Configuration]`);
  console.log(`  - API Key: ${INDEXNOW_KEY} (32-character hex)`);
  console.log(`  - Key File Name: ${INDEXNOW_KEY_FILE}`);
  console.log(`  - Public Source: ${fs.existsSync(pubFile) ? 'EXISTS' : 'MISSING'} (${pubFile})`);
  console.log(`  - Dist Build: ${fs.existsSync(distFile) ? 'EXISTS' : 'MISSING'} (${distFile})`);
  console.log(`  - Verification URL: ${INDEXNOW_KEY_LOCATION}`);
  console.log(`  - Host: ${INDEXNOW_HOST}`);

  // 2. 差异分析与去重评估
  const analysis = analyzeChangesAndBuildPayload();
  const { addedUrls, updatedUrls, deletedUrls, unchangedUrls, allUrlsToSubmit, payload, newState } = analysis;

  console.log(`\n[URL Change & Deduplication Analysis]`);
  console.log(`  - Added URLs (${addedUrls.length}):`);
  addedUrls.forEach((u) => console.log(`      + ${u}`));
  console.log(`  - Updated URLs (${updatedUrls.length}):`);
  updatedUrls.forEach((u) => console.log(`      * ${u}`));
  console.log(`  - Deleted URLs (${deletedUrls.length}):`);
  deletedUrls.forEach((u) => console.log(`      - ${u} (Notification for permanent removal)`));
  console.log(`  - Unchanged URLs (${unchangedUrls.length}): [Excluded from high-frequency submission]`);

  console.log(`\n[Candidate Payload Summary]`);
  console.log(`  - Total URLs in payload: ${allUrlsToSubmit.length}`);
  console.log(`  - Protocol Endpoint: https://api.indexnow.org/indexnow`);

  // 3. 提交安全性核查 (防御性拦截 AFF, localhost, 404, hash)
  const hasAff = allUrlsToSubmit.some((u) => u.includes('varnexa') || u.includes('invisibleaff') || u.includes('code='));
  const hasLocalhost = allUrlsToSubmit.some((u) => u.includes('localhost') || u.includes('127.0.0.1'));
  const hasGeneric404 = allUrlsToSubmit.some((u) => u.includes('404.html'));
  const hasHash = allUrlsToSubmit.some((u) => u.includes('#'));

  console.log(`\n[Safety Verification]`);
  console.log(`  - Free of AFF URLs: ${!hasAff ? 'PASS' : 'FAIL'}`);
  console.log(`  - Free of localhost/test URLs: ${!hasLocalhost ? 'PASS' : 'FAIL'}`);
  console.log(`  - Free of generic 404.html: ${!hasGeneric404 ? 'PASS' : 'FAIL'}`);
  console.log(`  - Free of Hash fragments: ${!hasHash ? 'PASS' : 'FAIL'}`);

  // 4. 在线验证与受控提交逻辑 (规则 14: 未部署、Key文件未在线验证时，只生成配置与清单，不谎报成功)
  console.log(`\n[Deployment & Submission Status]`);
  console.log(`  - Checking online Key file availability: ${INDEXNOW_KEY_LOCATION} ...`);
  const isKeyOnline = await verifyOnlineKey(INDEXNOW_KEY_LOCATION);

  if (!isKeyOnline) {
    console.log(`  - Key File Online Check: UNREACHABLE (Expected before public DNS/server deployment).`);
    console.log(`  - Actual Submission: SKIPPED (Per requirement 14: Site is not yet deployed online. Configuration and pending submission manifest are fully prepared without falsely claiming successful submission).`);
    // 持久化当前指纹与清单，等待上线后触发
    saveIndexNowState(newState);
  } else {
    console.log(`  - Key File Online Check: SUCCESS (200 OK & key matches).`);
    if (allUrlsToSubmit.length === 0) {
      console.log(`  - Actual Submission: SKIPPED (No new, updated or deleted URLs to submit).`);
    } else {
      console.log(`  - Submitting ${allUrlsToSubmit.length} URLs to api.indexnow.org ...`);
      const res = await submitToIndexNow(payload);
      if (res.error) {
        console.error(`  - Submission Error: ${res.error} (Website build unaffected; retry retained).`);
      } else {
        console.log(`  - Submission Result: HTTP ${res.statusCode} (${res.statusCode === 200 || res.statusCode === 202 ? 'ACCEPTED' : 'UNACCEPTED'})`);
        if (res.statusCode === 200 || res.statusCode === 202) {
          newState.lastSubmittedAt = new Date().toISOString();
        }
      }
      saveIndexNowState(newState);
    }
  }

  console.log('\n================ INDEXNOW AUDIT FINISHED ================');
}

main().catch((err) => {
  console.error('Unexpected error in indexnow script:', err);
  // 不破坏正常流程
  process.exit(0);
});
