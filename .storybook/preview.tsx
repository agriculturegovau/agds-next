import React, { Fragment } from 'react';
import { Preview } from '@storybook/react';
import { Box } from '../packages/react/src/box';
import { Core } from '../packages/react/src/core';
import { theme as agriculture, theme } from '../packages/react/src/ag-branding';
// import { LinkComponent } from './components/LinkComponent';

function makeViewports() {
	const viewports = [
		{
			width: 320,
			breakpoint: 'xs',
		},
		{
			width: 375,
			breakpoint: 'xs',
		},
		{
			width: 576,
			breakpoint: 'sm',
		},
		{
			width: 768,
			breakpoint: 'md',
		},
		{
			width: 992,
			breakpoint: 'lg',
		},
		{
			width: 1024,
			breakpoint: 'lg',
		},
		{
			width: 1200,
			breakpoint: 'xl',
		},
	];
	return Object.fromEntries(
		viewports.map((viewport) => [
			viewport.width,
			{
				name: `${viewport.breakpoint} (${viewport.width}px)`,
				styles: {
					width: `${viewport.width}px`,
					height: '100%',
				},
			},
		])
	);
}

const storybookThemes = {
	gold: {},
	agriculture,
} as const;

type StorybookThemes = keyof typeof storybookThemes;

const getTheme = (brand: StorybookThemes) => {
	return storybookThemes[brand];
};

const globalTypes = {
	brand: {
		name: 'Brand',
		description: 'Global branding',
		defaultValue: 'agriculture',
		toolbar: {
			title: 'Brand',
			icon: 'circlehollow',
			items: Object.keys(storybookThemes),
		},
	},
	palette: {
		name: 'Palette',
		defaultValue: 'light',
		toolbar: {
			title: 'Palette',
			items: ['light', 'dark'],
		},
	},
};

// 	nextRouter: {
// 		Provider: RouterContext.Provider,
// 	},
// };

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		viewport: {
			viewports: makeViewports(),
		},
	},
	globalTypes,
	decorators: [
		(Story, context) => {
			const theme = getTheme(context.globals.brand);
			const palette = context.globals.palette;
			return (
				<Core theme={theme}>
					<Box
						width="100%"
						minHeight="100vh"
						palette={palette}
						background="body"
					>
						<Story />
					</Box>
				</Core>
			);
		},
	],
};

export default preview;
