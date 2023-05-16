import { useEffect, useState } from 'react';
import { Stack } from '@ag.ds-next/react/box';
import { DateRangePicker } from '@ag.ds-next/react/date-picker';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { FilterDrawer } from '@ag.ds-next/react/src/side-drawer';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { GetDataFilters } from '../lib/getData';
import { FormDivider } from '../../../../example-site/components/FormDivider';
import { FilterStatusSelect } from './FilterStatusSelect';
import { FilterAssigneeSelect } from './FilterAssigneeSelect';
import { FilterStateSelect } from './FilterStateSelect';

export const DashboardFilterModal = ({
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
	const [selectedFilters, setSelectedFilters] =
		useState<GetDataFilters>(filters);

	const handleApply = () => {
		setFilters(selectedFilters);
		onDismiss();
	};

	useEffect(() => {
		setSelectedFilters(filters);
	}, [isOpen, filters]);

	return (
		<FilterDrawer
			title="Filter by"
			isOpen={isOpen}
			onDismiss={onDismiss}
			actions={
				<ButtonGroup>
					<Button onClick={handleApply}>Apply filters</Button>
					<Button variant="secondary" onClick={resetFilters}>
						Reset filters
					</Button>
					<Button variant="tertiary" onClick={onDismiss}>
						Cancel
					</Button>
				</ButtonGroup>
			}
		>
			<Stack gap={2}>
				<Fieldset legend="Fieldset">
					<FormStack>
						<FilterStatusSelect
							filters={selectedFilters}
							setFilters={setSelectedFilters}
						/>
						<FilterStateSelect
							filters={selectedFilters}
							setFilters={setSelectedFilters}
						/>
					</FormStack>
				</Fieldset>
				<FormDivider />
				<Fieldset legend="Fieldset">
					<FormStack>
						<FilterAssigneeSelect
							filters={selectedFilters}
							setFilters={setSelectedFilters}
						/>
						<DateRangePicker
							fromLabel="Registered from"
							toLabel="Registered to"
							onChange={(value) =>
								setSelectedFilters({
									...selectedFilters,
									requestDate: value,
								})
							}
							value={selectedFilters.requestDate}
						/>
					</FormStack>
				</Fieldset>
			</Stack>
		</FilterDrawer>
	);
};
