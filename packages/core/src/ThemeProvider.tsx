import { PropsWithChildren } from 'react';
import { goldTheme } from './goldTheme';
import { mergeTheme, Theme } from './theme';
import { boxPalettes } from './boxPalette';
import { printTheme } from './printTheme';

export type ThemeProviderProps = PropsWithChildren<{
	theme?: Theme;
}>;

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
	return (
		<div
			css={[
				mergeTheme(goldTheme, theme),
				{
					// Reset the theme in print mode to black & white
					// Note: Components can also contain print specific styles
					'@media print': mergeTheme(goldTheme, printTheme),
				},
				// Apply the light pallet by default
				boxPalettes.light,
			]}
		>
			{children}
		</div>
	);
}
