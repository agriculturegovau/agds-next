import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../../text/src';
import { Tags, TagsContainer, TagsList, Tag } from './index';

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

export const Basic: ComponentStory<typeof Tags> = (args) => <Tags {...args} />;
Basic.args = {
	heading: (
		<Text as="h2" fontWeight="bold">
			Tags:
		</Text>
	),
	items: exampleItems,
};

export const Links: ComponentStory<typeof Tags> = (args) => <Tags {...args} />;
Links.args = {
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
