import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { Text } from '../text';
import { Details } from './Details';

const meta: Meta<typeof Details> = {
	title: 'content/Details',
	component: Details,
	args: {
		label: 'Details',
		iconBefore: false,
		onBodyAlt: false,
		children: (
			<Text as="p">
				This is a small paragraph of text that is supplementary to the main page
				content.
			</Text>
		),
	},
};

export default meta;

type Story = StoryObj<typeof Details>;

export const Basic: Story = {};

export const WithIcon: Story = {
	args: { iconBefore: true },
};

export const OnBodyAlt: Story = {
	args: { onBodyAlt: true },
	render: (args) => (
		<Box background="bodyAlt" padding={1.5}>
			<Details {...args} />
		</Box>
	),
};
