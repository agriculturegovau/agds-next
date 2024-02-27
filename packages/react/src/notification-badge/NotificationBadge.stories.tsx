import { Meta, StoryObj } from '@storybook/react';
import { NotificationBadge } from './NotificationBadge';

const meta: Meta<typeof NotificationBadge> = {
	title: 'content/NotificationBadge',
	component: NotificationBadge,
};

export default meta;

type Story = StoryObj<typeof NotificationBadge>;

export const Basic: Story = {
	args: {
		value: 48,
	},
};

export const ActionTone: Story = {
	args: {
		value: 48,
		tone: 'action',
	},
};

export const NeutralTone: Story = {
	args: {
		value: 48,
		tone: 'neutral',
	},
};

export const InheritTone: Story = {
	args: {
		value: 48,
		tone: 'inherit',
	},
};

export const Max: Story = {
	args: {
		value: 100,
		max: 99,
		tone: 'action',
	},
};
