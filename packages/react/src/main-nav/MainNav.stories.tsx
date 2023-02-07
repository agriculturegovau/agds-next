import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarIcon } from '../icon';
import { NotificationBadge } from '../badge';
import { MainNav } from './MainNav';
import { MainNavBottomBar } from './MainNavBottomBar';

export default {
	title: 'navigation/MainNav',
	component: MainNav,
	subcomponents: { MainNavBottomBar },
} as ComponentMeta<typeof MainNav>;

const navItems = [
	{ href: '#dashboard', label: 'Dashboard' },
	{ href: '#establishments', label: 'Establishments' },
	{ href: '#data', label: 'Data and Insights' },
	{ href: '#compliance', label: 'Compliance' },
];

const secondaryItems = [
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
];

const defaultArgs = {
	items: navItems,
	activePath: '#dashboard',
	background: 'bodyAlt',
	secondaryItems: secondaryItems,
} as const;

const Template: ComponentStory<typeof MainNav> = (args) => (
	<MainNav {...args} />
);

export const Body = Template.bind({});
Body.args = {
	...defaultArgs,
	background: 'body',
};
Body.storyName = 'Body background';

export const BodyAlt = Template.bind({});
BodyAlt.args = {
	...defaultArgs,
	background: 'bodyAlt',
};
BodyAlt.storyName = 'BodyAlt background';

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

export const Vertical: ComponentStory<typeof MainNav> = (args) => {
	return (
		<div style={{ width: '340px', height: '100vh' }}>
			<MainNav {...args} />
		</div>
	);
};
Vertical.args = {
	...defaultArgs,
	vertical: true,
	secondaryItems: [
		{
			href: '#help',
			label: 'Help',
		},
	],
};

export const BottomBar: ComponentStory<typeof MainNavBottomBar> = () => (
	<MainNavBottomBar />
);
