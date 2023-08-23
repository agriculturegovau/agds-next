import { Stack } from '@ag.ds-next/react/stack';
import { PageContent } from '@ag.ds-next/react/content';
import { AppLayout } from '../../../docs/content/templates/__shared/AppLayout';
import { PageTitle } from '../../../docs/components/PageTitle';
import { TableSelectable } from './TableSelectable';

export function TableBatchActions({
	background,
}: {
	background: 'body' | 'bodyAlt';
}) {
	return (
		<AppLayout background={background}>
			<PageContent>
				<Stack gap={3}>
					<PageTitle
						title="Example page"
						introduction="Etiam a nibh vestibulum, eleifend ipsum at, efficitur lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas"
					/>
					<TableSelectable />
				</Stack>
			</PageContent>
		</AppLayout>
	);
}
