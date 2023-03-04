import { useSpring, animated } from '@react-spring/web';
import { Flex } from '@ag.ds-next/react/box';
import { GetDataFilters, GetDataSort } from '../lib/data';
import { DateRangePicker } from '@ag.ds-next/react/date-picker';
import { Button } from '@ag.ds-next/react/button';
import { FilterAssigneeSelect } from './FilterAssigneeSelect';
import { FilterStateSelect } from './FilterStateSelect';
import { usePrefersReducedMotion } from '@ag.ds-next/react/core';
import { useRef } from 'react';

export const FilterBar = ({
	ariaLabelledBy,
	id,
	isOpen,
	filters,
	sort,
	setFilters,
	setSort,
	resetPagination,
	resetFilters,
}: {
	ariaLabelledBy: string;
	id: string;
	isOpen: boolean;
	filters: GetDataFilters;
	sort: GetDataSort;
	setFilters: (filters: GetDataFilters) => void;
	setSort: (sort: GetDataSort) => void;
	resetPagination: () => void;
	resetFilters: () => void;
}) => {
	// This code has been copied from the Accordion component.
	const ref = useRef<HTMLDivElement>(null);
	const prefersReducedMotion = usePrefersReducedMotion();
	const animatedHeight = useSpring({
		from: { display: 'none', height: 0 },
		to: async (next) => {
			if (isOpen) await next({ display: 'block' });
			await next({
				height: isOpen ? ref.current?.offsetHeight : 0,
				immediate: prefersReducedMotion,
			});
			await next(isOpen ? { height: 'auto' } : { display: 'none' });
		},
	});

	return (
		<animated.div
			id={id}
			aria-labelledby={ariaLabelledBy}
			role="region"
			style={animatedHeight}
			css={{
				overflow: 'hidden',
			}}
		>
			<Flex
				ref={ref}
				gap={1}
				background="shade"
				flexWrap="wrap"
				alignItems="flex-end"
				padding={1}
				rounded
				border
				borderColor="muted"
			>
				<FilterStateSelect
					filters={filters}
					setFilters={setFilters}
					resetPagination={resetPagination}
				/>
				<FilterAssigneeSelect
					filters={filters}
					setFilters={setFilters}
					resetPagination={resetPagination}
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
			</Flex>
		</animated.div>
	);
};

// text search
// removable tags
