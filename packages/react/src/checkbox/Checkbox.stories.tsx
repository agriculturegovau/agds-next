import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
	title: 'forms/Checkbox',
	component: Checkbox,
	args: {
		children: 'Example',
		disabled: false,
		size: 'md',
	},
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
	args: {},
};

export const Checked: Story = {
	args: {
		checked: true,
	},
};

export const Indeterminate: Story = {
	args: {
		children: 'Example',
		indeterminate: true,
	},
};

export const Size: Story = {
	args: {
		size: 'sm',
		children: 'Small example',
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
		invalid: true,
	},
};
