import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { Drawer } from '@ag.ds-next/react/drawer';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
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

type DateOrStringOrUndefined = Date | string | undefined;

const isFromInvalid = (
	value: DateOrStringOrUndefined,
	otherDate: DateOrStringOrUndefined
) => {
	return value ? !isValidDate(value, { toDate: otherDate }) : false;
};

const isToInvalid = (
	value: DateOrStringOrUndefined,
	otherDate: DateOrStringOrUndefined
) => {
	return value ? !isValidDate(value, { fromDate: otherDate }) : false;
};

export const DashboardFilterDrawer = ({
	isDrawerOpen,
	closeDrawer,
}: DashboardFilterDrawerProps) => {
	const { filters, setFilters, resetFilters } = useSortAndFilterContext();
	const [formState, setFormState] = useState<GetDataFilters>(filters);
	const [fromInvalid, setFromInvalid] = useState(false);
	const [toInvalid, setToInvalid] = useState(false);

	const fromInputRef = useRef<HTMLInputElement>(null);
	const toInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		setFormState(filters);
	}, [filters]);

	const applyFilters = () => {
		if (toInvalid && !fromInvalid) {
			toInputRef.current?.focus();
			return;
		}
		if (fromInvalid) {
			fromInputRef.current?.focus();
			return;
		}
		setFilters(formState);
		closeDrawer();
	};

	const setLocalFilter = (filter: Partial<GetDataFilters>) => {
		setFormState({ ...formState, ...filter });
	};

	const clearFilters = () => {
		setFromInvalid(false);
		setToInvalid(false);
		resetFilters();
		setFormState(defaultFilters);
	};

	const cancel = () => {
		closeDrawer();
		setFromInvalid(false);
		setToInvalid(false);
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
							fromInputRef={fromInputRef}
							fromInvalid={fromInvalid}
							fromLabel="From date"
							legend="Last active"
							message={
								fromInvalid && toInvalid
									? 'From date and To date is invalid'
									: fromInvalid
									? 'From date is invalid'
									: toInvalid
									? 'To date is invalid'
									: undefined
							}
							onChange={(dateRange) => {
								const fromInvalid = isFromInvalid(dateRange.from, dateRange.to);
								const toInvalid = isToInvalid(dateRange.to, dateRange.from);
								setFromInvalid(fromInvalid);
								setToInvalid(toInvalid);

								setFormState((prevFormState) => ({
									...prevFormState,
									lastActiveFrom:
										!dateRange.from || fromInvalid
											? dateRange.from
											: new Date(dateRange.from).toISOString(),
									lastActiveTo:
										!dateRange.to || toInvalid
											? dateRange.to
											: new Date(dateRange.to).toISOString(),
								}));
							}}
							required
							toInputRef={toInputRef}
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
