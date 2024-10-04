import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias para a pasta src
      '~': path.resolve(__dirname, 'public'), // Alias para a pasta public
    },
  },
})
