import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { NotificationBadge } from './NotificationBadge';

export default {
	title: 'content/Badge/NotificationBadge',
	component: NotificationBadge,
} as ComponentMeta<typeof NotificationBadge>;

const Template: ComponentStory<typeof NotificationBadge> = (args) => (
	<NotificationBadge {...args} />
);

export const OnLight = Template.bind({});
OnLight.args = {
	value: 48,
	tone: 'neutral',
};

export const OnDark: ComponentStory<typeof NotificationBadge> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {
	value: 64,
	max: 99,
	tone: 'neutral',
};

export const Max = Template.bind({});
Max.args = {
	value: 100,
	max: 99,
	tone: 'neutral',
};
