import { StoryObj, Meta, StoryFn } from '@storybook/react';
import { Stack } from '../stack';
import { Text } from '../text';
import { UnorderedList } from './UnorderedList';
import { ListItem } from './ListItem';

const Example: StoryFn<typeof UnorderedList> = (args) => (
	<Stack gap={1}>
		<Text as="p">This is a paragraph, wrapped in a Stack.</Text>
		<UnorderedList {...args}>
			<ListItem>Item 1</ListItem>
			<ListItem>Item 2</ListItem>
			<ListItem>Item 3</ListItem>
		</UnorderedList>
	</Stack>
);

const meta: Meta<typeof UnorderedList> = {
	title: 'Content/List',
	component: UnorderedList,
	render: Example,
};

export default meta;

type Story = StoryObj<typeof UnorderedList>;

export const Unordered: Story = {
	storyName: 'UnorderedList',
};

export const NestedUl: Story = {
	storyName: 'UnorderedList (nested)',
	render: (args) => (
		<UnorderedList {...args}>
			<ListItem>
				Ordered List level 1
				<UnorderedList>
					<ListItem>Ordered List level 2</ListItem>
					<ListItem>
						Ordered List level 2
						<UnorderedList>
							<ListItem>Ordered List level 3</ListItem>
							<ListItem>Ordered List level 3</ListItem>
						</UnorderedList>
					</ListItem>
				</UnorderedList>
			</ListItem>
			<ListItem>Ordered List level 1</ListItem>
			<ListItem>Ordered List level 1</ListItem>
		</UnorderedList>
	),
};
