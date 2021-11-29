/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withPreconstruct = require('@preconstruct/next');

const nextConfig = { reactStrictMode: true };

module.exports = withPreconstruct(nextConfig);
