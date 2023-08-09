/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
	displayName: 'ag.ds-next',
	testEnvironment: 'jsdom',
	clearMocks: true,
	verbose: true,
	testTimeout: 15000, // TODO: Rollback to 10000 when we have a better solution for the test timeout issue
	collectCoverageFrom: [
		'**/packages/**/*.{ts,tsx}',
		'!**/dist/**',
		'!**/{*.stories.tsx,index.ts,types.ts}',
	],
};

module.exports = config;
