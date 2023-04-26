import { Meta, StoryObj } from '@storybook/react';
import { SkeletonBox } from './SkeletonBox';

const meta: Meta<typeof SkeletonBox> = {
	title: 'content/Skeleton/SkeletonBox',
	component: SkeletonBox,
};

export default meta;

type Story = StoryObj<typeof SkeletonBox>;

export const Square: Story = {
	args: {
		width: '200px',
		height: '200px',
	},
};

export const Rectangle: Story = {
	args: {
		width: '100%',
		height: '200px',
	},
};
