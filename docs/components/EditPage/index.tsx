import { Box } from '@ag.ds-next/box';

export function EditPage({ slug = '', filename = 'README.md' }) {
	return (
		<Box
			as="a"
			href={`https://github.com/steelthreads/agds-next/edit/main${slug}/${filename}`}
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
