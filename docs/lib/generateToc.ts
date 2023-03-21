import { slugify } from './slugify';

type HeadingDataRaw = {
	title: string;
	level: number;
	slug: string;
};

function generateRowToc(content: string): HeadingDataRaw[] {
	const headingContent = content.matchAll(
		new RegExp(/^(#### |### |## )(.*)\n/, 'gm')
	);

	const headings = [...(headingContent as unknown as string[])];

	let toc: HeadingDataRaw[] = [];

	if (headings.length) {
		toc = headings.map((heading: Record<number, any>) => {
			const headingText = heading[2].trim();
			const headingLevel = heading[1].trim().length;
			const headingSlug = slugify(headingText);

			return {
				title: headingText,
				level: headingLevel,
				slug: headingSlug,
			};
		});
	}

	return toc;
}

type HeadingData = HeadingDataRaw & {
	items: HeadingData[];
	id: string;
};

export function generateToc(content: string): HeadingData[] {
	const headingElements: HeadingDataRaw[] = generateRowToc(content);
	const nestedHeadings: HeadingData[] = [];
	const existingSlug: string[] = [];

	headingElements.forEach((heading) => {
		const { level, slug } = heading;
		let suffix: null | number = null;

		const slugCount = existingSlug.filter((s) => s === slug).length;
		if (slugCount > 0) {
			suffix = slugCount;
		}
		existingSlug.push(slug);

		const idSuffix = suffix ? '-' + suffix : '';
		const id = `${slug}${idSuffix}`;

		if (level === 2) {
			nestedHeadings.push({ id, ...heading, items: [] });
		} else if (level === 3 && nestedHeadings.length > 0) {
			nestedHeadings[nestedHeadings.length - 1].items.push({
				id,
				...heading,
				items: [],
			});
		} else if (level === 4 && nestedHeadings.length > 0) {
			nestedHeadings[nestedHeadings.length - 1].items.push({
				id,
				...heading,
				items: [],
			});
		}
	});

	return nestedHeadings;
}
