export const localVars = {
	linkHoverBg: '--sideNav-linkHoverBg',
	linkActiveBg: '--sideNav-linkActiveBg',
};

export const localValues = {
	linkHoverBg: `var(${localVars.linkHoverBg})`,
	linkActiveBg: `var(${localVars.linkActiveBg})`,
};

// Content that should be read out
// to screenreaders only
export const visuallyHiddenStyles = {
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	whiteSpace: 'nowrap',
	width: 1,
} as const;
