import { Preview } from '@storybook/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { Box } from '../packages/react/src/box';
import { Core } from '../packages/react/src/core';
import { theme as agriculture } from '../packages/react/src/ag-branding';
import { theme as nexdoc } from './theme-nexdoc';
import { theme as trace } from './theme-trace';
import { LinkComponent } from './components/LinkComponent';

const storybookThemes = {
	gold: {},
	agriculture,
	nexdoc,
	trace,
} as const;

type StorybookThemes = keyof typeof storybookThemes;

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

const parameters = {
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
	nextRouter: {
		Provider: RouterContext.Provider,
	},
};

const preview: Preview = {
	parameters,
	globalTypes,
	decorators: [
		(Story, context) => {
			const theme = storybookThemes[context.globals.brand as StorybookThemes];
			const palette = context.globals.palette;
			return (
				<Core theme={theme} linkComponent={LinkComponent}>
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
