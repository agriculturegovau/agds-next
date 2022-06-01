export const paddingYMap = {
	none: {
		top: 0,
		bottom: 0,
	},
	section: {
		top: { xs: 2, md: 4 },
		bottom: { xs: 2, md: 4 },
	},
	page: {
		top: { xs: 2, md: 3 },
		bottom: { xs: 3, md: 4 },
	},
} as const;

export type ContentSpacing = keyof typeof paddingYMap;
