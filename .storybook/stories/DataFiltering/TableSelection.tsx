import { Stack } from '@ag.ds-next/react/stack';
import { Box } from '@ag.ds-next/react/box';
import { DashboardPagination } from './components/DashboardPagination';
import { DataTable } from './components/DataTable';
import { DataTableSelectAllCheckbox } from './components/DataTableSelectAllCheckbox';

export const TableSelection = () => {
	// The TableCaption` component can not be used with selectable tables due to a11y reasons
	// So we need to connect the heading with the table via `aria-labelledby`
	const headingId = 'table-heading';

	return (
		<Stack gap={1.5}>
			<Stack gap={0}>
				<Box paddingLeft={0.75} paddingBottom={0.75} borderBottom>
					<DataTableSelectAllCheckbox />
				</Box>
				<DataTable selectable={true} headingId={headingId} />
			</Stack>
			<DashboardPagination />
		</Stack>
	);
};
