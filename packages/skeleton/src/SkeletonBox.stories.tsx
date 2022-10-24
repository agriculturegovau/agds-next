import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SkeletonBox } from './SkeletonBox';

export default {
	title: 'Components/Skeleton/SkeletonBox',
	component: SkeletonBox,
} as ComponentMeta<typeof SkeletonBox>;

export const Square: ComponentStory<typeof SkeletonBox> = (args) => (
	<SkeletonBox {...args} />
);
Square.args = {
	width: '200px',
	height: '200px',
};

export const Rectangle: ComponentStory<typeof SkeletonBox> = (args) => (
	<SkeletonBox {...args} />
);
Rectangle.args = {
	width: '100%',
	height: '200px',
};
