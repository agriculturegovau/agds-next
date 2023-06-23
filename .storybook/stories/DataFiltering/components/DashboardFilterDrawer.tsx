import { useState } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { DateRangePicker } from '@ag.ds-next/react/date-range-picker';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { Divider } from '@ag.ds-next/react/divider';
import { FilterDrawer } from '@ag.ds-next/react/src/filter-drawer';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { GetDataFilters } from '../lib/getData';
import { FilterStatusSelect } from './FilterStatusSelect';
import { FilterAssigneeSelect } from './FilterAssigneeSelect';
import { FilterStateSelect } from './FilterStateSelect';

type DashboardFilterDrawerProps = {
	isDrawerOpen: boolean;
	closeDrawer: () => void;
	filters: GetDataFilters;
	setFilters: (filters: GetDataFilters) => void;
	resetFilters: () => void;
};

export const DashboardFilterDrawer = ({
	isDrawerOpen,
	closeDrawer,
	filters,
	setFilters,
	resetFilters,
}: DashboardFilterDrawerProps) => {
	const [formState, setFormState] = useState<GetDataFilters>(filters);

	const onApplyFiltersClick = () => {
		setFilters(formState);
		closeDrawer();
	};

	const onClearFiltersClick = () => {
		resetFilters();
		setFormState({
			assignee: undefined,
			businessName: undefined,
			requestDate: { from: undefined, to: undefined },
			state: undefined,
			status: undefined,
		});
	};

	const onCloseClick = () => {
		closeDrawer();
		setFormState(filters);
	};

	return (
		<FilterDrawer
			title="Filter by"
			isOpen={isDrawerOpen}
			onDismiss={onCloseClick}
			actions={
				<ButtonGroup>
					<Button onClick={onApplyFiltersClick}>Apply filters</Button>
					<Button variant="secondary" onClick={onClearFiltersClick}>
						Clear filters
					</Button>
					<Button variant="tertiary" onClick={onCloseClick}>
						Cancel
					</Button>
				</ButtonGroup>
			}
		>
			<Stack gap={3}>
				<Fieldset legend="Fieldset">
					<FormStack>
						<FilterStatusSelect filters={formState} setFilters={setFormState} />
						<FilterStateSelect filters={formState} setFilters={setFormState} />
					</FormStack>
				</Fieldset>
				<Divider />
				<Fieldset legend="Fieldset">
					<FormStack>
						<FilterAssigneeSelect
							filters={formState}
							setFilters={setFormState}
						/>
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
		</FilterDrawer>
	);
};
