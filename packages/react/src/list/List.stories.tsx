import { StoryObj, Meta, StoryFn } from '@storybook/react';
import { Stack } from '../stack';
import { Text } from '../text';
import { List } from './List';
import { ListItem } from './ListItem';

const Example: StoryFn<typeof List> = (args) => (
	<Stack gap={1}>
		<Text as="p">This is a paragraph, wrapped in a Stack.</Text>
		<List {...args}>
			<ListItem>Item 1</ListItem>
			<ListItem>Item 2</ListItem>
			<ListItem>Item 3</ListItem>
		</List>
	</Stack>
);

const meta: Meta<typeof List> = {
	title: 'Content/List',
	component: List,
	render: Example,
};

export default meta;

type Story = StoryObj<typeof List>;

export const Basic: Story = {};

export const Ordered: Story = {
	args: {
		type: 'ordered',
	},
};
