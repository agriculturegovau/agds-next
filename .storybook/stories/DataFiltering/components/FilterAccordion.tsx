import { useSpring, animated } from '@react-spring/web';
import { useRef } from 'react';
import { isDate, isEqual, isValid } from 'date-fns';
import { Flex } from '../../../../packages/react/src/flex';
import { DateRangePicker } from '../../../../packages/react/src/date-range-picker';
import { usePrefersReducedMotion } from '../../../../packages/react/src/core';
import { useSortAndFilterContext } from '../lib/contexts';
import { FilterAssigneeSelect } from './FilterAssigneeSelect';
import { FilterStateSelect } from './FilterStateSelect';

function isValidDate(value?: string) {
	return isDate(value) && isValid(value);
}

export const FilterAccordion = ({
	ariaLabelledBy,
	id,
	isOpen,
}: {
	ariaLabelledBy: string;
	id: string;
	isOpen: boolean;
}) => {
	const { filters, setFilter } = useSortAndFilterContext();

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
		<animated.section
			id={id}
			aria-labelledby={ariaLabelledBy}
			style={animatedHeight}
			css={{
				overflow: 'hidden',
			}}
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
				<FilterStateSelect />
				<FilterAssigneeSelect />
				<DateRangePicker
					fromLabel="Registered from"
					toLabel="Registered to"
					hideOptionalLabel
					onChange={(requestDate) => {
						const tsHappyFilterDates = {
							from:
								typeof filters.requestDate.from === 'string'
									? new Date(filters.requestDate.from)
									: filters.requestDate.from || 0,
							to:
								typeof filters.requestDate.to === 'string'
									? new Date(filters.requestDate.to)
									: filters.requestDate.to || 0,
						};
						if (
							!isEqual(requestDate.from || 0, tsHappyFilterDates.from) ||
							!isEqual(requestDate.to || 0, tsHappyFilterDates.to)
						) {
							setFilter({ requestDate });
						}
					}}
					onFromInputChange={(from) => {
						if (isValidDate(from)) {
							setFilter({
								requestDate: { ...filters.requestDate, from },
							});
						}
					}}
					onToInputChange={(to) => {
						if (isValidDate(to)) {
							setFilter({
								requestDate: { ...filters.requestDate, to },
							});
						}
					}}
					value={filters.requestDate}
				/>
			</Flex>
		</animated.section>
	);
};
