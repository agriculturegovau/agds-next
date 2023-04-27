import { StoryObj, Meta } from '@storybook/react';
import { LoadingDots as LoadingDotsComp } from './index';

const meta: Meta<typeof LoadingDotsComp> = {
	title: 'content/Loading/LoadingDots',
	component: LoadingDotsComp,
};

export default meta;

type Story = StoryObj<typeof LoadingDotsComp>;

export const LoadingDots: Story = {
	args: {
		size: 'md',
		label: 'loading',
		role: 'status',
	},
};
