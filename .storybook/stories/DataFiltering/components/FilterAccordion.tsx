import { useRef } from 'react';
import { Flex } from '../../../../packages/react/src/flex';
import { DateRangePicker } from '../../../../packages/react/src/date-range-picker';
import {
	mapSpacing,
	useTransitionHeight,
} from '../../../../packages/react/src/core';
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
	const transitionHeightCSS = useTransitionHeight(isOpen, mapSpacing(1));

	// This code has been copied from the Accordion component.
	const ref = useRef<HTMLDivElement>(null);

	return (
		<section aria-labelledby={ariaLabelledBy} css={transitionHeightCSS} id={id}>
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
					onFromInputChange={(from) =>
						setFilter({
							requestDate: { ...filters.requestDate, from },
						})
					}
					onToInputChange={(to) =>
						setFilter({
							requestDate: { ...filters.requestDate, to },
						})
					}
					toLabel="Registered to"
					value={filters.requestDate}
				/>
			</Flex>
		</section>
	);
};
