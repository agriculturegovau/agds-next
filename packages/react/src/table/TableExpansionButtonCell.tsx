import { Dispatch, SetStateAction } from 'react';
import { Button } from '../button';
import { ChevronDownIcon, ChevronUpIcon } from '../icon';
import { VisuallyHidden } from '../a11y';
import { TableCell } from './TableCell';

export type BooleanCollection<Key extends string = string> = Partial<
	Record<Key, boolean>
>;

const expanderTextStyles = {
	display: 'block',
	gridColumn: '1',
	gridRow: '1',
	textAlign: 'right',
} as const;

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
				{/* HTML structure ensures that the width of the expansion button column remains consistent */}
				<span css={{ display: 'grid' }}>
					<span
						css={{
							...expanderTextStyles,
							opacity: isExpanded ? 0 : 1,
						}}
						aria-hidden={isExpanded}
					>
						Expand
					</span>
					<span
						css={{
							...expanderTextStyles,
							opacity: isExpanded ? 1 : 0,
						}}
						aria-hidden={!isExpanded}
					>
						Collapse
					</span>
				</span>
			</Button>
			<VisuallyHidden>
				<div aria-live="polite">{!isExpanded ? 'Row collapsed' : ''}</div>
			</VisuallyHidden>
		</TableCell>
	);
}
