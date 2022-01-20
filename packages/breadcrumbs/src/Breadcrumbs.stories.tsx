import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
	Breadcrumbs,
	BreadcrumbsDivider,
	BreadcrumbsItem,
	BreadcrumbsGroup,
} from './index';

export default {
	title: 'layout/Breadcrumbs',
	component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => {
	return <Breadcrumbs {...args} />;
};

const exampleLinks = [
	{ href: '#', label: 'Home' },
	{ href: '#', label: 'Establishments' },
	{ label: 'Applications' },
];

export const Basic = Template.bind({});
Basic.args = {
	links: exampleLinks,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
	links: exampleLinks,
};

export const BasicDark = Template.bind({});
BasicDark.args = {
	links: exampleLinks,
	theme: 'dark',
	background: 'page',
};

export const InlineDark = Template.bind({});
InlineDark.args = {
	links: exampleLinks,
	theme: 'dark',
	background: 'page',
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
