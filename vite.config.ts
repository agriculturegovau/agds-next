/// <reference types="vitest" />
/// <reference types="vite/client" />

// import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		include: [
			'**/packages/**/*.test.{ts,tsx}',
			'!**/dist/**',
			'!**/{*.test.{ts,tsx}',
		],
	},
});
