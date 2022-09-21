/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
	displayName: 'ag.ds-next',
	testEnvironment: 'jsdom',
	clearMocks: true,
	verbose: true,
	collectCoverageFrom: [
		'**/packages/**/*.{ts,tsx}',
		'!**/dist/**',
		'!**/{*.stories.tsx,index.ts,types.ts}',
	],
};

module.exports = config;
