import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { IndicatorDot, NotificationBadge } from '@ag.ds-next/badge';
import { AvatarIcon } from '@ag.ds-next/icon';
import { SubNav } from './SubNav';

export default {
	title: 'navigation/SubNav',
	component: SubNav,
} as ComponentMeta<typeof SubNav>;

const exampleLinks = [
	{ href: '#usage', label: 'Usage' },
	{ href: '#code', label: 'Code' },
	{ href: '#content', label: 'Content' },
	{ href: '#accessibility', label: 'Accessibility' },
];

export const Basic: ComponentStory<typeof SubNav> = (args) => (
	<SubNav {...args} />
);
Basic.args = {
	background: 'body',
	activePath: '#code',
	links: exampleLinks,
};

export const OnBodyAlt: ComponentStory<typeof SubNav> = (args) => (
	<Box padding={1.5} background="bodyAlt">
		<SubNav {...args} />
	</Box>
);
OnBodyAlt.storyName = 'On bodyAlt background';
OnBodyAlt.args = {
	background: 'bodyAlt',
	activePath: '#code',
	links: exampleLinks,
};

export const WithEndElements: ComponentStory<typeof SubNav> = (args) => (
	<SubNav {...args} />
);
WithEndElements.args = {
	background: 'body',
	activePath: '#issues',
	links: [
		{
			href: '#code',
			label: 'Code',
			endElement: <NotificationBadge value={100} max={99} tone="action" />,
		},
		{
			href: '#issues',
			label: 'Issues',
			endElement: <NotificationBadge value={100} max={99} tone="action" />,
		},
		{
			href: '#pull-requests',
			label: 'Pull Requests',
			endElement: <NotificationBadge value={5} tone="action" />,
		},
		{
			href: '#user-settings',
			label: 'User Settings',
			endElement: <AvatarIcon />,
		},
	],
};
