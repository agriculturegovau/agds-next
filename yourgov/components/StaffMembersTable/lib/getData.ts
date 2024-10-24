import { staffMembers } from './staffMembers';
import { LAST_ACTIVE_RELATIVE_TIME_MS } from './staffMembers';
import {
	GetDataFilters,
	GetDataParams,
	GetDataSort,
	StaffMember,
	StaffMemberWithIndex,
} from './types';

type GetDataResponse = {
	data: StaffMemberWithIndex[];
	total: number;
	totalPages: number;
	totalItems: number;
};

export const doesStaffMemberMatchFilters = (
	staffMember: StaffMember,
	filters: Partial<GetDataFilters>
) => {
	let isValid = true;

	const {
		activeUsers,
		lastActiveFrom,
		lastActiveTo,
		name,
		role,
		status,
		trainingCompleted,
	} = filters;

	if (activeUsers) {
		isValid = staffMember.status === 'Active' ? isValid : false;
	}

	if (lastActiveFrom && lastActiveTo) {
		const lastActiveFromMs = new Date(lastActiveFrom).getTime();
		const lastActiveToMs = new Date(lastActiveTo).getTime();
		const lastActiveMs =
			LAST_ACTIVE_RELATIVE_TIME_MS - new Date(staffMember.lastActive).getTime();

		if (
			// The search term for 'last active date range' does not cover the last active date for this staff member
			lastActiveFromMs > lastActiveMs ||
			lastActiveToMs < lastActiveMs
		) {
			isValid = false;
		}
	}

	if (status) {
		isValid = staffMember.status === status ? isValid : false;
	}

	if (role && Object.values(role).some(Boolean)) {
		isValid = role[staffMember.role] ? isValid : false;
	}

	if (trainingCompleted && Object.values(trainingCompleted).some(Boolean)) {
		isValid = staffMember.trainingCompleted
			.map((training) => trainingCompleted[training])
			.some(Boolean)
			? isValid
			: false;
	}

	if (name) {
		isValid = staffMember.name.toLowerCase().includes(name.toLowerCase())
			? isValid
			: false;
	}

	return isValid;
};

const sortData = (a: StaffMember, b: StaffMember, sort: GetDataSort) => {
	const { field, order } = sort;
	const aValue = a[field];
	const bValue = b[field];

	if (aValue === undefined || aValue === null) return 1;
	if (bValue === undefined || bValue === null) return -1;

	if (aValue > bValue) {
		return order === 'ASC' ? 1 : -1;
	}
	if (aValue < bValue) {
		return order === 'ASC' ? -1 : 1;
	}
	return 0;
};

/** Simulates the retrieval of data from an API */
export async function getData(params: GetDataParams): Promise<GetDataResponse> {
	const { page, perPage } = params.pagination;

	const filteredData = staffMembers.filter((staffMember) =>
		doesStaffMemberMatchFilters(staffMember, params.filters)
	);

	const sortedData = filteredData
		.sort((a, b) => sortData(a, b, params.sort))
		.map((staffMember, index) => ({
			...staffMember,
			/** The index of the search result */
			index,
		}));

	const paginatedData = sortedData.slice((page - 1) * perPage, page * perPage);

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				data: paginatedData,
				total: sortedData.length,
				totalPages: Math.ceil(sortedData.length / perPage),
				totalItems: sortedData.length,
			});
		}, 1000);
	});
}
