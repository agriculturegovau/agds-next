export const mockApplicationHistory = [
	{
		referenceNumber: 'REF-77437784',
		type: 'Apply for an outdoor dining permit',
		status: { tone: 'success', label: 'Approved' },
	},
	{
		referenceNumber: 'REF-77437784',
		type: 'Apply for an on-premises liquor licence',
		status: { tone: 'success', label: 'Approved' },
	},
	{
		referenceNumber: 'REF-77437784',
		type: 'Apply for an on-premises liquor licence',
		status: { tone: 'info', label: 'Incomplete application' },
	},
	{
		referenceNumber: 'REF-77437784',
		type: 'Apply for an outdoor dining permit',
		status: { tone: 'success', label: 'Approved' },
	},
	{
		referenceNumber: 'REF-77437784',
		type: 'Apply for an outdoor dining permit',
		status: { tone: 'success', label: 'Approved' },
	},
] as const;

export const mockCurrentApprovals = [
	{
		approvalNumber: 'ODP-772353784',
		type: 'Outdoor dining permit',
		status: { tone: 'info', label: 'Pending approval' },
		approvedDate: '-',
	},
	{
		approvalNumber: 'ODP-224377842',
		type: 'On-premises liquor licence',
		status: { tone: 'success', label: 'Approved' },
		approvedDate: '1 Jul 2024',
	},
] as const;
