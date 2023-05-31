import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
	title: 'forms/Checkbox',
	component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

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
