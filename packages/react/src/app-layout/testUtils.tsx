import { ChartLineIcon, EmailIcon, HelpIcon, SuccessIcon } from '../icon';
import { FactoryIcon, HomeIcon } from './icons';

export const navigationItems = [
	[
		{
			label: 'Dashboard',
			icon: HomeIcon,
			href: '/account',
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
			badgeCount: 3,
		},
		{ label: 'Help', icon: HelpIcon, href: '/help' },
	],
];
