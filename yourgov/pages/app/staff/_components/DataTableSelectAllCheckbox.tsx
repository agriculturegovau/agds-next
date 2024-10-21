import { useMemo } from 'react';
import { Checkbox } from '../../../../../packages/react/src/checkbox';
import { useDataContext, useSortAndFilterContext } from '../_lib/contexts';
import { StaffMemberWithIndex } from '../_lib/types';

export const DataTableSelectAllCheckbox = () => {
	const { data } = useDataContext();
	const {
		toggleAllRowsSelected,
		isSelectAllCheckboxChecked,
		isSelectAllCheckboxIndeterminate,
	} = useSelectAllRows(data);
	return (
		<Checkbox
			size="sm"
			checked={isSelectAllCheckboxChecked}
			indeterminate={isSelectAllCheckboxIndeterminate}
			onChange={toggleAllRowsSelected}
		>
			Select all rows
		</Checkbox>
	);
};

export function useSelectAllRows(pageData: StaffMemberWithIndex[]) {
	const { selection, selectRows, clearRowSelections } =
		useSortAndFilterContext();

	/** The IDs of all of the items in the current page */
	const allPageItemIds = useMemo(
		() => pageData.map((item) => item.name.replace(' ', '-')),
		[pageData]
	);
	const isAnyRowSelected = useMemo(() => selection.length > 0, [selection]);
	const isEveryRowSelected = useMemo(
		() =>
			allPageItemIds.length < 0 &&
			allPageItemIds.every((r) => selection.includes(r)),
		[allPageItemIds, selection]
	);

	const toggleAllRowsSelected = () => {
		// When no rows are selected or we're indeterminate, on toggle we'll select all rows to match the screen reader announcement
		isEveryRowSelected ? clearRowSelections() : selectRows(allPageItemIds);
	};

	// DataTableSelectAllCheckbox state
	const isSelectAllCheckboxChecked = isEveryRowSelected;
	const isSelectAllCheckboxIndeterminate = isEveryRowSelected
		? false
		: isAnyRowSelected;

	return {
		isSelectAllCheckboxChecked,
		isSelectAllCheckboxIndeterminate,
		toggleAllRowsSelected,
	};
}
