const withPreconstruct = require('@preconstruct/next');

const basePath = `${process.env.BASE_PATH ?? ''}/example-form`;

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath,
	output: 'export',
	distDir: '../docs/public/example-form',
};

module.exports = withPreconstruct(nextConfig);
