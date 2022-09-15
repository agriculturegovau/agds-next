import { DecoratorFn } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Core } from '@ag.ds-next/core';
import { theme as agTheme } from '@ag.ds-next/ag-branding';

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
	agriculture: agTheme,
} as const;

type StorybookThemes = keyof typeof storybookThemes;

const getTheme = (brand: StorybookThemes) => {
	return storybookThemes[brand];
};

export const globalTypes = {
	brand: {
		name: 'Brand',
		description: 'Global branding',
		defaultValue: 'agriculture',
		toolbar: {
			icon: 'circlehollow',
			// Array of plain string values or MenuItem shape (see below)
			items: Object.keys(storybookThemes),
			// Property that specifies if the name of the item will be displayed
			showName: true,
		},
	},
	palette: {
		name: 'Palette',
		defaultValue: 'light',
		toolbar: {
			items: ['light', 'dark'],
			showName: true,
		},
	},
};

export const parameters = {
	layout: 'fullscreen',
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
};

const withBrandTheme: DecoratorFn = (Story, context) => {
	const theme = getTheme(context.globals.brand);
	const palette = context.globals.palette;
	return (
		<Core theme={theme}>
			<Box
				width="100%"
				minHeight="100vh"
				padding={1}
				palette={palette}
				background="body"
			>
				<Story />
			</Box>
		</Core>
	);
};

export const decorators = [withBrandTheme];
