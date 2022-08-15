import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarIcon } from '@ag.ds-next/icon';
import { NotificationBadge } from '@ag.ds-next/badge';
import { MainNav } from './MainNav';
import { MainNavBottomBar } from './MainNavBottomBar';

export default {
	title: 'navigation/MainNav',
	component: MainNav,
	subcomponents: { MainNavBottomBar },
} as ComponentMeta<typeof MainNav>;

const NAV_ITEMS = [
	{ href: '#home', label: 'Home' },
	{ href: '#content', label: 'Content page' },
	{ href: '#form', label: 'Form page' },
	{ href: '#simple', label: 'Simple page' },
];

const defaultArgs = {
	items: NAV_ITEMS,
	activePath: '#content',
	background: 'body',
} as const;

const Template: ComponentStory<typeof MainNav> = (args) => (
	<MainNav {...args} />
);

export const Body = Template.bind({});
Body.args = {
	...defaultArgs,
	background: 'body',
};
Body.storyName = 'body background';

export const BodyAlt = Template.bind({});
BodyAlt.args = {
	...defaultArgs,
	background: 'bodyAlt',
};
BodyAlt.storyName = 'bodyAlt background';

export const HeaderRightLinks = Template.bind({});
HeaderRightLinks.args = {
	...defaultArgs,
	activePath: '#messages',
	secondaryItems: [
		{
			href: '#messages',
			label: 'Messages',
			endElement: <NotificationBadge tone="action" value={5} />,
		},
		{
			href: '#sign-in',
			label: 'Sign in',
			endElement: <AvatarIcon color="action" />,
		},
	],
};

export const HeaderRightButton = Template.bind({});
HeaderRightButton.args = {
	...defaultArgs,
	secondaryItems: [
		{
			onClick: console.log,
			label: 'Sign in',
			endElement: <AvatarIcon color="action" />,
		},
	],
};

export const NoLinks = Template.bind({});
NoLinks.args = {
	...defaultArgs,
	items: undefined,
	secondaryItems: [
		{
			onClick: console.log,
			label: 'Sign in',
			endElement: <AvatarIcon color="action" />,
		},
	],
};

export const EndElement = Template.bind({});
EndElement.args = {
	...defaultArgs,
	activePath: '#issues',
	items: [
		{ href: '#home', label: 'Home' },
		{ href: '#code', label: 'Code' },
		{
			href: '#issues',
			label: 'Issues',
			endElement: <NotificationBadge tone="action" value={5} />,
		},
		{ href: '#pull-requests', label: 'Pull requests' },
		{ href: '#security', label: 'Security' },
		{ href: '#settings', label: 'Settings' },
	],
};

export const BottomBar: ComponentStory<typeof MainNavBottomBar> = () => (
	<MainNavBottomBar />
);
