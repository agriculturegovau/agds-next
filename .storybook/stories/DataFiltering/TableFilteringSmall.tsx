import { Stack } from '@ag.ds-next/react/stack';
import { ButtonLink } from '@ag.ds-next/react/button';
import { PageContent } from '@ag.ds-next/react/content';
import { PlusIcon } from '@ag.ds-next/react/icon';
import { Prose } from '@ag.ds-next/react/prose';
import { FilterStatusSelect } from './components/FilterStatusSelect';
import { DashboardTable } from './components/DashboardTable';
import { BusinessForAuditWithIndex } from './lib/generateBusinessData';
import { SortBySelect } from './components/SortBySelect';
import { FilterAssigneeSelect } from './components/FilterAssigneeSelect';
import {
	FilterBar,
	FilterBarGroup,
	FilterRegion,
} from './components/FilterBar';
import { DashboardPagination } from './components/DashboardPagination';

export type SmallExampleProps = {
	totalPages: number;
	totalItems: number;
	loading: boolean;
	data: BusinessForAuditWithIndex[];
	tableCaption: string;
};

export const TableFilteringSmall = ({
	totalPages,
	totalItems,
	loading,
	data,
	tableCaption,
}: SmallExampleProps) => {
	return (
		<PageContent>
			<Stack gap={2}>
				<Prose>
					<h1>Table Filtering (small)</h1>
					<p>
						In the most basic cases of filtering with up to three filterable
						fields, we can show all filters in a row above the table.
					</p>
				</Prose>
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

				<DashboardTable
					data={data}
					loading={loading}
					caption={tableCaption}
					totalItems={totalItems}
				/>

				<DashboardPagination data={data} totalPages={totalPages} />
			</Stack>
		</PageContent>
	);
};
