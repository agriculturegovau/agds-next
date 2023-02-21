/* eslint-disable @typescript-eslint/no-var-requires */

const withPreconstruct = require('@preconstruct/next');

// We use a github action for pull requests deploy preview
// As they get published on a subpath, we need to set the base path
// See .github/workflows/preview.yml
const basePath = process.env.BASE_PATH ?? undefined;

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		// If you use remark-gfm, you'll need to use next.config.mjs
		// as the package is ESM only
		// https://github.com/remarkjs/remark-gfm#install
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['tsx', 'md', 'mdx'],
	reactStrictMode: true,
	basePath,
};

module.exports = withMDX(withPreconstruct(nextConfig));
