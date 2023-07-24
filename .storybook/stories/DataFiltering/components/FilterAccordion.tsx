import { useSpring, animated } from '@react-spring/web';
import { useRef } from 'react';
import { Flex } from '@ag.ds-next/react/flex';
import { DateRangePicker } from '@ag.ds-next/react/date-range-picker';
import { usePrefersReducedMotion } from '@ag.ds-next/react/core';
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
	const { filters, setFilters } = useSortAndFilterContext();

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
					onChange={(requestDate) => setFilters({ ...filters, requestDate })}
					onFromInputChange={(from) =>
						setFilters({
							...filters,
							requestDate: { ...filters.requestDate, from },
						})
					}
					onToInputChange={(to) =>
						setFilters({
							...filters,
							requestDate: { ...filters.requestDate, to },
						})
					}
					value={filters.requestDate}
				/>
			</Flex>
		</animated.section>
	);
};
