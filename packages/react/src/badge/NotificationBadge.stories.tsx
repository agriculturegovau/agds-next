import { Meta, StoryObj } from '@storybook/react';
import { NotificationBadge } from './NotificationBadge';

const meta: Meta<typeof NotificationBadge> = {
	title: 'content/Badge/NotificationBadge',
	component: NotificationBadge,
};

export default meta;

type Story = StoryObj<typeof NotificationBadge>;

export const Neutral: Story = {
	args: {
		value: 48,
		tone: 'neutral',
	},
};

export const Action: Story = {
	args: {
		value: 48,
		tone: 'action',
	},
};

export const Max: Story = {
	args: {
		value: 100,
		max: 99,
		tone: 'neutral',
	},
};
