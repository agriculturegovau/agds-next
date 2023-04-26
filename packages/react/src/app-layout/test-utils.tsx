import { Fragment } from 'react';
import { NotificationBadge } from '../badge';
import {
	ChartLineIcon,
	EmailIcon,
	ExitIcon,
	HelpIcon,
	HomeIcon,
	SuccessIcon,
} from '../icon';
import { createIcon } from '../icon';

// TODO Add this as a design system component
const SettingsIcon = createIcon(
	<Fragment>
		<circle cx="12" cy="12" r="3" />
		<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
	</Fragment>,
	'SettingsIcon'
);

const FactoryIcon = createIcon(
	<Fragment>
		<path d="M15.7575 12.4394L17.7575 12.9394C18.3886 13.0972 19 12.6198 19 11.9692V3C19 2.44772 18.5523 2 18 2H16C15.4477 2 15 2.44772 15 3V11.4692C15 11.9281 15.3123 12.3281 15.7575 12.4394ZM3.24254 9.31063L21.2425 13.8106C21.6877 13.9219 22 14.3219 22 14.7808V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V10.2808C2 9.63021 2.61139 9.15285 3.24254 9.31063Z" />
		<rect x="7" y="18" width="1" height="1" transform="rotate(180 7 18)" />
		<rect x="11" y="17" width="1" height="1" />
	</Fragment>,
	'FactoryIcon'
);

export const navigationItems = [
	[
		{
			label: 'Dashboard',
			icon: HomeIcon,
			href: '#dashboard',
		},
		{
			label: 'Establishments',
			icon: FactoryIcon,
			href: '#establishments',
		},
		{
			label: 'Data and Insights',
			icon: ChartLineIcon,
			href: '#intelligence',
		},
		{
			label: 'Compliance',
			icon: SuccessIcon,
			href: '#compliance',
		},
	],
	[
		{
			label: 'Messages',
			icon: EmailIcon,
			href: '#account/messages',
			endElement: <NotificationBadge tone="action" value={6} max={99} />,
		},
		{
			label: 'Account settings',
			icon: SettingsIcon,
			href: '#account/settings',
		},
		{
			label: 'Help',
			icon: HelpIcon,
			href: '#help',
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
