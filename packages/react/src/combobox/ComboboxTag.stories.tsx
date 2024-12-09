import { Meta, StoryObj } from '@storybook/react';
import { ComboboxTag } from './ComboboxBase/ComboboxTag';

const meta: Meta<typeof ComboboxTag> = {
	title: 'forms/Combobox/Primitives/ComboboxTag',
	component: ComboboxTag,
	args: {
		children: 'Tag',
		onRemove: console.log,
	},
};

export default meta;

type Story = StoryObj<typeof ComboboxTag>;

export const Basic: Story = {};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};
