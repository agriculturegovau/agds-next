import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkList, LinkListItem, LinkListContainer } from './index';
import { Box } from '@ag.ds-next/box';

export default {
	title: 'navigation/LinkList',
	component: LinkList,
} as ComponentMeta<typeof LinkList>;

const exampleLinks = [
	{ href: '#', label: 'Home' },
	{ href: '#', label: 'Establishments' },
	{ href: '#', label: 'Applications' },
];

export const Basic: ComponentStory<typeof LinkList> = (args) => (
	<Box palette="light" background="body">
		<LinkList {...args} />
	</Box>
);
Basic.args = {
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

export const BasicDark: ComponentStory<typeof LinkList> = (args) => (
	<Box palette="dark" background="body">
		<LinkList {...args} />
	</Box>
);
BasicDark.args = {
	links: exampleLinks,
};

export const InlineDark: ComponentStory<typeof LinkList> = (args) => (
	<Box palette="dark" background="body">
		<LinkList {...args} />
	</Box>
);
InlineDark.args = {
	links: exampleLinks,
	horizontal: true,
};

export const Modular: ComponentStory<typeof LinkList> = (args) => {
	return (
		<LinkListContainer {...args}>
			<LinkListItem href="#one">One</LinkListItem>
			<LinkListItem href="#two">Two</LinkListItem>
			<LinkListItem href="#three">Three</LinkListItem>
		</LinkListContainer>
	);
};
