import { PropsWithChildren } from 'react';
import { Global } from '@emotion/react';
import { goldTheme } from './goldTheme';
import { CoreProvider, CoreProviderProps } from './CoreProvider';
import { mergeTheme, Theme } from './theme';
import { boxPalette } from './boxPalette';
import { tokens } from './tokens';
import { generateFontGrid } from './utils/fontGrid';
import { printTheme } from './printTheme';
import { ThemeProvider } from './ThemeProvider';

export type CoreProps = PropsWithChildren<
	{
		/** If true, a CSS reset will be applied. */
		applyReset?: boolean;
		/** Enables overwriting of the default theme. */
		theme?: Theme;
	} & CoreProviderProps
>;

export function Core({
	children,
	applyReset = true,
	theme,
	linkComponent,
}: CoreProps) {
	return (
		<CoreProvider linkComponent={linkComponent}>
			<Global
				styles={[
					{
						':root': generateFontGrid(),
						// Reset the global theme in print mode to black & white
						// Note: Components can also contain print specific styles
						'@media print': {
							':root': mergeTheme(goldTheme, printTheme),
						},
					},
					applyReset && {
						// FIXME: apply the css reset
						'body, html': {
							margin: 0,
							padding: 0,
							background: boxPalette.backgroundBody,
							fontFamily: tokens.font.body,
						},
					},
				]}
			/>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</CoreProvider>
	);
}
