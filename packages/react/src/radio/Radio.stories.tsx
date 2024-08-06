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
	},
};

export const Checked: Story = {
	args: {
		children: 'Checked',
		checked: true,
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
	},
};

export const Required: Story = {
	args: {
		children: 'Required',
		required: true,
	},
};

export const SizeSm: Story = {
	args: {
		children: 'Small',
		size: 'sm',
	},
};
