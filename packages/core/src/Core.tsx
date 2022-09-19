import { PropsWithChildren } from 'react';
import { Global } from '@emotion/react';
import { CoreProvider, CoreProviderProps } from './CoreProvider';
import { ThemeProvider } from './ThemeProvider';
import { Theme } from './theme';
import { boxPalette } from './boxPalette';
import { tokens } from './tokens';
import { generateFontGrid } from './utils/fontGrid';

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
