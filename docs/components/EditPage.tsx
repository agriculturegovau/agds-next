import { TextLink } from '@ag.ds-next/react/text-link';

/**
 * We only want editors to be sent to the main branch on GitHub when they are:
 * - Not on /develop
 * - Not on /pr-preview/...
 * - Not in development
 *
 * The main branch has no BASE_PATH env var.
 *
 * See:
 * - .github/workflows/deploy-develop-docs.yml (develop branch, has BASE_PATH)
 * - .github/workflows/preview.yml (feature branches, has BASE_PATH)
 * - .github/workflows/deploy-docs.yml (main branch, has no BASE_PATH)
 */
const isDevelop =
	!!process.env.NEXT_PUBLIC_BASE_PATH || process.env.NODE_ENV !== 'production';
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
