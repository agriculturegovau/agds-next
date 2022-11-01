import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkList, LinkListItem, LinkListContainer } from './index';

export default {
	title: 'navigation/LinkList',
	component: LinkList,
	subcomponents: { LinkListContainer, LinkListItem },
} as ComponentMeta<typeof LinkList>;

const exampleLinks = [
	{ href: '#', label: 'Home' },
	{ href: '#', label: 'Establishments' },
	{ href: '#', label: 'Applications' },
	{
		href: 'https://steelthreads.github.io/agds-next',
		label: 'External link',
		target: '_blank',
		rel: 'noopener',
	},
];

export const Basic: ComponentStory<typeof LinkList> = (args) => (
	<LinkList {...args} />
);
Basic.args = {
	links: exampleLinks,
};

export const Horizontal: ComponentStory<typeof LinkList> = (args) => (
	<LinkList {...args} />
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
