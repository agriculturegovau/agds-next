export type MainNavBackground = 'body' | 'bodyAlt';

export const localPaletteVars = {
	linkHoverBg: '--nav-linkHoverBg',
	linkActiveBg: '--nav-linkActiveBg',
	bottomBar: '--nav-bottomBar',
};
export const localPalette = {
	linkHoverBg: `var(${localPaletteVars.linkHoverBg})`,
	linkActiveBg: `var(${localPaletteVars.linkActiveBg})`,
};
