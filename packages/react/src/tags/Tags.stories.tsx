import { StoryFn, Meta, StoryObj } from '@storybook/react';
import { Text } from '../text';
import { Tags, TagsContainer, TagsList, Tag } from './index';

const meta: Meta<typeof Tags> = {
	title: 'content/Tags',
	component: Tags,
	args: {
		heading: (
			<Text as="h2" fontWeight="bold">
				Tags:
			</Text>
		),
		items: [{ label: 'Foo' }, { label: 'Bar' }, { label: 'Baz' }],
	},
};

export default meta;

type Story = StoryObj<typeof Tags>;

export const Basic: Story = {};

export const Links: Story = {
	args: {
		items: [
			{ href: '#', label: 'Foo' },
			{ href: '#', label: 'Bar' },
			{ href: '#', label: 'Baz' },
		],
	},
};

export const Removable: Story = {
	args: {
		items: [
			{ label: 'Foo', onRemove: console.log },
			{ label: 'Bar', onRemove: console.log },
			{ label: 'Baz', onRemove: console.log },
		],
	},
};

export const Modular: StoryFn<typeof Tags> = () => (
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
