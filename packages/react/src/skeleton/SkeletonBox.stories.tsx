import { StoryObj, Meta } from '@storybook/react';
import { SkeletonBox } from './SkeletonBox';

const meta: Meta<typeof SkeletonBox> = {
	title: 'content/Skeleton/SkeletonBox',
	component: SkeletonBox,
};

export default meta;

export const Square: StoryObj<typeof SkeletonBox> = {
	args: {
		width: '200px',
		height: '200px',
	},
};

export const Rectangle: StoryObj<typeof SkeletonBox> = {
	args: {
		width: '100%',
		height: '200px',
	},
};
