import { Meta, StoryObj } from '@storybook/react';
import { AvatarIcon } from '../icon';
import { NotificationBadge } from '../badge';
import { MainNav } from './MainNav';
import { MainNavBottomBar } from './MainNavBottomBar';

const meta: Meta<typeof MainNav> = {
	title: 'navigation/MainNav',
	component: MainNav,
	args: {
		items: [
			{ href: '#home', label: 'Home' },
			{ href: '#content', label: 'Content page' },
			{ href: '#form', label: 'Form page' },
			{ href: '#simple', label: 'Simple page' },
		],
		activePath: '#content',
	},
};

export default meta;

type Story = StoryObj<typeof MainNav>;

export const Body: Story = {
	storyName: 'Body background',
	args: {
		background: 'body',
	},
};

export const BodyAlt: Story = {
	storyName: 'BodyAlt background',
	args: {
		background: 'bodyAlt',
	},
};

export const SecondaryLinks: Story = {
	args: {
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
	},
};

export const SecondaryButtons: Story = {
	args: {
		secondaryItems: [
			{
				onClick: console.log,
				label: 'Sign in',
				endElement: <AvatarIcon color="action" />,
			},
		],
	},
};

export const NoItems: Story = {
	args: {
		items: undefined,
		secondaryItems: [
			{
				onClick: console.log,
				label: 'Sign in',
				endElement: <AvatarIcon color="action" />,
			},
		],
	},
};

export const EndElement: Story = {
	args: {
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
	},
};

export const BottomBar = () => <MainNavBottomBar />;
