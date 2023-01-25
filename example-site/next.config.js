/* eslint-disable @typescript-eslint/no-var-requires */

const withPreconstruct = require('@preconstruct/next');

const basePath = [process.env.BASE_PATH, '/example-site']
	.filter(Boolean)
	.join('/');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath,
};

module.exports = withPreconstruct(nextConfig);
