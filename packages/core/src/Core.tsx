import React, { PropsWithChildren, ComponentProps } from 'react';
import { Global } from '@emotion/react';

import { CoreProvider } from './context';
import {
	defaultTheme,
	mergeTheme,
	Theme,
	boxPalettes,
	boxPalette,
} from './colors';
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
						':root': theme ? mergeTheme(theme) : defaultTheme,
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
							background: boxPalette.background.body,
							fontFamily: tokens.font.body,
						},
					},
				]}
			/>
			{children}
		</CoreProvider>
	);
}
