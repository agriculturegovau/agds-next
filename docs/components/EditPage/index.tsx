import { Box } from '@ag.ds-next/box';

const ORG = 'steelthreads';
const REPO = 'agds-next';
const BRANCH = 'main';

export function EditPage({ path = '' }) {
	return (
		<Box
			as="a"
			display="inline-block"
			href={`https://github.com/${ORG}/${REPO}/edit/${BRANCH}${path}`}
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
