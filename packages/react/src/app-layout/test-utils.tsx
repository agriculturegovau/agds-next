import { Fragment } from 'react';
import { Text } from '../text';
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
	AvatarIcon,
	ChevronsLeftIcon,
	MinusIcon,
} from '../icon';
import {
	DropdownMenuDivider,
	DropdownMenuItem,
	DropdownMenuItemLink,
	DropdownMenuPanel,
	DropdownMenuGroup,
	DropdownMenuGroupLink,
	DropdownMenuItemRadio,
} from '../dropdown-menu';

export const navigationItems = (businessName: string) => [
	{
		options: { disableGroupPadding: true },
		items: [
			{
				label: 'Back to my account',
				icon: ChevronsLeftIcon,
				href: '/account',
			},
		],
	},
	{
		options: { disableGroupPadding: true },
		items: [
			{
				label: (
					<Fragment>
						<Text fontWeight="bold" fontSize="xs">
							{businessName}
						</Text>
						<Text color="muted" fontSize="xs">
							ABN: 00 000 000 000
						</Text>
					</Fragment>
				),
			},
		],
	},
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
			items: [
				{
					label: 'Canberra',
					icon: MinusIcon,
					href: '/establishments/canberra',
				},
				{
					label: 'Sydney',
					icon: MinusIcon,
					href: '/establishments/sydney',
				},
			],
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
			items: [
				{
					label: 'Audit',
					icon: MinusIcon,
					href: '/compliance/audit',
				},
				{
					label: 'Certificates',
					icon: MinusIcon,
					href: '/compliance/certificates',
				},
			],
		},
	],

	[
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

export const exampleData = {
	userNames: {
		short: 'Ab Cd',
		regular: 'Toto Wolff',
		medium: 'Benjamin Harrington',
		long: 'Benjamin Alexander Harrington-Smythe',
	},
	businessNames: {
		short: ['Lorem', 'Ipsum', 'Company'],
		regular: ['Antfix', 'Produce Fresh', 'Organic Co'],
		medium: [
			'Malesuada lacus a tortor blandit fermentum phasellus',
			'Iaculis tortor duis ante nec risus elementum id ui',
			'Purus tortor lacus malesuada phasellus ipsum ex duis libero ante id',
		],
		long: [
			'Duis quis iaculis libero nec consectetur luctus ex in malesuada lacus a tortor blandit fermentum phasellus iaculis ipsum nec purus aliquet id elementum risus duis ante ui',
			'Duis ut a libero duis nisl ex lacus in luctus viverra iaculis iaculis tortor duis malesuada blandit purus diam ipsum ante nec risus elementum id ui nec quis aliquet phasellus fermentum',
			'Blandit iaculis iaculis quis ante diam viverra elementum ui risus nec luctus purus tortor lacus malesuada phasellus ipsum ex duis libero ante id Duis fermentum nisl aliquet duis in a nec ut consectetur',
		],
	},
};

export function ExampleAccountDropdown({
	businesses = exampleData.businessNames.regular,
	onBusinessChange,
	selectedBusinessName,
}: {
	businesses?: string[];
	onBusinessChange: (value: string) => void;
	selectedBusinessName: string;
}) {
	return (
		<DropdownMenuPanel palette="light">
			<DropdownMenuGroup label="Businesses">
				{businesses.map((businessName) => (
					<DropdownMenuItemRadio
						key={businessName}
						checked={businessName === selectedBusinessName}
						secondaryText="ABN 00 000 000 000"
						onClick={() => onBusinessChange?.(businessName)}
					>
						{businessName}
					</DropdownMenuItemRadio>
				))}
				<DropdownMenuGroupLink href="#">View all</DropdownMenuGroupLink>
			</DropdownMenuGroup>
			<DropdownMenuDivider />
			<DropdownMenuGroup label="My account">
				<DropdownMenuItemLink href="/profile" icon={AvatarIcon}>
					Profile
				</DropdownMenuItemLink>
				<DropdownMenuItemLink
					href="/messages"
					icon={EmailIcon}
					endElement={
						<span>
							<NotificationBadge tone="action" value={6} max={99} aria-hidden />
							<VisuallyHidden>, 6 unread</VisuallyHidden>
						</span>
					}
				>
					Messages
				</DropdownMenuItemLink>
				<DropdownMenuItemLink href="/account-settings" icon={SettingsIcon}>
					Account settings
				</DropdownMenuItemLink>
			</DropdownMenuGroup>
			<DropdownMenuDivider />
			<DropdownMenuItem onClick={() => console.log('sign out')} icon={ExitIcon}>
				Sign out
			</DropdownMenuItem>
		</DropdownMenuPanel>
	);
}
