import React from 'react';

import { Theme, tokens } from '@ag.ds-next/core';
import { Box } from '@ag.ds-next/box';

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

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	viewport: {
		viewports: makeViewports(tokens.breakpoints),
		defaultViewport: 'xs',
	},
};

export const decorators = [
	(Story) => (
		<Theme>
			<Box theme="light" fontFamily="body">
				<Story />
			</Box>
		</Theme>
	),
];
