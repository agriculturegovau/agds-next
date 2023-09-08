import { useState } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { DateRangePicker } from '@ag.ds-next/react/date-range-picker';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { Divider } from '@ag.ds-next/react/divider';
import { Drawer } from '@ag.ds-next/react/drawer';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
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

	return (
		<SortAndFilterProvider
			value={{
				// Ensures the table doesn't change until the user clicks "Apply filters"
				filters: formState,
				setFilters: setFormState,
				setFilter: setLocalFilter,
				// The rest of these won't be called in the filter drawer
				sort: { field: 'requestDate', order: 'ASC' },
				setSort: () => {
					throw new Error('Not implemented');
				},
				removeFilter: () => {
					throw new Error('Not implemented');
				},
				resetFilters: () => {
					throw new Error('Not implemented');
				},
				pagination: { page: 1, perPage: 1 },
				setPagination: () => {
					throw new Error('Not implemented');
				},
			}}
		>
			<Drawer
				title="Filter by"
				isOpen={isDrawerOpen}
				onDismiss={cancel}
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
