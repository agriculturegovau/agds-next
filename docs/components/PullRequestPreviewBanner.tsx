import { GlobalAlert } from '@ag.ds-next/react/global-alert';
import { Prose } from '@ag.ds-next/react/prose';

const ORG = 'steelthreads';
const REPO = 'agds-next';

export function PullRequestPreviewBanner({
	prPreviewNumber,
}: {
	prPreviewNumber: string;
}) {
	return (
		<GlobalAlert title="">
			<Prose>
				<p>
					You are viewing a PR preview for{' '}
					<a href={`https://github.com/${ORG}/${REPO}/pull/${prPreviewNumber}`}>
						PR #{prPreviewNumber}
					</a>
				</p>
			</Prose>
		</GlobalAlert>
	);
}
