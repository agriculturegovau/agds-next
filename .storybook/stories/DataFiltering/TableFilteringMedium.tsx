import { Box } from '@ag.ds-next/react/box';
import { Stack } from '@ag.ds-next/react/stack';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { PageContent } from '@ag.ds-next/react/content';
import { useToggleState } from '@ag.ds-next/react/core';
import {
	ChevronDownIcon,
	ChevronUpIcon,
	FilterIcon,
	PlusIcon,
} from '@ag.ds-next/react/icon';
import { Prose } from '@ag.ds-next/react/prose';
import { ActiveFilters } from './components/ActiveFilters';
import { FilterAccordion } from './components/FilterAccordion';
import { SortBySelect } from './components/SortBySelect';
import { DashboardTable } from './components/DashboardTable';
import { FilterSearchInput } from './components/FilterSearchInput';
import { FilterStatusSelect } from './components/FilterStatusSelect';
import { BusinessForAuditWithIndex } from './lib/generateBusinessData';
import {
	FilterBar,
	FilterBarGroup,
	FilterRegion,
} from './components/FilterBar';
import { DashboardPagination } from './components/DashboardPagination';

type TableFilteringMediumProps = {
	// data
	totalPages: number;
	totalItems: number;
	loading: boolean;
	data: BusinessForAuditWithIndex[];
	tableCaption: string;
};

export const TableFilteringMedium = ({
	totalPages,
	totalItems,
	loading,
	data,
	tableCaption,
}: TableFilteringMediumProps) => {
	const [isOpen, toggleIsOpen] = useToggleState(false, true);

	// IDs for accordion to ensure accessibility
	const buttonId = 'filter-button';
	const bodyId = 'filter-body';

	return (
		<PageContent>
			<Stack gap={2}>
				<Prose>
					<h1>Table Filtering (Medium)</h1>
					<p>
						The medium filtering pattern is for cases where the number of
						filterable fields is between 1 and 4 secondary filters. Our
						FilterBar is used to reveal all filterable fields when the button is
						pressed.
					</p>
				</Prose>
				<div>
					<ButtonLink href="#new" iconBefore={PlusIcon}>
						New item
					</ButtonLink>
				</div>

				<FilterRegion>
					<FilterBar>
						<FilterBarGroup>
							<Box
								display={{
									xs: 'block',
									lg: 'none',
								}}
							>
								<SortBySelect />
							</Box>
							<FilterSearchInput />
							<FilterStatusSelect />
							<Button
								onClick={toggleIsOpen}
								variant="secondary"
								iconBefore={FilterIcon}
								iconAfter={isOpen ? ChevronUpIcon : ChevronDownIcon}
								// accessibility
								aria-label="more filters"
								id={buttonId}
								aria-controls={bodyId}
								aria-expanded={isOpen}
							>
								{isOpen ? 'Hide filters' : 'Show filters'}
							</Button>
						</FilterBarGroup>

						<Box
							display={{
								xs: 'none',
								lg: 'block',
							}}
						>
							<SortBySelect />
						</Box>
					</FilterBar>
					<FilterAccordion
						id={bodyId}
						ariaLabelledBy={buttonId}
						isOpen={isOpen}
					/>
					<ActiveFilters />
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
