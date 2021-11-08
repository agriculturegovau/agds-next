/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withPreconstruct = require('@preconstruct/next');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = { reactStrictMode: true };

module.exports = withPreconstruct(withVanillaExtract(nextConfig));
