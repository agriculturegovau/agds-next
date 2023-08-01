import { GlobalAlert } from '@ag.ds-next/react/global-alert';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';

const ORG = 'steelthreads';
const REPO = 'agds-next';

export function PullRequestPreviewBanner({
	prPreviewNumber,
}: {
	prPreviewNumber: string;
}) {
	return (
		<GlobalAlert>
			<Text as="p">
				You are viewing a PR preview for{' '}
				<TextLink
					href={`https://github.com/${ORG}/${REPO}/pull/${prPreviewNumber}`}
				>
					PR #{prPreviewNumber}
				</TextLink>
			</Text>
		</GlobalAlert>
	);
}
