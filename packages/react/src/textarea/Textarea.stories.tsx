import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../stack';
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
		value: 'Disabled value',
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
			{(['md', 'lg', 'xl'] as const).map((size) => (
				<Textarea key={size} {...args} label={size} maxWidth={size} />
			))}
		</Stack>
	),
};
