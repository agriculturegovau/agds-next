import React, { PropsWithChildren, ComponentProps } from 'react';
import { Global } from '@emotion/react';

import { CoreProvider } from './context';
import {
	defaultPalette,
	paletteVars,
	PaletteKey,
	Palette,
	themes,
	themeValues,
} from './colors';

export function Core({
	children,
	applyReset = true,
	palette = defaultPalette,
	linkComponent,
}: PropsWithChildren<
	{
		palette?: Partial<Palette>;
		applyReset?: boolean;
	} & ComponentProps<typeof CoreProvider>
>) {
	return (
		<CoreProvider linkComponent={linkComponent}>
			<Global
				styles={[
					{
						':root': Object.fromEntries(
							Object.entries(paletteVars).map(([key, variableName]) => [
								variableName,
								palette[key as PaletteKey] ?? defaultPalette[key as PaletteKey],
							])
						),
					},
					{
						'body,html': themes.light,
					},
					applyReset && {
						// FIXME: apply the css reset
						'body, html': {
							margin: 0,
							padding: 0,
							background: themeValues.background.body,
						},
					},
				]}
			/>
			{children}
		</CoreProvider>
	);
}
