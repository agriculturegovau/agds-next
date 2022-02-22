import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkList, LinkListItem, LinkListContainer } from './index';
import { Box } from '@ag.ds-next/box';

export default {
	title: 'navigation/LinkList',
	component: LinkList,
	subcomponents: { LinkListContainer, LinkListItem },
} as ComponentMeta<typeof LinkList>;

const exampleLinks = [
	{ href: '#', label: 'Home' },
	{ href: '#', label: 'Establishments' },
	{ href: '#', label: 'Applications' },
];

export const OnLight: ComponentStory<typeof LinkList> = (args) => (
	<Box palette="light" background="body" padding={1.5}>
		<LinkList {...args} />
	</Box>
);
OnLight.args = {
	links: exampleLinks,
};

export const OnDark: ComponentStory<typeof LinkList> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<LinkList {...args} />
	</Box>
);
OnDark.args = {
	links: exampleLinks,
};

export const Horizontal: ComponentStory<typeof LinkList> = (args) => (
	<Box palette="light" background="body">
		<LinkList {...args} />
	</Box>
);
Horizontal.args = {
	links: exampleLinks,
	horizontal: true,
};

export const Modular: ComponentStory<typeof LinkList> = (args) => (
	<LinkListContainer {...args}>
		<LinkListItem href="#one">One</LinkListItem>
		<LinkListItem href="#two">Two</LinkListItem>
		<LinkListItem href="#three">Three</LinkListItem>
	</LinkListContainer>
);
