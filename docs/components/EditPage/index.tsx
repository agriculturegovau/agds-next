import { Box } from '@ag.ds-next/box';

export function EditPage({ slug = '' }) {
	return (
		<Box
			as="a"
			href={`https://github.com/mikehazell/gold-sprinkles/edit/main${slug}/README.md`}
			target="_blank"
			rel="noopener noreferrer"
			paddingTop={3}
			color="action"
			fontSize="sm"
			fontFamily="body"
		>
			Edit this page
		</Box>
	);
}
