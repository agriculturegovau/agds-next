import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import {
	Breadcrumbs,
	BreadcrumbsDivider,
	BreadcrumbsItem,
	BreadcrumbsContainer,
} from './index';

export default {
	title: 'navigation/Breadcrumbs',
	component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const exampleLinks = [
	{ href: '#', label: 'Home' },
	{ href: '#', label: 'Establishments' },
	{ label: 'Applications' },
];

export const Light: ComponentStory<typeof Breadcrumbs> = (args) => (
	<Box theme="light" background="page">
		<Breadcrumbs {...args} />
	</Box>
);
Light.args = {
	links: exampleLinks,
};

export const BasicDark: ComponentStory<typeof Breadcrumbs> = (args) => (
	<Box theme="dark" background="page">
		<Breadcrumbs {...args} />
	</Box>
);

export const Modular: ComponentStory<typeof Breadcrumbs> = (args) => {
	return (
		<BreadcrumbsContainer {...args}>
			<BreadcrumbsItem href="#one">One</BreadcrumbsItem>
			<BreadcrumbsDivider />
			<BreadcrumbsItem href="#two">Two</BreadcrumbsItem>
			<BreadcrumbsDivider />
			<BreadcrumbsItem>Three</BreadcrumbsItem>
		</BreadcrumbsContainer>
	);
};
