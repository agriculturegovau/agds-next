export const fieldMaxWidth = {
	xs: '4.3rem',
	sm: '6.3rem',
	md: '10rem',
	lg: '18rem',
	xl: '25rem',
} as const;

export type FieldMaxWidth = keyof typeof fieldMaxWidth;
