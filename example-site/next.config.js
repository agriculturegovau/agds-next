const withPreconstruct = require('@preconstruct/next');

const basePath = [process.env.BASE_PATH, '/example-site']
	.filter(Boolean)
	.join('/');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath,
	// Disabling esmExternals fixes an issue with `@floating-ui/react-dom` which is a dependency of `@ag.ds-next/react`
	// This was done in collaboration with https://github.com/emmatown
	// Consumers of the design system DO NOT need to worry about this
	experimental: {
		esmExternals: false,
	},
};

module.exports = withPreconstruct(nextConfig);
