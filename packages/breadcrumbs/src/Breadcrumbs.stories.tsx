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
	subcomponents: { BreadcrumbsContainer, BreadcrumbsItem, BreadcrumbsDivider },
} as ComponentMeta<typeof Breadcrumbs>;

const exampleLinks = [
	{ href: '#', label: 'Home' },
	{ href: '#', label: 'Establishments' },
	{ label: 'Applications' },
];

export const OnLight: ComponentStory<typeof Breadcrumbs> = (args) => (
	<Box palette="light" background="body" padding={1.5}>
		<Breadcrumbs {...args} />
	</Box>
);
OnLight.args = {
	links: exampleLinks,
};

export const OnDark: ComponentStory<typeof Breadcrumbs> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Breadcrumbs {...args} />
	</Box>
);
OnDark.args = {
	links: exampleLinks,
};

export const Modular: ComponentStory<typeof BreadcrumbsContainer> = () => (
	<BreadcrumbsContainer>
		<BreadcrumbsItem href="#one">One</BreadcrumbsItem>
		<BreadcrumbsDivider />
		<BreadcrumbsItem href="#two">Two</BreadcrumbsItem>
		<BreadcrumbsDivider />
		<BreadcrumbsItem>Three</BreadcrumbsItem>
	</BreadcrumbsContainer>
);
