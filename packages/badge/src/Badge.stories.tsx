import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Badge } from './Badge';

export default {
	title: 'content/Badge/Badge',
	component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const OnLight = Template.bind({});
OnLight.args = {
	tone: 'info',
	label: 'In progress',
};

export const OnDark: ComponentStory<typeof Badge> = (args) => (
	<Box palette="dark" background="body" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {
	tone: 'info',
	label: 'In progress',
};
