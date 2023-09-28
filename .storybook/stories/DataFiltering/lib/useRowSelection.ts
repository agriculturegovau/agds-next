import { useEffect, useMemo, useRef, useState } from 'react';
import { BusinessForAuditWithIndex } from './generateBusinessData';

type BusinessForAuditId = BusinessForAuditWithIndex['id'];

export type RowSelection = {
	isRowSelected: (id: BusinessForAuditId) => boolean;
	toggleRowSelected: (id: BusinessForAuditId) => void;
	toggleAllRows: () => void;
	// DataTableSelectAllCheckbox state
	isSelectAllCheckboxChecked: boolean;
	isSelectAllCheckboxIndeterminate: boolean;
	clearRowSelections: () => void;
	hasSelections: boolean;
	selectedItems: BusinessForAuditId[];
	setSelectedItems: (ids: BusinessForAuditId[]) => void;
};

export function useRowSelection({
	pageData,
}: {
	pageData: BusinessForAuditWithIndex[];
}): RowSelection {
	const [selectedIds, setSelectedIds] = useState<string[]>([]);
	const hasSelections = selectedIds.length > 0;
	/** The IDs of all of the items in the current page */
	const allPageItemIds = useMemo(() => pageData.map((i) => i.id), [pageData]);
	const isShiftKeyPressed = useRef(false);

	const paginatedSelectedIds = useMemo(() => {
		return selectedIds.filter((selectedId) =>
			allPageItemIds.includes(selectedId)
		);
	}, [selectedIds, allPageItemIds]);

	function isRowSelected(rowId: BusinessForAuditId) {
		return selectedIds.some((sId) => sId === rowId);
	}

	function toggleRowSelected(rowId: BusinessForAuditId) {
		setSelectedIds((current) => {
			if (selectedIds.some((sId) => sId === rowId)) {
				return current.filter((sId) => sId !== rowId);
			} else {
				return [...current, rowId];
			}
		});
	}

	function isEveryRowSelected() {
		return allPageItemIds.every((r) => paginatedSelectedIds.includes(r));
	}

	function isAnyRowSelected() {
		return paginatedSelectedIds.length > 0;
	}

	function toggleAllRows() {
		// No rows are selected, so select all of them
		if (paginatedSelectedIds.length === 0) {
			setSelectedIds((selectedIds) => [...selectedIds, ...allPageItemIds]);
		} else {
			// Some rows are selected, so deselect all of them
			setSelectedIds((selectedIds) =>
				selectedIds.filter((sId) => !paginatedSelectedIds.includes(sId))
			);
		}
	}

	function clearRowSelections() {
		setSelectedIds([]);
	}

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			isShiftKeyPressed.current = event.key === 'Shift';
		}
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, []);

	// DataTableSelectAllCheckbox state
	const isSelectAllCheckboxChecked = isEveryRowSelected();
	const isSelectAllCheckboxIndeterminate = isSelectAllCheckboxChecked
		? false
		: isAnyRowSelected();

	return {
		isSelectAllCheckboxChecked,
		isSelectAllCheckboxIndeterminate,
		selectedItems: selectedIds,
		setSelectedItems: setSelectedIds,
		isRowSelected,
		toggleRowSelected,
		toggleAllRows,
		clearRowSelections,
		hasSelections,
	};
}
