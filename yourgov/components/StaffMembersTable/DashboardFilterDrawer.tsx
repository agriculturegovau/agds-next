import { useState } from 'react';
import { Stack } from '@ag.ds-next/react/src/stack';
import { Fieldset } from '@ag.ds-next/react/src/fieldset';
import { FormStack } from '@ag.ds-next/react/src/form-stack';
import { Divider } from '@ag.ds-next/react/src/divider';
import { Drawer } from '@ag.ds-next/react/src/drawer';
import { Button, ButtonGroup } from '@ag.ds-next/react/src/button';
import { GetDataFilters } from './lib/types';
import { SortAndFilterProvider, useSortAndFilterContext } from './lib/contexts';
import { FilterStatusSelect } from './FilterStatusSelect';

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
			activeUsers: false,
			dateJoinedFrom: undefined,
			dateJoinedTo: undefined,
			foodSafetyCertificate: false,
			lastActiveFrom: undefined,
			lastActiveTo: undefined,
			name: undefined,
			role: undefined,
			status: undefined,
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
				sort: { field: 'dateJoined', order: 'ASC' },
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
						</FormStack>
					</Fieldset>
					<Divider />
				</Stack>
			</Drawer>
		</SortAndFilterProvider>
	);
};
