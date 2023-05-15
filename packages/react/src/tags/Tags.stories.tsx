import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../text';
import { Tags, TagsContainer, TagsList, Tag } from './index';

const meta: Meta<typeof Tags> = {
	title: 'content/Tags',
	component: Tags,
};

export default meta;

const exampleItems = [{ label: 'Foo' }, { label: 'Bar' }, { label: 'Baz' }];

const exampleLinks = [
	{ href: '#', label: 'Foo' },
	{ href: '#', label: 'Bar' },
	{ href: '#', label: 'Baz' },
];

type Story = StoryObj<typeof Tags>;

export const Basic: Story = {
	args: {
		heading: (
			<Text as="h2" fontWeight="bold">
				Tags:
			</Text>
		),
		items: exampleItems,
	},
};

export const Links: Story = {
	args: {
		heading: (
			<Text as="h2" fontWeight="bold">
				Tags:
			</Text>
		),
		items: exampleLinks,
	},
};

export const Removable: Story = {
	args: {
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
	},
};

export const Modular = () => (
	<TagsContainer>
		<Text as="h2" fontWeight="bold">
			Tags:
		</Text>
		<TagsList>
			{exampleLinks.map(({ href, label }, idx) => (
				<Tag key={idx} href={href}>
					{label}
				</Tag>
			))}
		</TagsList>
	</TagsContainer>
);
