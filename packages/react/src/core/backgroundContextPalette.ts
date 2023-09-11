import { boxPalette } from './boxPalette';

// Background Palette

export const backgroundContextPaletteVars = {
	current: '--agds-background-context-background',
	shade: '--agds-background-context-shade',
	alt: '--agds-background-context-alt',
};

export const backgroundContextPalettes = {
	body: {
		[backgroundContextPaletteVars.current]: boxPalette.backgroundBody,
		[backgroundContextPaletteVars.shade]: boxPalette.backgroundShade,
		[backgroundContextPaletteVars.alt]: boxPalette.backgroundBodyAlt,
	},
	bodyAlt: {
		[backgroundContextPaletteVars.current]: boxPalette.backgroundBodyAlt,
		[backgroundContextPaletteVars.shade]: boxPalette.backgroundShadeAlt,
		[backgroundContextPaletteVars.alt]: boxPalette.backgroundShadeAlt,
	},
	shade: {
		[backgroundContextPaletteVars.current]: boxPalette.backgroundShade,
		[backgroundContextPaletteVars.shade]: boxPalette.backgroundBody,
		[backgroundContextPaletteVars.alt]: boxPalette.backgroundBody,
	},
	shadeAlt: {
		[backgroundContextPaletteVars.current]: boxPalette.backgroundShadeAlt,
		[backgroundContextPaletteVars.shade]: boxPalette.backgroundBodyAlt,
		[backgroundContextPaletteVars.alt]: boxPalette.backgroundBodyAlt,
	},
} as const;

export const backgroundContextPalette = {
	current: `var(${backgroundContextPaletteVars.current})`,
	shade: `var(${backgroundContextPaletteVars.shade})`,
	alt: `var(${backgroundContextPaletteVars.alt})`,
} as const;
