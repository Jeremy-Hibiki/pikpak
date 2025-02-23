import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(mode);
  return {
    base: mode === 'development' ? '' : '/pikpak',
    plugins: [vue()],
    server: {
      proxy: {
        '/v1/pages': {
          target: 'https://api.notion.com',
          changeOrigin: true,
        },
      },
    },
  };
});
