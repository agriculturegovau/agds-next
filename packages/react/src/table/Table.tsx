import {
	PropsWithChildren,
	forwardRef,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import { Box } from '../box';
import { mergeRefs } from '../core';
import { TableContext } from './TableContext';
import { useScrollerContext } from './ScrollerContext';

const MAX_FIXED_COLUMNS_FROM_LEFT = 1;

export type ColumnOffset = {
	columnNumber: number;
	offsetValue: 0 | `${number}rem`;
	isLastColumn: boolean;
};

type FrozenColumnData = {
	columnOffsets: ColumnOffset[];
	overlayOffsets: {
		left: 0 | `${number}rem`;
		right: 0 | `${number}rem`;
	};
};

export type TableProps = PropsWithChildren<{
	/** Define which column numbers should be frozen. This is one-based, so `1` is the first column. */
	frozenColumns?: number[];
	/** If true, alternating rows will have a different background colour. */
	striped?: boolean;
	/** Setting this to -1 allows the table to be focusable. */
	tabIndex?: number;
	/** The table-layout CSS property sets the algorithm used to lay out cells, rows, and columns. */
	tableLayout?: 'auto' | 'fixed';
	/** The id of the element that labels the table */
	'aria-labelledby'?: string;
	/** The id of the element that describes the table */
	'aria-describedby'?: string;
	/** The total number of rows in the table */
	'aria-rowcount'?: number;
	/** The id of the table */
	id?: string;
}>;

export const Table = forwardRef<HTMLTableElement, TableProps>(function Table(
	{
		children,
		frozenColumns,
		striped,
		tabIndex,
		tableLayout = 'auto',
		'aria-labelledby': ariaLabelledby,
		'aria-describedby': ariaDescribedby,
		'aria-rowcount': ariaRowcount,
		id,
	},
	ref
) {
	const tableRef = useRef<HTMLTableElement>(null);
	const [frozenColumnsOffsets, setFrozenColumnsOffsets] =
		useState<ColumnOffset[]>();

	const { setOverlayOffsets } = useScrollerContext();

	const calculateOffsets = useCallback(() => {
		const cells = tableRef.current?.querySelectorAll('td, th');
		if (frozenColumns === undefined || !cells) return;

		const numberOfColumns =
			tableRef.current?.querySelector('tr')?.children?.length;

		const frozenColumnsData = frozenColumns.reduce(
			(acc, columnNumber, index) => {
				const prevColumnNumber = frozenColumns[index - 1] || 0;
				const isLastColumn = columnNumber === numberOfColumns;

				const isNextValidColumnNumber =
					(columnNumber - prevColumnNumber === 1 &&
						columnNumber <= MAX_FIXED_COLUMNS_FROM_LEFT) ||
					isLastColumn;

				return isNextValidColumnNumber
					? {
							columnOffsets: [
								...acc.columnOffsets,
								{
									columnNumber,
									isLastColumn,
									offsetValue:
										index === 0 || isLastColumn
											? (0 as const)
											: (`${cells[index - 1].clientWidth / 16}rem` as const),
								},
							],
							overlayOffsets: {
								left: isLastColumn
									? acc.overlayOffsets.left
									: (`${cells[index].clientWidth / 16}rem` as const),
								right: isLastColumn
									? (`${
											cells.item(columnNumber - 1).clientWidth / 16
									  }rem` as const)
									: acc.overlayOffsets.right,
							},
					  }
					: acc;
			},
			{
				columnOffsets: [],
				overlayOffsets: { left: 0, right: 0 },
			} as FrozenColumnData
		);

		setOverlayOffsets?.(frozenColumnsData.overlayOffsets);
		setFrozenColumnsOffsets(frozenColumnsData.columnOffsets);

		// We want to update column and overlay offsets when children change to ensure placement is accurate
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [children, frozenColumns, setOverlayOffsets]);

	useEffect(() => {
		if (
			typeof window === 'undefined' ||
			!('ResizeObserver' in window) ||
			!tableRef.current
		) {
			return;
		}

		const observer = new ResizeObserver(() => {
			calculateOffsets();
		});

		observer.observe(tableRef.current);

		return () => {
			observer.disconnect();
		};
	}, [calculateOffsets]);

	useLayoutEffect(() => {
		calculateOffsets();
	}, [calculateOffsets]);

	const captionHeight =
		tableRef.current?.querySelector('caption')?.clientHeight;

	return (
		<TableContext.Provider
			value={{
				frozenColumnsOffsets,
				striped,
				tableLayout,
			}}
		>
			<Box
				aria-describedby={ariaDescribedby}
				aria-labelledby={ariaLabelledby}
				aria-rowcount={ariaRowcount}
				as="table"
				css={{
					borderCollapse: 'collapse',
					borderSpacing: 0,
					tableLayout,
					position: 'relative',
					...(captionHeight && { marginTop: `${captionHeight / 16}rem` }),
				}}
				display="table"
				focusRingFor="keyboard"
				fontSize="sm"
				id={id}
				tabIndex={tabIndex}
				ref={mergeRefs([tableRef, ref])}
				width="100%"
			>
				{children}
			</Box>
		</TableContext.Provider>
	);
});
