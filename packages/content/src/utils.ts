export const paddingYMap = {
	sm: { xs: 1, md: 2 },
	md: { xs: 1, md: 3 },
	lg: { xs: 1, md: 4 },
} as const;

export type ContentSpacing = keyof typeof paddingYMap;
