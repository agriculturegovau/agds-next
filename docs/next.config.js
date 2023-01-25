/* eslint-disable @typescript-eslint/no-var-requires */

const withPreconstruct = require('@preconstruct/next');

console.log(process.env.BASE_PATH);

/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: process.env.BASE_PATH,
	reactStrictMode: true,
};

module.exports = withPreconstruct(nextConfig);
