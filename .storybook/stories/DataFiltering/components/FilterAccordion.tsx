import { useSpring, animated } from '@react-spring/web';
import { useRef } from 'react';
import { Flex } from '../../../../packages/react/src/flex';
import { DateRangePicker } from '../../../../packages/react/src/date-range-picker';
import { usePrefersReducedMotion } from '../../../../packages/react/src/core';
import { useSortAndFilterContext } from '../lib/contexts';
import { FilterAssigneeSelect } from './FilterAssigneeSelect';
import { FilterStateSelect } from './FilterStateSelect';

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
			aria-labelledby={ariaLabelledBy}
			css={{
				overflow: 'hidden',
			}}
			id={id}
			style={animatedHeight}
		>
			<Flex
				alignItems={{ xs: 'stretch', md: 'flex-end' }}
				background="shade"
				border
				borderColor="muted"
				columnGap={1}
				flexDirection={{ xs: 'column', md: 'row' }}
				flexWrap="wrap"
				padding={1}
				ref={ref}
				rounded
				rowGap={1.5}
			>
				<FilterStateSelect />
				<FilterAssigneeSelect />
				<DateRangePicker
					fromLabel="Registered from"
					hideOptionalLabel
					onChange={(requestDate) => setFilter({ requestDate })}
					toLabel="Registered to"
					value={filters.requestDate}
				/>
			</Flex>
		</animated.section>
	);
};
