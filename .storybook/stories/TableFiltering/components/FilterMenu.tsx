import { useCallback, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { Box, Flex } from '@ag.ds-next/react/box';
import { Button } from '@ag.ds-next/react/button';
import { GetDataFilters } from '../lib/data';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { SearchInput } from '@ag.ds-next/react/search-input';
import { Select } from '@ag.ds-next/react/select';
import { DateRangePicker } from '@ag.ds-next/react/date-picker';
import { useClickOutside, useTernaryState } from '@ag.ds-next/react/core';
import { ChevronDownIcon, ChevronUpIcon } from '@ag.ds-next/react/icon';
import { assignees } from '../lib/generateBusinessData';

export const FilterMenu = ({
	filters,
	setFilters,
	resetPagination,
	resetFilters,
}: {
	filters: GetDataFilters;
	setFilters: (filters: GetDataFilters) => void;
	resetPagination: () => void;
	resetFilters: () => void;
}) => {
	const [isOpen, open, close] = useTernaryState(false);

	const [refEl, setRefEl] = useState<HTMLDivElement | null>(null);
	const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
	const { styles, attributes } = usePopper(refEl, popperEl, {
		placement: 'bottom-start',
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
	});

	const onButtonClick = useCallback(() => {
		if (isOpen) {
			close();
		} else {
			open();
		}
	}, [isOpen, open, close]);

	// Close the  when the user clicks outside
	const clickOutsideRef = useRef(popperEl);
	clickOutsideRef.current = popperEl;

	const handleClickOutside = useCallback(() => {
		if (isOpen) close();
	}, [isOpen, close]);

	useClickOutside(clickOutsideRef, handleClickOutside);

	return (
		<div ref={setRefEl}>
			<Button
				onClick={onButtonClick}
				variant="secondary"
				iconAfter={isOpen ? ChevronUpIcon : ChevronDownIcon}
			>
				{isOpen ? 'Hide filters' : 'Show filters'}
			</Button>
			{isOpen && (
				<Box
					ref={setPopperEl}
					background="body"
					rounded
					padding={1}
					style={{
						...styles.popper,
						// copied from Card
						boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
					}}
					{...attributes.popper}
					css={{ zIndex: 1 }}
				>
					<FormStack>
						<SearchInput
							label="Search Business name"
							maxWidth="lg"
							hideOptionalLabel
							value={filters.businessName}
							onChange={(searchString) => {
								// debounce
								setFilters({
									...filters,
									businessName: searchString,
								});
							}}
						/>
						<Select
							label="Assignee"
							placeholder="All"
							hideOptionalLabel
							options={assignees.map((option) => ({
								label: option,
								value: option,
							}))}
							value={filters.assignee || ''}
							onChange={(e) => {
								const value = e.target.value;

								resetPagination();
								setFilters({
									...filters,
									assignee: value === '' ? undefined : value,
								});
							}}
						/>

						<Select
							label="State"
							placeholder="All"
							hideOptionalLabel
							options={[
								{ value: 'act', label: 'ACT' },
								{ value: 'nsw', label: 'NSW' },
								{ value: 'nt', label: 'NT' },
								{ value: 'qld', label: 'QLD' },
								{ value: 'sa', label: 'SA' },
								{ value: 'tas', label: 'TAS' },
								{ value: 'vic', label: 'VIC' },
								{ value: 'wa', label: 'WA' },
							]}
							value={filters.state || ''}
							onChange={(e) => {
								const value = e.target.value;
								resetPagination();
								setFilters({
									...filters,
									state: value === '' ? undefined : value,
								});
							}}
						/>
						<Select
							label="Status"
							placeholder="All"
							hideOptionalLabel
							options={[
								{ value: 'booked', label: 'Booked' },
								{ value: 'notBooked', label: 'Not booked' },
								{ value: 'completed', label: 'Completed' },
								{ value: 'cancelled', label: 'Cancelled' },
							]}
							value={filters.status || ''}
							onChange={(e) => {
								const value = e.target.value as
									| ''
									| 'booked'
									| 'notBooked'
									| 'completed'
									| 'cancelled';
								resetPagination();
								setFilters({
									...filters,
									status: value === '' ? undefined : value,
								});
							}}
						/>

						<DateRangePicker
							fromLabel="Registered from"
							toLabel="Registered to"
							onChange={(value) => {
								resetPagination();
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
								resetPagination();
								resetFilters();
							}}
						>
							Reset filters
						</Button>
					</FormStack>
				</Box>
			)}
		</div>
	);
};
