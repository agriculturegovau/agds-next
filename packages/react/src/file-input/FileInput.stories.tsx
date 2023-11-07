import { Meta, StoryObj } from '@storybook/react';
import { FileInput } from './FileInput';

const meta: Meta<typeof FileInput> = {
	title: 'Forms/FileInput',
	component: FileInput,
};

export default meta;

type Story = StoryObj<typeof FileInput>;

export const Basic: Story = {
	args: {
		label: 'Example',
	},
};

export const Required: Story = {
	args: {
		required: true,
		label: 'Example',
	},
};

export const AcceptableFileTypes: Story = {
	args: {
		label: 'Example',
		hint: 'Acceptable file types: .jpg, .png, .heic',
		accept: 'image/*',
	},
};

export const HideOptionalLabel: Story = {
	args: {
		label: 'Example',
		hideOptionalLabel: true,
	},
};

export const Multiple: Story = {
	args: {
		multiple: true,
		label: 'Example',
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		label: 'Example',
	},
};

export const Invalid: Story = {
	args: {
		label: 'Example',
		message: 'Please choose a valid file',
		invalid: true,
	},
};

export const Hint: Story = {
	args: {
		label: 'Example',
		hint: 'General hint information',
	},
};
