import React from 'react';

import { Core, tokens } from '@ag.ds-next/core';
import { theme } from '@ag.ds-next/ag-branding';

const viewportMap = {
	xs: 'mobile',
	sm: 'mobile',
	md: 'tablet',
	lg: 'laptop',
	xl: 'desktop',
};

function makeViewports(breakpoints) {
	return Object.fromEntries(
		Object.entries(breakpoints).map(([key, size]) => [
			key,
			{
				name: `${key} ${viewportMap[key]} (${size === 0 ? 320 : size}) `,
				type: viewportMap[key],
				styles: {
					width: `${size === 0 ? 320 : size}px`,
					height: '100%',
				},
			},
		])
	);
}

export const globalTypes = {
	brand: {
		name: 'Brand',
		description: 'Global branding',
		defaultValue: 'gold',
		toolbar: {
			icon: 'circlehollow',
			// Array of plain string values or MenuItem shape (see below)
			items: ['gold', 'agriculture'],
			// Property that specifies if the name of the item will be displayed
			showName: true,
		},
	},
};

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	viewport: {
		viewports: makeViewports(tokens.breakpoint),
	},
};

const getTheme = (brand) => {
	return {
		gold: {},
		agriculture: theme,
	}[brand];
};

const withBrandTheme = (Story, context) => {
	const palette = getTheme(context.globals.brand);
	return (
		<Core theme={palette}>
			<Story />
		</Core>
	);
};

export const decorators = [withBrandTheme];
