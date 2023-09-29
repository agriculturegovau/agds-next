import { Stack } from '@ag.ds-next/react/stack';
import { PageContent } from '@ag.ds-next/react/content';
import { H2 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { DashboardPagination } from './components/DashboardPagination';
import { DataTable } from './components/DataTable';
import { DataTableSelectAllCheckbox } from './components/DataTableSelectAllCheckbox';

export const TableSelection = () => {
	// The TableCaption` component can not be used with selectable tables due to a11y reasons
	// So we need to connect the heading with the table via `aria-labelledby`
	const headingId = 'table-heading';

	return (
		<PageContent>
			<Stack gap={1.5}>
				<H2 id={headingId}>Basic selectable table</H2>
				<Text as="p">
					A table with pagination that allows rows to be selected.
				</Text>
				<Stack gap={0}>
					<DataTableSelectAllCheckbox />
					<DataTable selectable={true} headingId={headingId} />
				</Stack>
				<DashboardPagination />
			</Stack>
		</PageContent>
	);
};
