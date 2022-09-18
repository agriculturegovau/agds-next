import { PropsWithChildren } from 'react';
import { goldTheme } from './goldTheme';
import { mergeTheme, Theme } from './theme';
import { boxPalettes } from './boxPalette';

export type ThemeProviderProps = PropsWithChildren<{
	theme?: Theme;
}>;

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
	return (
		<div
			css={[
				mergeTheme(goldTheme, theme),
				// Apply the light pallet by default
				boxPalettes.light,
			]}
		>
			{children}
		</div>
	);
}
