import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Tags, TagsContainer, TagsList, Tag } from './index';
import { Text } from '@ag.ds-next/text';

export default {
	title: 'content/Tags',
	component: Tags,
	subcomponents: { TagsContainer, TagsList, Tag },
} as ComponentMeta<typeof Tags>;

const exampleItems = [{ label: 'Foo' }, { label: 'Bar' }, { label: 'Baz' }];

const exampleLinks = [
	{ href: '#', label: 'Foo' },
	{ href: '#', label: 'Bar' },
	{ href: '#', label: 'Baz' },
];

export const OnLight: ComponentStory<typeof Tags> = (args) => (
	<Tags {...args} />
);
OnLight.args = {
	heading: (
		<Text as="h2" fontWeight="bold">
			Tags:
		</Text>
	),
	items: exampleItems,
};

export const OnDark: ComponentStory<typeof Tags> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Tags {...args} />
	</Box>
);
OnDark.args = {
	heading: (
		<Text as="h2" fontWeight="bold">
			Tags:
		</Text>
	),
	items: exampleItems,
};

export const LinksOnLight: ComponentStory<typeof Tags> = (args) => (
	<Tags {...args} />
);
LinksOnLight.args = {
	heading: (
		<Text as="h2" fontWeight="bold">
			Tags:
		</Text>
	),
	items: exampleLinks,
};

export const LinksOnDark: ComponentStory<typeof Tags> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Tags {...args} />
	</Box>
);
LinksOnDark.args = {
	heading: (
		<Text as="h2" fontWeight="bold">
			Tags:
		</Text>
	),
	items: exampleLinks,
};

export const Modular = () => (
	<TagsContainer>
		<Text as="h2" fontWeight="bold">
			Tags:
		</Text>
		<TagsList>
			<Tag href="#">Foo</Tag>
			<Tag href="#">Bar</Tag>
			<Tag href="#">Baz</Tag>
		</TagsList>
	</TagsContainer>
);
