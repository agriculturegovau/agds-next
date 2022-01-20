import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import {
	Breadcrumbs,
	BreadcrumbsDivider,
	BreadcrumbsItem,
	BreadcrumbsGroup,
} from './index';

export default {
	title: 'navigation/Breadcrumbs',
	component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = ({ theme, ...args }) => {
	return (
		<Box theme={theme} background="page">
			<Breadcrumbs {...args} />
		</Box>
	);
};

const exampleLinks = [
	{ href: '#', label: 'Home' },
	{ href: '#', label: 'Establishments' },
	{ label: 'Applications' },
];

export const Light = Template.bind({});
Light.args = {
	links: exampleLinks,
};

export const BasicDark = Template.bind({});
BasicDark.args = {
	links: exampleLinks,
	theme: 'dark',
};

export const Modular: ComponentStory<typeof Breadcrumbs> = (args) => {
	return (
		<BreadcrumbsGroup {...args}>
			<BreadcrumbsItem href="#one">One</BreadcrumbsItem>
			<BreadcrumbsDivider />
			<BreadcrumbsItem href="#two">Two</BreadcrumbsItem>
			<BreadcrumbsDivider />
			<BreadcrumbsItem>Three</BreadcrumbsItem>
		</BreadcrumbsGroup>
	);
};
