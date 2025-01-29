import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { FormStack } from '@ag.ds-next/react/src/form-stack';
import { Drawer } from '@ag.ds-next/react/src/drawer';
import { Button, ButtonGroup } from '@ag.ds-next/react/src/button';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import {
	DateRangePickerNext,
	isValidDate,
} from '@ag.ds-next/react/date-range-picker-next';
import {
	GetDataFilters,
	StaffMemberRole,
	StaffMemberTrainingCompleted,
} from './lib/types';
import { SortAndFilterProvider, useSortAndFilterContext } from './lib/contexts';
import { defaultFilters } from './lib/useSortAndFilter';

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

	useEffect(() => {
		setFormState(filters);
	}, [filters]);

	const applyFilters = () => {
		setFilters(formState);
		closeDrawer();
	};

	const setLocalFilter = (filter: Partial<GetDataFilters>) => {
		setFormState({ ...formState, ...filter });
	};

	const clearFilters = () => {
		resetFilters();
		setFormState(defaultFilters);
	};

	const cancel = () => {
		closeDrawer();
		setFormState(filters);
	};

	const mockSortAndFilterFunc = () => {
		throw new Error('Not implemented');
	};

	const getOnChangeRole =
		(roleType: StaffMemberRole) => (event: ChangeEvent<HTMLInputElement>) =>
			setFormState((prevFormState) => ({
				...prevFormState,
				role: {
					...prevFormState.role,
					[roleType]: event.target.checked,
				},
			}));

	const getOnChangeTrainingCompleted =
		(trainingCompletedType: StaffMemberTrainingCompleted) =>
		(event: ChangeEvent<HTMLInputElement>) =>
			setFormState((prevFormState) => ({
				...prevFormState,
				trainingCompleted: {
					...prevFormState.trainingCompleted,
					[trainingCompletedType]: event.target.checked,
				},
			}));

	const isFromInvalid = useCallback((value: Date, otherDate: Date) => {
		return value ? !isValidDate(value, { toDate: otherDate }) : false;
	}, []);

	const isToInvalid = useCallback((value: Date, otherDate: Date) => {
		return value ? !isValidDate(value, { fromDate: otherDate }) : false;
	}, []);

	const fromInvalid =
		formState.lastActiveFrom && formState.lastActiveTo
			? isFromInvalid(
					new Date(formState.lastActiveFrom),
					new Date(formState.lastActiveTo)
			  )
			: false;
	const toInvalid =
		formState.lastActiveFrom && formState.lastActiveTo
			? isToInvalid(
					new Date(formState.lastActiveTo),
					new Date(formState.lastActiveFrom)
			  )
			: false;

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
				actions={
					<ButtonGroup>
						<Button form="staff-filters-form" onClick={applyFilters}>
							Apply filters
						</Button>

						<Button onClick={clearFilters} variant="secondary">
							Clear filters
						</Button>

						<Button onClick={cancel} variant="tertiary">
							Cancel
						</Button>
					</ButtonGroup>
				}
				isOpen={isDrawerOpen}
				onClose={cancel}
				title="Filter by"
			>
				<form id="staff-filters-form">
					<FormStack>
						<ControlGroup block hideOptionalLabel label="Role">
							<Checkbox
								checked={formState.role.Manager}
								onChange={getOnChangeRole('Manager')}
								value="manager"
							>
								Manager
							</Checkbox>

							<Checkbox
								checked={formState.role.Employee}
								onChange={getOnChangeRole('Employee')}
								value="employee"
							>
								Employee
							</Checkbox>

							<Checkbox
								checked={formState.role.Trainee}
								onChange={getOnChangeRole('Trainee')}
								value="trainee"
							>
								Trainee
							</Checkbox>

							<Checkbox
								checked={formState.role['Work experience']}
								onChange={getOnChangeRole('Work experience')}
								value="work-experience"
							>
								Work experience
							</Checkbox>
						</ControlGroup>

						<ControlGroup block hideOptionalLabel label="Training completed">
							<Checkbox
								checked={formState.trainingCompleted.Deliveries}
								onChange={getOnChangeTrainingCompleted('Deliveries')}
								value="deliveries"
							>
								Deliveries
							</Checkbox>

							<Checkbox
								checked={formState.trainingCompleted.Distribution}
								onChange={getOnChangeTrainingCompleted('Distribution')}
								value="distribution"
							>
								Distribution
							</Checkbox>

							<Checkbox
								checked={formState.trainingCompleted['Ice cream making']}
								onChange={getOnChangeTrainingCompleted('Ice cream making')}
								value="ice-cream-making"
							>
								Ice cream making
							</Checkbox>

							<Checkbox
								checked={formState.trainingCompleted.Packaging}
								onChange={getOnChangeTrainingCompleted('Packaging')}
								value="packaging"
							>
								Packaging
							</Checkbox>
						</ControlGroup>

						<DateRangePickerNext
							fromInvalid={fromInvalid}
							fromLabel="From date"
							legend="Last active"
							message={
								fromInvalid && toInvalid
									? 'Enter valid start and end dates'
									: fromInvalid
									? 'Enter a valid start date'
									: toInvalid
									? 'Enter a valid end date'
									: undefined
							}
							onChange={(dateRange) =>
								setFormState((prevFormState) => ({
									...prevFormState,
									lastActiveFrom:
										dateRange.from && new Date(dateRange.from).toISOString(),
									lastActiveTo:
										dateRange.to && new Date(dateRange.to).toISOString(),
								}))
							}
							required
							toInvalid={toInvalid}
							toLabel="To date"
							value={{
								from: formState.lastActiveFrom,
								to: formState.lastActiveTo,
							}}
						/>
					</FormStack>
				</form>
			</Drawer>
		</SortAndFilterProvider>
	);
};
