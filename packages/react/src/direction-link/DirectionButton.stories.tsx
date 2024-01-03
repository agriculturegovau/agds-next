import { Meta, StoryObj } from '@storybook/react';
import { DirectionButton } from './index';

const meta: Meta<typeof DirectionButton> = {
	title: 'navigation/DirectionLink/DirectionButton',
	component: DirectionButton,
	args: {
		onClick: console.log,
	},
};

export default meta;

type Story = StoryObj<typeof DirectionButton>;

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
