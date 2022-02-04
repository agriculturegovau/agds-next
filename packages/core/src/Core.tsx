import React, { PropsWithChildren, ComponentProps } from 'react';
import { Global } from '@emotion/react';

import { goldTheme } from './goldTheme';
import { CoreProvider } from './context';
import { mergeTheme, Theme } from './theme';
import { boxPalettes, boxPalette } from './boxPalette';
import { tokens } from './tokens';

export function Core({
	children,
	applyReset = true,
	theme,
	linkComponent,
}: PropsWithChildren<
	{
		theme?: Theme;
		applyReset?: boolean;
	} & ComponentProps<typeof CoreProvider>
>) {
	return (
		<CoreProvider linkComponent={linkComponent}>
			<Global
				styles={[
					{
						':root': theme ? mergeTheme(goldTheme, theme) : goldTheme,
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
