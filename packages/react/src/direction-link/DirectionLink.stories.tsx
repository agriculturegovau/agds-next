import { Meta, StoryObj } from '@storybook/react';
import { DirectionLink } from './index';

const meta: Meta<typeof DirectionLink> = {
	title: 'navigation/DirectionLink',
	component: DirectionLink,
	args: {
		href: '#',
	},
};

export default meta;

type Story = StoryObj<typeof DirectionLink>;

export const Basic: Story = {
	args: {
		children: 'Next',
		direction: 'right',
	},
};

export const Up: Story = {
	args: {
		children: 'Top',
		direction: 'up',
	},
};

export const Down: Story = {
	args: {
		children: 'Skip to footer',
		direction: 'up',
	},
};

export const Right: Story = {
	args: {
		children: 'Next',
		direction: 'right',
	},
};

export const Left: Story = {
	args: {
		children: 'Back',
		direction: 'left',
	},
};
