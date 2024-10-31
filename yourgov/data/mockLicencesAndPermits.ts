export const mockApplicationHistory = [
	{
		id: '772353784',
		lastUpdated: new Date('15 Jan 2024').getTime(),
		status: { tone: 'infoMedium', label: 'Pending approval' },
		type: 'Outdoor dining permit',
	},
	{
		id: '224377842',
		lastUpdated: new Date('01 July 2023').getTime(),
		status: { tone: 'successMedium', label: 'Approved' },
		type: 'On-premises liquor licence',
	},
] as const;
