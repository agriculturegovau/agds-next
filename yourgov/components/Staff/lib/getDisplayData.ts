import {
	GetDataFilters,
	GetDisplayDataParams,
	GetDataSort,
	StaffMember,
	StaffMemberWithIndex,
} from './types';

type GetDataResponse = {
	displayData: StaffMemberWithIndex[];
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

	if (lastActiveFrom || lastActiveTo) {
		const lastActiveFromMs = (
			lastActiveFrom ? new Date(lastActiveFrom) : new Date(0)
		).getTime();
		const lastActiveToMs = (
			lastActiveTo ? new Date(lastActiveTo) : new Date()
		).getTime();
		const lastActiveMs = new Date(staffMember.lastActive).getTime();

		if (lastActiveFromMs > lastActiveMs || lastActiveToMs < lastActiveMs) {
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
		isValid = staffMember?.trainingCompleted
			?.map((training) => trainingCompleted[training])
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
export async function getDisplayData(
	staffMembers: StaffMember[],
	params: GetDisplayDataParams
): Promise<GetDataResponse> {
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
				displayData: paginatedData,
				total: sortedData.length,
				totalPages: Math.ceil(sortedData.length / perPage),
				totalItems: sortedData.length,
			});
		}, 1000);
	});
}
