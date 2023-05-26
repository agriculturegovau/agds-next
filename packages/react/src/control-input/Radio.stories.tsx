import { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
	title: 'forms/Radio',
	component: Radio,
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Basic: Story = {
	args: {
		children: 'Example',
		disabled: false,
	},
};

export const Size: Story = {
	args: {
		size: 'sm',
		children: 'Small example',
		disabled: false,
	},
};

export const Disabled: Story = {
	args: {
		children: 'Disabled',
		disabled: true,
	},
};

export const Invalid: Story = {
	args: {
		children: 'Invalid',
		invalid: true,
		disabled: false,
	},
};
