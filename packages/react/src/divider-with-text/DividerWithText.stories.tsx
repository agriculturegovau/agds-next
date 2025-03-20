import { StoryObj, Meta } from '@storybook/react';
import { DividerWithText } from './DividerWithText';

const meta: Meta<typeof DividerWithText> = {
	title: 'Content/DividerWithText',
	component: DividerWithText,
	args: {
		children: <p>Divider label</p>,
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
