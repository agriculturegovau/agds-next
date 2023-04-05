import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../box';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
	title: 'forms/TextInput',
	component: TextInput,
};

export default meta;

type Story = StoryObj<typeof TextInput>;

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

export const HideOptionalLabel: Story = {
	args: {
		label: 'Example',
		hideOptionalLabel: true,
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		label: 'Example',
		value: 'Disabled',
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
		label: 'Email',
		type: 'email',
		hint: 'We will only use this to respond to your question',
	},
};

export const Block: Story = {
	args: {
		block: true,
		label: 'Block',
	},
};

export const MaxWidths: Story = {
	render: (args) => (
		<Stack gap={1}>
			{(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
				<TextInput key={size} {...args} label={size} maxWidth={size} />
			))}
		</Stack>
	),
};

export const Password: Story = {
	args: {
		label: 'Password',
		type: 'password',
		required: true,
	},
};
