import { TextLinkExternal } from '@ag.ds-next/text-link';

const ORG = 'steelthreads';
const REPO = 'agds-next';
const BRANCH = 'main';

export function EditPage({ path = '' }) {
	return (
		<TextLinkExternal
			href={`https://github.com/${ORG}/${REPO}/edit/${BRANCH}${path}`}
		>
			Edit this page
		</TextLinkExternal>
	);
}
