import { Stack } from '@ag.ds-next/react/box';
import { DateRangePicker } from '@ag.ds-next/react/date-picker';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { FilterDrawer } from '@ag.ds-next/react/src/filter-drawer';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { GetDataFilters } from '../lib/getData';
import { FormDivider } from '../../../../example-site/components/FormDivider';
import { FilterStatusSelect } from './FilterStatusSelect';
import { FilterAssigneeSelect } from './FilterAssigneeSelect';
import { FilterStateSelect } from './FilterStateSelect';

export const DashboardFilterModalInstant = ({
	isOpen,
	onDismiss,
	filters,
	setFilters,
	resetFilters,
}: {
	isOpen: boolean;
	onDismiss: () => void;
	filters: GetDataFilters;
	setFilters: (filters: GetDataFilters) => void;
	resetFilters: () => void;
}) => {
	return (
		<FilterDrawer
			title="Filter by"
			isOpen={isOpen}
			onDismiss={onDismiss}
			overlay={false}
		>
			<Stack gap={2}>
				<Fieldset legend="Fieldset">
					<FormStack>
						<FilterStatusSelect filters={filters} setFilters={setFilters} />
						<FilterStateSelect filters={filters} setFilters={setFilters} />
					</FormStack>
				</Fieldset>
				<FormDivider />
				<Fieldset legend="Fieldset">
					<FormStack>
						<FilterAssigneeSelect filters={filters} setFilters={setFilters} />
						<DateRangePicker
							fromLabel="Registered from"
							toLabel="Registered to"
							onChange={(value) =>
								setFilters({
									...filters,
									requestDate: value,
								})
							}
							value={filters.requestDate}
						/>
					</FormStack>
				</Fieldset>
			</Stack>
		</FilterDrawer>
	);
};
