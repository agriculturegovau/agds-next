import { StoryObj, Meta, StoryFn } from '@storybook/react';
import { Stack } from '../stack';
import { Text } from '../text';
import { OrderedList } from './OrderedList';
import { ListItem } from './ListItem';

const Example: StoryFn<typeof OrderedList> = (args) => (
	<Stack gap={1}>
		<Text as="p">This is a paragraph, wrapped in a Stack.</Text>
		<OrderedList {...args}>
			<ListItem>Item 1</ListItem>
			<ListItem>Item 2</ListItem>
			<ListItem>Item 3</ListItem>
		</OrderedList>
	</Stack>
);

const meta: Meta<typeof OrderedList> = {
	title: 'Content/List',
	component: OrderedList,
	render: Example,
};

export default meta;

type Story = StoryObj<typeof OrderedList>;

export const Ordered: Story = {
	storyName: 'OrderedList',
};

export const NestedOl: Story = {
	storyName: 'OrderedList (nested)',
	render: (args) => (
		<OrderedList {...args}>
			<ListItem>
				Ordered List level 1
				<OrderedList>
					<ListItem>Ordered List level 2</ListItem>
					<ListItem>
						Ordered List level 2
						<OrderedList>
							<ListItem>Ordered List level 3</ListItem>
							<ListItem>Ordered List level 3</ListItem>
						</OrderedList>
					</ListItem>
				</OrderedList>
			</ListItem>
			<ListItem>Ordered List level 1</ListItem>
			<ListItem>Ordered List level 1</ListItem>
		</OrderedList>
	),
};
