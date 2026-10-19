/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0B0F17',
          surface: '#111827',
          elevated: '#1E293B',
          primary: '#0EA5E9',
          'primary-hover': '#0284C7',
          secondary: '#64748B',
          accent: '#38BDF8',
          border: '#1E293B',
          'border-hover': '#334155',
          text: {
            heading: '#F8FAFC',
            body: '#CBD5E1',
            muted: '#94A3B8',
            subtle: '#64748B',
          },
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Noto Sans SC"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.4)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 8px 30px -4px rgba(14, 165, 233, 0.12)',
      },
      borderRadius: {
        'brand-sm': '6px',
        'brand': '10px',
        'brand-lg': '14px',
      },
    },
  },
  plugins: [],
};
