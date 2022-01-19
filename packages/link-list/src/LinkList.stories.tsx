import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkList, LinkListItem, LinkListGroup } from './index';

export default {
	title: 'layout/LinkList',
	component: LinkList,
} as ComponentMeta<typeof LinkList>;

const Template: ComponentStory<typeof LinkList> = (args) => {
	return <LinkList {...args} />;
};

const exampleLinks = [
	{ href: '#', label: 'Home' },
	{ href: '#', label: 'Establishments' },
	{ href: '#', label: 'Applications' },
];

export const Basic = Template.bind({});
Basic.args = {
	links: exampleLinks,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
	links: exampleLinks,
	horizontal: true,
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
	horizontal: true,
	theme: 'dark',
	background: 'page',
};

export const Modular: ComponentStory<typeof LinkList> = (args) => {
	return (
		<LinkListGroup {...args}>
			<LinkListItem href="#one">One</LinkListItem>
			<LinkListItem href="#two">Two</LinkListItem>
			<LinkListItem href="#three">Three</LinkListItem>
		</LinkListGroup>
	);
};
