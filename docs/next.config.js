const withPreconstruct = require('@preconstruct/next');

// We use a github action for pull requests deploy preview
// As they get published on a subpath, we need to set the base path
// See .github/workflows/preview.yml
const basePath = process.env.BASE_PATH ?? undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath,
	output: 'export',
	env: {
		NEXT_PUBLIC_GITHUB_PR_PREVIEW_NUMBER: process.env.GITHUB_PR_PREVIEW_NUMBER,
		NEXT_PUBLIC_BASE_PATH: basePath,
	},
	experimental: {
		/**
		 * WARNING: If you are a consumer of the design system reading this you DO NOT need this config in your project.
		 *
		 * Disabling `esmExternals` fixes an issue with `@floating-ui/react-dom` which is a dependency of `@ag.ds-next/react`.
		 * This is due to a combination of how preconstruct and next handle dependencies with ESM modules.
		 * This issue only occurs for dependencies in the monorepo - so consumers of the design system do not need to worry about this.
		 * This was done in collaboration with [Emma Hamilton](https://github.com/emmatown)
		 */
		esmExternals: false,
	},
};

module.exports = withPreconstruct(nextConfig);
