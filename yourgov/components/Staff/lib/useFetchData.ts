import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useStaffGlobalState } from '../StaffProvider';
import { successType } from '../StaffMembersTable';
import { GetDisplayDataParams, StaffMemberWithIndex } from './types';
import { getDisplayData } from './getDisplayData';

export type DashboardTableData = {
	/** Whether the data is loading */
	loading: boolean;
	/** The loaded data */
	displayData: StaffMemberWithIndex[];
	/** The total number of pages in the search */
	totalPages: number;
	/** The total number of items found in the search */
	totalItems: number;
	/** An error message, if any */
	error?: string;
	/** Set the staff member name that was just updated. */
	setUpdatedStaffMemberName?: Dispatch<SetStateAction<string>>;
	/** Whether to show the success message above the table. */
	setSuccessMessageType?: Dispatch<SetStateAction<null | successType>>;
};

/** In a real app, this function would fetch data from an API. */
export function useFetchData({
	sort,
	filters,
	pagination,
	throwError,
}: GetDisplayDataParams): DashboardTableData {
	const [loading, setLoading] = useState(true);
	const [displayData, setDisplayData] = useState<StaffMemberWithIndex[]>([]);
	const [totalPages, setTotalPages] = useState(0);
	const [totalItems, setTotalItems] = useState(0);

	const { staffMembersGetState } = useStaffGlobalState();
	const allStaffMembers = staffMembersGetState();

	useEffect(() => {
		setLoading(true);
		getDisplayData(allStaffMembers, { sort, filters, pagination }).then(
			(response) => {
				setDisplayData(response.displayData);
				setTotalPages(response.totalPages);
				setTotalItems(response.totalItems);
				setLoading(false);
			}
		);
	}, [allStaffMembers, sort, filters, pagination]);

	if (throwError) {
		return {
			error: 'Something went wrong',
			loading: false,
			displayData: [],
			totalPages: 0,
			totalItems: 0,
		};
	}

	return { loading, displayData, totalPages, totalItems };
}
