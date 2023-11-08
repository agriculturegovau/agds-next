import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../stack';
import { PasswordInput } from './PasswordInput';

const meta: Meta<typeof PasswordInput> = {
	title: 'forms/PasswordInput',
	component: PasswordInput,
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Basic: Story = {
	args: {
		label: 'Password',
	},
};

export const Required: Story = {
	args: {
		label: 'Password',
		required: true,
	},
};

export const HideOptionalLabel: Story = {
	args: {
		label: 'Password',
		hideOptionalLabel: true,
	},
};

export const Disabled: Story = {
	args: {
		label: 'Password',
		disabled: true,
		value: 'Disabled',
	},
};

export const Invalid: Story = {
	args: {
		label: 'Password',
		message: 'Enter your password',
		invalid: true,
		required: true,
	},
};

export const Hint: Story = {
	args: {
		label: 'Password',
		hint: 'Password should be at least 8 characters',
	},
};

export const Block: Story = {
	args: {
		block: true,
		label: 'Password',
	},
};

export const MaxWidths: Story = {
	args: {},
	render: (args) => (
		<Stack gap={1}>
			{(['md', 'lg', 'xl'] as const).map((size) => (
				<PasswordInput key={size} {...args} label={size} maxWidth={size} />
			))}
		</Stack>
	),
};
