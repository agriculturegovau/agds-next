import { Meta } from '@storybook/react';
import { NotificationBadge } from './NotificationBadge';

const meta: Meta<typeof NotificationBadge> = {
	title: 'content/NotificationBadge',
	component: NotificationBadge,
};

export default meta;

export const Basic = {
	args: {
		value: 48,
		tone: 'action',
	},
};

export const Neutral = {
	args: {
		value: 48,
		tone: 'neutral',
	},
};

export const Max = {
	args: {
		value: 100,
		max: 99,
		tone: 'action',
	},
};
