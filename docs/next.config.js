/* eslint-disable @typescript-eslint/no-var-requires */

const withPreconstruct = require('@preconstruct/next');

/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: '/agds-next',
	reactStrictMode: true,
};

module.exports = withPreconstruct(nextConfig);
