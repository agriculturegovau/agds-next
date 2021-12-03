import React from 'react';

import { Theme } from '@ag.ds-next/core';
import { Box } from '@ag.ds-next/box';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
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
