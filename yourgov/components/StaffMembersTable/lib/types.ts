import { staffMembers } from './staffMembers';

export type StaffMember = (typeof staffMembers)[number];
export type StaffMemberStatus = StaffMember['status'];
export type StaffMemberRole = StaffMember['role'];
export type StaffMemberTrainingCompleted =
	StaffMember['trainingCompleted'][number];

export type StaffMemberWithIndex = StaffMember & {
	index: number;
	selected?: boolean;
};

export type GetDataSort = {
	/** The field to sort by */
	field: keyof StaffMember;
	/** The order to sort by */
	order: 'ASC' | 'DESC';
};

export type GetDataPagination = {
	/** The current page number */
	page: number;
	/** The number of items to display per page */
	perPage: number;
};

export type GetDataFilters = {
	activeUsers: boolean;
	dateJoinedFrom: string | undefined;
	dateJoinedTo: string | undefined;
	foodSafetyCertificate: boolean;
	lastActiveFrom: string | undefined;
	lastActiveTo: string | undefined;
	name: string | undefined;
	role: Record<StaffMemberRole, boolean>;
	status: StaffMemberStatus | undefined;
	trainingCompleted: Record<StaffMemberTrainingCompleted, boolean>;
};

export type GetDataParams = {
	/** The sort to apply to the data */
	sort: GetDataSort;
	/** The pagination to apply to the data */
	pagination: GetDataPagination;
	/** The filters to apply to the data */
	filters: GetDataFilters;
	/** Whether to throw an error */
	throwError?: boolean;
};
