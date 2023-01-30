/* eslint-disable @typescript-eslint/no-var-requires */

const withPreconstruct = require('@preconstruct/next');

// We use a github action for pull requests deploy preview
// As they get published on a subpath, we need to set the base path
// See .github/workflows/preview.yml
const basePath = process.env.BASE_PATH ?? undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath,
};

module.exports = withPreconstruct(nextConfig);
