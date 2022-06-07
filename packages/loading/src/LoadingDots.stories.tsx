import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { LoadingDots } from './index';

export default {
	title: 'content/Loading/LoadingDots',
	component: LoadingDots,
} as ComponentMeta<typeof LoadingDots>;

export const OnLight: ComponentStory<typeof LoadingDots> = (args) => (
	<LoadingDots {...args} />
);
OnLight.args = {
	size: 'md',
	'aria-label': 'Loading',
	role: 'status',
};

export const OnDark: ComponentStory<typeof LoadingDots> = (args) => (
	<Box palette="dark" background="body" color="text" padding={1.5}>
		<LoadingDots {...args} />
	</Box>
);
OnDark.args = {
	size: 'md',
	'aria-label': 'Loading',
	role: 'status',
};
