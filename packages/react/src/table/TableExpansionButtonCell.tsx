import { Dispatch, SetStateAction } from 'react';
import { Button } from '../button';
import { ChevronDownIcon, ChevronUpIcon } from '../icon';
import { VisuallyHidden } from '../a11y';
import { TableCell } from './TableCell';

export type BooleanCollection<Key extends string = string> = Partial<
	Record<Key, boolean>
>;

export type ExpansionProps<ExpansionKey extends string> = {
	expansionState: BooleanCollection<ExpansionKey>;
	dataKey: ExpansionKey;
};

type ExpansionButtonCellProps<ExpansionKey extends string> =
	ExpansionProps<ExpansionKey> & {
		setExpansionState: Dispatch<
			SetStateAction<BooleanCollection<ExpansionKey>>
		>;
	};

export function TableExpansionButtonCell<ExpansionKey extends string>({
	expansionState,
	setExpansionState,
	dataKey,
}: ExpansionButtonCellProps<ExpansionKey>) {
	const isExpanded = expansionState[dataKey] || false;
	return (
		<TableCell textAlign="right">
			<Button
				iconAfter={isExpanded ? ChevronUpIcon : ChevronDownIcon}
				variant="text"
				onClick={() => {
					setExpansionState((prev) => ({
						...prev,
						[dataKey]: !isExpanded,
					}));
				}}
			>
				{isExpanded ? 'Collapse' : 'Expand'}
			</Button>
			<VisuallyHidden>
				<div aria-live="polite">{!isExpanded ? 'Row collapsed' : ''}</div>
			</VisuallyHidden>
		</TableCell>
	);
}
