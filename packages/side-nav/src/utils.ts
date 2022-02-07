export const localPaletteVars = {
	linkHoverBg: '--sideNav-linkHoverBg',
	linkActiveBg: '--sideNav-linkActiveBg',
};

export const localPalette = {
	linkHoverBg: `var(${localPaletteVars.linkHoverBg})`,
	linkActiveBg: `var(${localPaletteVars.linkActiveBg})`,
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
