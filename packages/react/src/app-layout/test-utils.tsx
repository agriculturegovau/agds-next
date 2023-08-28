import { NotificationBadge } from '../notification-badge';
import { VisuallyHidden } from '../a11y';
import {
	ChartLineIcon,
	EmailIcon,
	ExitIcon,
	HelpIcon,
	HomeIcon,
	SuccessIcon,
	SettingsIcon,
	FactoryIcon,
	ChevronsLeftIcon,
} from '../icon';
import { Stack } from '../stack';
import { Text } from '../text';

export const navigationItems = [
	[
		{
			label: 'Back to my account',
			icon: ChevronsLeftIcon,
			href: '/account',
		},
	],
	[
		{
			label: (
				<Stack as="span" gap={0.25}>
					<Text fontWeight="bold" fontSize="xs">
						Transcontinental Consolidated Agricultural Export Group of Australia
						PTY LTD
					</Text>
					<Text color="muted" fontSize="xs">
						ABN: 89 790 756 100
					</Text>
				</Stack>
			),
		},
	],
	[
		{
			label: 'Dashboard',
			icon: HomeIcon,
			href: '/',
		},
		{
			label: 'Establishments',
			icon: FactoryIcon,
			href: '/establishments',
		},
		{
			label: 'Data and Insights',
			icon: ChartLineIcon,
			href: '/intelligence',
		},
		{
			label: 'Compliance',
			icon: SuccessIcon,
			href: '/compliance',
		},
	],
	[
		{
			label: 'Messages',
			icon: EmailIcon,
			href: '/account/messages',
			endElement: (
				<span>
					<NotificationBadge tone="action" value={6} max={99} aria-hidden />
					<VisuallyHidden>, 6 unread</VisuallyHidden>
				</span>
			),
		},
		{
			label: 'Account settings',
			icon: SettingsIcon,
			href: '/account/settings',
		},
		{
			label: 'Help',
			icon: HelpIcon,
			href: '/help',
		},
	],
	[
		{
			label: 'Sign out',
			onClick: console.log,
			icon: ExitIcon,
		},
	],
];

export const slimNavigationItems = [
	[
		{
			label: 'Dashboard',
			icon: HomeIcon,
			href: '/',
		},
		{
			label: 'Establishments',
			icon: FactoryIcon,
			href: '/establishments',
		},
		{
			label: 'Data and Insights',
			icon: ChartLineIcon,
			href: '/intelligence',
		},
		{
			label: 'Compliance',
			icon: SuccessIcon,
			href: '/compliance',
		},
	],
	[
		{
			label: 'Messages',
			icon: EmailIcon,
			href: '/account/messages',
			endElement: (
				<span>
					<NotificationBadge tone="action" value={6} max={99} aria-hidden />
					<VisuallyHidden>, 6 unread</VisuallyHidden>
				</span>
			),
		},
		{
			label: 'Account settings',
			icon: SettingsIcon,
			href: '/account/settings',
		},
		{
			label: 'Help',
			icon: HelpIcon,
			href: '/help',
		},
	],
	[
		{
			label: 'Sign out',
			onClick: console.log,
			icon: ExitIcon,
		},
	],
];
