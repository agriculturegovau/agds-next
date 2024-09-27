/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
	displayName: 'ag.ds-next',
	testEnvironment: 'jsdom',
	clearMocks: true,
	verbose: true,
	// Some of our tests using jest-axe can take a long time in CI
	// We should rollback to 10000 once we have a better solution for test timeout issues
	testTimeout: 20000,
	collectCoverageFrom: [
		'**/packages/**/*.{ts,tsx}',
		'!**/dist/**',
		'!**/{*.stories.tsx,index.ts,types.ts}',
	],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

module.exports = config;
