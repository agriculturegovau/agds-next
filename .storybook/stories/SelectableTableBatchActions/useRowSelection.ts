import { useEffect, useMemo, useRef, useState } from 'react';
import { RowData } from './utils';

export function useRowSelection({
	paginatedData,
}: {
	data: RowData[];
	paginatedData: RowData[];
}) {
	const [selectedItems, setSelectedItems] = useState<RowData[]>([]);

	const paginatedSelectedIds = useMemo(() => {
		const paginatedIds = paginatedData.map((i) => i.id);
		return selectedItems
			.filter((item) => paginatedIds.includes(item.id))
			.map((i) => i.id);
	}, [paginatedData, selectedItems]);

	const isShiftKeyPressed = useRef(false);

	function isRowSelected(row: RowData) {
		return selectedItems.some((item) => item.id === row.id);
	}

	function toggleRowSelected(row: RowData) {
		setSelectedItems((current) => {
			if (selectedItems.some((item) => item.id === row.id)) {
				return current.filter((item) => item.id !== row.id);
			} else {
				return [...current, row];
			}
		});
	}

	function isEveryRowSelected() {
		return paginatedData.every((r) => paginatedSelectedIds.includes(r.id));
	}

	function isAnyRowSelected() {
		return paginatedSelectedIds.length > 0;
	}

	function toggleAllRows() {
		// When no rows selected or we're indeterminate we'll select all rows to match the screen reader announcement
		setSelectedItems(isEveryRowSelected() ? [] : paginatedData);
	}

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			isShiftKeyPressed.current = event.key === 'Shift';
		}
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, []);

	const hasSelections = selectedItems.length > 0;

	const isTableHeaderChecked = isEveryRowSelected();
	const isTableHeaderIndeterminate = isTableHeaderChecked
		? false
		: isAnyRowSelected();

	return {
		isTableHeaderChecked,
		isTableHeaderIndeterminate,
		selectedItems,
		setSelectedItems,
		isRowSelected,
		toggleRowSelected,
		toggleAllRows,
		hasSelections,
	};
}
