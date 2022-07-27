import React from 'react';
import { Box } from '@ag.ds-next/box';
import { Core } from '@ag.ds-next/core';
import { theme } from '@ag.ds-next/ag-branding';

function makeViewports() {
	const viewports = [
		{
			width: 320,
			type: 'mobile',
			breakpoint: 'xs',
		},
		{
			width: 375,
			type: 'mobile',
			breakpoint: 'xs',
		},
		{
			width: 576,
			type: 'mobile',
			breakpoint: 'sm',
		},
		{
			width: 768,
			type: 'tablet',
			breakpoint: 'md',
		},
		{
			width: 992,
			type: 'tablet',
			breakpoint: 'lg',
		},
		{
			width: 1024,
			type: 'tablet',
			breakpoint: 'lg',
		},
		{
			width: 1200,
			type: 'desktop',
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

export const globalTypes = {
	brand: {
		name: 'Brand',
		description: 'Global branding',
		defaultValue: 'agriculture',
		toolbar: {
			icon: 'circlehollow',
			// Array of plain string values or MenuItem shape (see below)
			items: ['gold', 'agriculture'],
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

const getTheme = (brand) => {
	return {
		gold: {},
		agriculture: theme,
	}[brand];
};

const withBrandTheme = (Story, context) => {
	const brand = getTheme(context.globals.brand);
	const palette = context.globals.palette;
	return (
		<Core theme={brand}>
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
