import { Stack } from '@ag.ds-next/react/stack';
import { ButtonLink } from '@ag.ds-next/react/button';
import { PlusIcon } from '@ag.ds-next/react/icon';
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

export const TableFilteringSmall = () => {
	return (
		<Stack gap={2}>
			<div>
				<ButtonLink href="#new" iconBefore={PlusIcon}>
					Create request
				</ButtonLink>
			</div>

			<FilterRegion>
				<FilterBar>
					<FilterBarGroup>
						<FilterStatusSelect />
						<FilterAssigneeSelect />
					</FilterBarGroup>
					<SortBySelect />
				</FilterBar>
			</FilterRegion>

			<DataTable />
			<DashboardPagination />
		</Stack>
	);
};
