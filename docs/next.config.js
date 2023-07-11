const withPreconstruct = require('@preconstruct/next');

// We use a github action for pull requests deploy preview
// As they get published on a subpath, we need to set the base path
// See .github/workflows/preview.yml
const basePath = process.env.BASE_PATH ?? undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath,
	env: {
		NEXT_PUBLIC_GITHUB_PR_PREVIEW_NUMBER: process.env.GITHUB_PR_PREVIEW_NUMBER,
		NEXT_PUBLIC_BASE_PATH: basePath,
	},
};

module.exports = withPreconstruct(nextConfig);
