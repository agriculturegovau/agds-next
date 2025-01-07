import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../stack';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
	title: 'forms/TextInput',
	component: TextInput,
	args: {
		label: 'Example',
	},
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Basic: Story = {};

export const Required: Story = {
	args: {
		required: true,
	},
};

export const HideOptionalLabel: Story = {
	args: {
		hideOptionalLabel: true,
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		value: 'Disabled value',
	},
};

export const Invalid: Story = {
	args: {
		type: 'email',
		label: 'Email',
		message:
			'Enter an email address in the correct format, like name@example.com',
		invalid: true,
	},
};

export const Hint: Story = {
	args: {
		hint: 'We will only use this to respond to your question',
	},
};

export const Block: Story = {
	args: {
		block: true,
	},
};

export const MaxWidths: Story = {
	args: {},
	render: (args) => (
		<Stack background="body" gap={1} palette="light">
			{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
				<TextInput key={size} {...args} label={size} maxWidth={size} />
			))}
		</Stack>
	),
};
