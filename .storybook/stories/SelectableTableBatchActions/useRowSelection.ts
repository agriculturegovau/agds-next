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
		// No rows are selected, so select all of them
		if (paginatedSelectedIds.length === 0) {
			setSelectedItems((selectedItems) => [...selectedItems, ...paginatedData]);
		} else {
			// Some rows are selected, so deselect all of them
			setSelectedItems((selectedItems) =>
				selectedItems.filter((i) => !paginatedSelectedIds.includes(i.id))
			);
		}
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
