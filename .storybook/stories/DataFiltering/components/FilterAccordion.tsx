import { useRef } from 'react';
import { Flex } from '@ag.ds-next/react/box';
import { DateRangePicker } from '@ag.ds-next/react/date-picker';
import { Button } from '@ag.ds-next/react/button';
import { GetDataFilters } from '../lib/getData';
import { FilterAssigneeSelect } from './FilterAssigneeSelect';
import { FilterStateSelect } from './FilterStateSelect';

export const FilterAccordion = ({
	ariaLabelledBy,
	id,
	isOpen,
	filters,
	setFilters,
	resetFilters,
}: {
	ariaLabelledBy: string;
	id: string;
	isOpen: boolean;
	filters: GetDataFilters;
	setFilters: (filters: GetDataFilters) => void;
	resetFilters: () => void;
}) => {
	// This code has been copied from the Accordion component.
	const ref = useRef<HTMLDivElement>(null);

	return (
		<section
			id={id}
			aria-labelledby={ariaLabelledBy}
			css={{ display: isOpen ? 'none' : 'block' }}
		>
			<Flex
				ref={ref}
				columnGap={1}
				rowGap={1.5}
				alignItems={{ xs: 'stretch', md: 'flex-end' }}
				flexDirection={{ xs: 'column', md: 'row' }}
				background="shade"
				flexWrap="wrap"
				padding={1}
				rounded
				border
				borderColor="muted"
			>
				<FilterStateSelect filters={filters} setFilters={setFilters} />
				<FilterAssigneeSelect filters={filters} setFilters={setFilters} />
				<DateRangePicker
					fromLabel="Registered from"
					toLabel="Registered to"
					hideOptionalLabel
					onChange={(value) => {
						setFilters({
							...filters,
							requestDate: value,
						});
					}}
					value={filters.requestDate}
				/>
				<Button
					variant="secondary"
					onClick={() => {
						resetFilters();
					}}
				>
					Reset filters
				</Button>
			</Flex>
		</section>
	);
};
