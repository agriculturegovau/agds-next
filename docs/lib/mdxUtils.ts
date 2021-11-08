import { plugin } from '@untitled-docs/live-code/rehype';
import { serialize } from 'next-mdx-remote/serialize';
import { readdirSync, readFileSync } from 'fs';
import remarkHint from 'remark-hint';
import { normalize } from 'path';
import matter from 'gray-matter';

import { slugify } from './slugify';

const PKG_PATH = normalize(`${process.cwd()}/../packages/`);

export async function getPkgBySlug(slug: string) {
	const realSlug = slugify(slug).replace(/\.md$/, '');
	const filePath = normalize(`${PKG_PATH}/${realSlug}/README.md`);
	const pkgContents = JSON.parse(
		readFileSync(normalize(`${PKG_PATH}/${realSlug}/package.json`), 'utf8')
	);

	const data = await getMarkdown(filePath);

	return {
		...data,
		slug: realSlug,
		name: pkgContents.name,
		version: pkgContents.version,
	};
}

type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
export type Pkg = Awaited<ReturnType<typeof getPkgBySlug>>;
export async function getMarkdown(filePath: string) {
	const fileContents = readFileSync(filePath, 'utf8');

	const { data, content } = matter(fileContents);

	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [remarkHint],
			rehypePlugins: [plugin],
		},
		scope: data,
	});

	return {
		source: mdxSource,
		data,
	};
}

export async function getAllPkgs(filePath = PKG_PATH, limit = 0) {
	const slugs = readdirSync(filePath, { withFileTypes: true });
	const files = await Promise.all(
		slugs
			.filter(
				(file) =>
					!file.name.startsWith('_') &&
					!file.name.startsWith('.') &&
					file.isDirectory()
			)
			.sort((file) => (file.name === 'core' ? -1 : 1))
			.map((slug) => getPkgBySlug(slug.name))
	);

	return limit ? files.slice(0, limit) : files;
}
