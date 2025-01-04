import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
// import basicSsl from '@vitejs/plugin-basic-ssl';
import dayjs from 'dayjs';
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import nesting from 'tailwindcss/nesting';

const isDev = process.env.NODE_ENV === 'development';
const BUILD_TIME = dayjs().format('YYYY-MM-DD HH:mm:ss');
console.log('process', isDev, process.env.WEB_DEV)
export default defineConfig({
  // plugins: [basicSsl()],
  plugins: [react()],
  css: {
    postcss: {
      // @ts-ignore
      plugins: [nesting, tailwindcss, autoprefixer],
    },
  },
  base: isDev ? '/' : './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    DEV_SERVER: JSON.stringify(isDev),
    BUILD_TIME: JSON.stringify(BUILD_TIME),
  },
  optimizeDeps: {
    // exclude: ['react'], // 排除 react 和 react-dom 以避免打包
  },
  // esbuild: {
  //   jsxFactory: 'h',
  //   jsxFragment: 'Fragment',
  // },
  server: {
    port: 6025,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'https://kevisual.xiongxiao.me',
        // target: 'http://localhost:9787',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
      '/system/lib': {
        target: 'https://kevisual.xiongxiao.me',
        changeOrigin: true,
      },
    },
  },
});
