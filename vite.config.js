import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  // This Mac's port block for the soulcraft account (3100–3149); never a vendor default.
  server: { port: 3100, strictPort: true },
  preview: { port: 3101, strictPort: true },
  test: {
    environment: 'jsdom',
  },
});
