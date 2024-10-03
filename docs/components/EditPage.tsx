import { TextLink } from '@ag.ds-next/react/text-link';

/**
 * We only want editors to be sent to the main branch on GitHub when they are:
 * - Not on /develop
 * - Not on /pr-preview/...
 * - Not in development
 *
 * See .github/workflows/deploy-develop-docs.yml
 */
const isDevelop =
	!!process.env.BASE_PATH || process.env.NODE_ENV !== 'production';
const branch = isDevelop ? 'develop' : 'main';

const ORG = 'agriculturegovau';
const REPO = 'agds-next';

export function EditPage({ path = '' }) {
	return (
		<TextLink href={`https://github.com/${ORG}/${REPO}/edit/${branch}${path}`}>
			Edit this page
		</TextLink>
	);
}
