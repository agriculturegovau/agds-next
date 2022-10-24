import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationBadge } from './NotificationBadge';

export default {
	title: 'Components/Badge/NotificationBadge',
	component: NotificationBadge,
} as ComponentMeta<typeof NotificationBadge>;

const Template: ComponentStory<typeof NotificationBadge> = (args) => (
	<NotificationBadge {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
	value: 48,
	tone: 'neutral',
};

export const Max = Template.bind({});
Max.args = {
	value: 100,
	max: 99,
	tone: 'neutral',
};
