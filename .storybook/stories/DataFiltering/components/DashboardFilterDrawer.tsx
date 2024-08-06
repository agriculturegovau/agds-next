import { useState } from 'react';
import { Stack } from '../../../../packages/react/src/stack';
import { DateRangePicker } from '../../../../packages/react/src/date-range-picker';
import { Fieldset } from '../../../../packages/react/src/fieldset';
import { FormStack } from '../../../../packages/react/src/form-stack';
import { Divider } from '../../../../packages/react/src/divider';
import { Drawer } from '../../../../packages/react/src/drawer';
import { Button, ButtonGroup } from '../../../../packages/react/src/button';
import { GetDataFilters } from '../lib/getData';
import {
	SortAndFilterProvider,
	useSortAndFilterContext,
} from '../lib/contexts';
import { FilterStatusSelect } from './FilterStatusSelect';
import { FilterAssigneeSelect } from './FilterAssigneeSelect';
import { FilterStateSelect } from './FilterStateSelect';
import { FilterDestinationsSelect } from './FilterDestinationsSelect';
import { FilterServicesSelect } from './FilterServicesSelect';

type DashboardFilterDrawerProps = {
	isDrawerOpen: boolean;
	closeDrawer: () => void;
};

export const DashboardFilterDrawer = ({
	isDrawerOpen,
	closeDrawer,
}: DashboardFilterDrawerProps) => {
	const { filters, setFilters, resetFilters } = useSortAndFilterContext();
	const [formState, setFormState] = useState<GetDataFilters>(filters);

	const applyFilters = () => {
		setFilters(formState);
		closeDrawer();
	};

	const setLocalFilter = (filter: Partial<GetDataFilters>) => {
		setFormState({ ...formState, ...filter });
	};

	const clearFilters = () => {
		resetFilters();
		setFormState({
			assignee: undefined,
			businessName: undefined,
			requestDate: { from: undefined, to: undefined },
			state: undefined,
			status: undefined,
			services: undefined,
			destinations: undefined,
		});
	};

	const cancel = () => {
		closeDrawer();
		setFormState(filters);
	};

	const mockSortAndFilterFunc = () => {
		throw new Error('Not implemented');
	};

	return (
		<SortAndFilterProvider
			value={{
				// Ensures the table doesn't change until the user clicks "Apply filters"
				filters: formState,
				setFilters: setFormState,
				setFilter: setLocalFilter,
				// The rest of these won't be called in the filter drawer
				sort: { field: 'requestDate', order: 'ASC' },
				setSort: mockSortAndFilterFunc,
				removeFilter: mockSortAndFilterFunc,
				resetFilters: mockSortAndFilterFunc,
				pagination: { page: 1, perPage: 1 },
				setPagination: mockSortAndFilterFunc,
				selection: [],
				isRowSelected: mockSortAndFilterFunc,
				toggleRowSelected: mockSortAndFilterFunc,
				selectRows: mockSortAndFilterFunc,
				clearRowSelections: mockSortAndFilterFunc,
			}}
		>
			<Drawer
				title="Filter by"
				isOpen={isDrawerOpen}
				onClose={cancel}
				actions={
					<ButtonGroup>
						<Button onClick={applyFilters}>Apply filters</Button>
						<Button variant="secondary" onClick={clearFilters}>
							Clear filters
						</Button>
						<Button variant="tertiary" onClick={cancel}>
							Cancel
						</Button>
					</ButtonGroup>
				}
			>
				<Stack gap={3}>
					<Fieldset legend="Fieldset">
						<FormStack>
							<FilterStatusSelect block />
							<FilterStateSelect block />
							<FilterDestinationsSelect block />
							<FilterServicesSelect block />
						</FormStack>
					</Fieldset>
					<Divider />
					<Fieldset legend="Fieldset">
						<FormStack>
							<FilterAssigneeSelect block />
							<DateRangePicker
								fromLabel="Registered from"
								toLabel="Registered to"
								onChange={(requestDate) =>
									setFormState({ ...formState, requestDate })
								}
								value={formState.requestDate}
							/>
						</FormStack>
					</Fieldset>
				</Stack>
			</Drawer>
		</SortAndFilterProvider>
	);
};
