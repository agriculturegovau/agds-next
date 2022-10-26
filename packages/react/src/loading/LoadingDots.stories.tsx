import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoadingDots as LoadingDotsComp } from './index';

export default {
	title: 'content/Loading/LoadingDots',
	component: LoadingDotsComp,
} as ComponentMeta<typeof LoadingDotsComp>;

export const LoadingDots: ComponentStory<typeof LoadingDotsComp> = (args) => (
	<LoadingDotsComp {...args} />
);
LoadingDots.args = {
	size: 'md',
	label: 'loading',
	role: 'status',
};
