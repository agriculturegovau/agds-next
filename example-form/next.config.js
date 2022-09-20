/* eslint-disable @typescript-eslint/no-var-requires */

const withPreconstruct = require('@preconstruct/next');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath: '/agds-next/example-form',
};

module.exports = withPreconstruct(nextConfig);
