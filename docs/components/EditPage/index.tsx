import { Box } from '@ag.ds-next/box';

export function EditPage({ path = '' }) {
	return (
		<Box
			as="a"
			display="inline-block"
			href={`https://github.com/steelthreads/agds-next/edit/main${path}`}
			target="_blank"
			rel="noopener noreferrer"
			color="action"
			fontSize="sm"
			fontFamily="body"
			focus
		>
			Edit this page
		</Box>
	);
}
