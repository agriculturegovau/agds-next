import { Stack } from '../../../packages/react/src/stack';
import { ButtonLink } from '../../../packages/react/src/button';
import { PlusIcon } from '../../../packages/react/src/icon';
import { H2 } from '../../../packages/react/src/heading';
import { Box } from '../../../packages/react/src/box';
import { FilterStatusSelect } from './components/FilterStatusSelect';
import { DataTable } from './components/DataTable';
import { SortBySelect } from './components/SortBySelect';
import { FilterAssigneeSelect } from './components/FilterAssigneeSelect';
import {
	FilterBar,
	FilterBarGroup,
	FilterRegion,
} from './components/FilterBar';
import { DashboardPagination } from './components/DashboardPagination';
import { DataTableSelectAllCheckbox } from './components/DataTableSelectAllCheckbox';

const headingId = 'table-heading';

export const TableFilteringSmall = ({
	selectable,
}: {
	selectable?: boolean;
}) => {
	return (
		<Stack gap={1.5}>
			<H2 id={headingId}>Audits</H2>
			<div>
				<ButtonLink href="#new" iconBefore={PlusIcon}>
					Create request
				</ButtonLink>
			</div>

			<Stack gap={0}>
				<FilterRegion>
					<FilterBar>
						<FilterBarGroup>
							<FilterStatusSelect />
							<FilterAssigneeSelect />
						</FilterBarGroup>
						<SortBySelect />
					</FilterBar>
				</FilterRegion>
				{selectable && (
					<Box paddingLeft={0.75} paddingY={0.75} borderBottom>
						<DataTableSelectAllCheckbox />
					</Box>
				)}
				<DataTable headingId={headingId} />
			</Stack>
			<DashboardPagination />
		</Stack>
	);
};
