import { Box } from '../../../packages/react/src/box';
import { Stack } from '../../../packages/react/src/stack';
import { Button, ButtonLink } from '../../../packages/react/src/button';
import { useToggleState } from '../../../packages/react/src/core';
import {
	ChevronDownIcon,
	ChevronUpIcon,
	FilterIcon,
	PlusIcon,
} from '../../../packages/react/src/icon';
import { H2 } from '../../../packages/react/src/heading';
import { ActiveFilters } from './components/ActiveFilters';
import { FilterAccordion } from './components/FilterAccordion';
import { SortBySelect } from './components/SortBySelect';
import { DataTable } from './components/DataTable';
import { FilterSearchInput } from './components/FilterSearchInput';
import { FilterStatusSelect } from './components/FilterStatusSelect';
import {
	FilterBar,
	FilterBarGroup,
	FilterRegion,
} from './components/FilterBar';
import { DashboardPagination } from './components/DashboardPagination';
import { DataTableSelectAllCheckbox } from './components/DataTableSelectAllCheckbox';

const headingId = 'table-heading';

export const TableFilteringMedium = ({
	selectable,
}: {
	selectable?: boolean;
}) => {
	const [isOpen, toggleIsOpen] = useToggleState(false, true);

	// IDs for accordion to ensure accessibility
	const buttonId = 'filter-button';
	const bodyId = 'filter-body';

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

				{selectable && (
					<Box paddingLeft={0.75} paddingY={0.75} borderBottom>
						<DataTableSelectAllCheckbox />
					</Box>
				)}
				<DataTable selectable={selectable} headingId={headingId} />
			</Stack>
			<DashboardPagination />
		</Stack>
	);
};
