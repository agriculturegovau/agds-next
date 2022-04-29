import React, { PropsWithChildren } from 'react';
import { Global } from '@emotion/react';

import { goldTheme } from './goldTheme';
import { CoreProvider, CoreProviderProps } from './context';
import { mergeTheme, Theme } from './theme';
import { boxPalettes, boxPalette } from './boxPalette';
import { tokens } from './tokens';
import { generateFontGrid } from './utils/fontGrid';
import { printTheme } from './printTheme';

export type CoreProps = PropsWithChildren<
	{
		theme?: Theme;
		applyReset?: boolean;
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
						':root': {
							...(theme ? mergeTheme(goldTheme, theme) : goldTheme),
							...generateFontGrid(),
						},
						// Override the theme in print mode to black & white
						// Note: Components can also contain print specific styles
						'@media print': {
							':root': mergeTheme(goldTheme, printTheme),
						},
					},
					{
						// Apply the light pallet by default
						'body,html': boxPalettes.light,
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
			{children}
		</CoreProvider>
	);
}
