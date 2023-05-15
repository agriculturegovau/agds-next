import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
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
	},
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
		items: exampleItems,
	},
};

export const Links: Story = {
	args: {
		items: exampleLinks,
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

export const Modular = () => (
	<TagsContainer>
		<Text as="h2" fontWeight="bold">
			Tags:
		</Text>
		<TagsList>
			{exampleLinks.map(({ href, label }, idx) => (
				<Box key={idx} as="li">
					<Tag href={href}>{label}</Tag>
				</Box>
			))}
		</TagsList>
	</TagsContainer>
);
