import { StoryObj, Meta } from '@storybook/react';
import { Text } from '../text';
import { DividerWithText } from './DividerWithText';

const meta: Meta<typeof DividerWithText> = {
	title: 'Content/DividerWithText',
	component: DividerWithText,
	args: {
		children: <Text>Divider label</Text>,
	},
	argTypes: {
		textAlign: {
			options: ['center', 'left'],
			control: 'select',
		},
	},
};

export default meta;

type Story = StoryObj<typeof DividerWithText>;

export const Basic: Story = {};

export const TextAlign: Story = {
	args: { textAlign: 'left' },
};
