import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../text';
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

const Template: ComponentStory<typeof Tags> = (args) => <Tags {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	heading: (
		<Text as="h2" fontWeight="bold">
			Tags:
		</Text>
	),
	items: exampleItems,
};

export const Links = Template.bind({});
Links.args = {
	heading: (
		<Text as="h2" fontWeight="bold">
			Tags:
		</Text>
	),
	items: exampleLinks,
};

export const Removable = Template.bind({});
Removable.args = {
	heading: (
		<Text as="h2" fontWeight="bold">
			Tags:
		</Text>
	),
	items: [
		{ label: 'Foo', onRemove: console.log },
		{ label: 'Bar', onRemove: console.log },
		{ label: 'Baz', onRemove: console.log },
	],
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
