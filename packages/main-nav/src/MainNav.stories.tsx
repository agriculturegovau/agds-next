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
	variant: 'agriculture',
	items: NAV_ITEMS,
	activePath: '#content',
} as const;

const Template: ComponentStory<typeof MainNav> = (args) => (
	<MainNav {...args} />
);

export const AgricultureVariant = Template.bind({});
AgricultureVariant.args = {
	...defaultArgs,
	variant: 'agriculture',
};

export const DarkVariant = Template.bind({});
DarkVariant.args = {
	...defaultArgs,
	variant: 'dark',
};

export const DarkAltVariant = Template.bind({});
DarkAltVariant.args = {
	...defaultArgs,
	variant: 'darkAlt',
};

export const LightVariant = Template.bind({});
LightVariant.args = {
	...defaultArgs,
	variant: 'light',
};

export const LightAltVariant = Template.bind({});
LightAltVariant.args = {
	...defaultArgs,
	variant: 'lightAlt',
};

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
			endElement: <AvatarIcon color="action" size="md" weight="regular" />,
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
			endElement: <AvatarIcon color="action" size="md" weight="regular" />,
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
			endElement: <AvatarIcon color="action" size="md" weight="regular" />,
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

export const BottomBar: ComponentStory<typeof MainNavBottomBar> = (args) => (
	<MainNavBottomBar {...args} />
);
BottomBar.args = {
	variant: 'agriculture',
};
