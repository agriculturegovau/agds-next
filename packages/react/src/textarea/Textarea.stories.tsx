import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../box';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
	title: 'forms/Textarea',
	component: Textarea,
	args: {
		label: 'Example',
	},
};

export default meta;

type Story = StoryObj<typeof Textarea>;

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
	},
};

export const Invalid: Story = {
	args: {
		message: 'The message you have entered is invalid',
		value: '1e039ur4urf',
		invalid: true,
	},
};

export const Hint: Story = {
	args: {
		message: 'We will only use this to respond to your question',
	},
};

export const Block: Story = {
	args: {
		label: 'Block',
		block: true,
	},
};

export const MaxWidths: Story = {
	render: (args) => (
		<Stack background="body" palette="light" gap={1}>
			{(['md', 'lg', 'xl'] as const).map((size) => (
				<Textarea key={size} {...args} label={size} maxWidth={size} />
			))}
		</Stack>
	),
};
