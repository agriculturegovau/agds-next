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
} from '../icon';

export const navigationItems = [
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
