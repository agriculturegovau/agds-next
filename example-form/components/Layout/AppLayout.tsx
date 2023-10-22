import { PropsWithChildren, Fragment, useMemo } from 'react';
import { useRouter } from 'next/router';
import { tokens } from '@ag.ds-next/react/core';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import {
	ExitIcon,
	HomeIcon,
	FactoryIcon,
	EmailIcon,
	SettingsIcon,
	HelpIcon,
	SuccessIcon,
	AvatarIcon,
	ChevronsLeftIcon,
} from '@ag.ds-next/react/icon';
import {
	AppLayout as AgDsAppLayout,
	AppLayoutHeader as AgDSAppLayoutHeader,
	AppLayoutSidebar as AgDSAppLayoutSidebar,
	AppLayoutFooter,
	AppLayoutFooterDivider,
	AppLayoutContent,
} from '@ag.ds-next/react/app-layout';
import { Box } from '@ag.ds-next/react/box';
import { Text } from '@ag.ds-next/react/text';
import { LinkList } from '@ag.ds-next/react/link-list';
import {
	DropdownMenuDivider,
	DropdownMenuGroup,
	DropdownMenuItemLink,
	DropdownMenuItemRadio,
	DropdownMenuPanel,
} from '@ag.ds-next/react/dropdown-menu';
import { useAuth, User } from '../../lib/useAuth';
import { PageNotAllowed } from '../PageNotAllowed';
import { useLinkedBusinesses } from '../../lib/useLinkedBusinesses';

type AppLayoutProps = PropsWithChildren<{
	focusMode?: boolean;
	applyMainElement?: boolean;
}>;

const footerLinks = [
	{ label: 'Label', href: '#' },
	{
		label: 'Label',
		href: '#',
	},
	{
		label: 'Label',
		href: '#',
	},
	{
		label: 'Label',
		href: '#',
	},
];

const MAIN_CONTENT_ATTRS = {
	as: 'main' as const,
	id: 'main-content',
	tabIndex: -1,
	css: { '&:focus': { outline: 'none' } },
};

export function AppLayout({
	children,
	focusMode = false,
	applyMainElement = true,
}: AppLayoutProps) {
	const year = new Date().getFullYear();

	const { hasLoadedUser, user } = useAuth();

	// Wait until the user has been fetched from session storage
	if (!hasLoadedUser) return null;

	// Application pages are not visible when you are logged out
	if (!user) return <PageNotAllowed />;

	return (
		<Fragment>
			<SkipLinks
				links={[{ href: '#main-content', label: 'Skip to main content' }]}
			/>
			<AgDsAppLayout focusMode={focusMode}>
				<AppLayoutHeader user={user} />
				<AppLayoutSidebar />
				<AppLayoutContent>
					<Box
						flexGrow={1}
						{...(applyMainElement ? MAIN_CONTENT_ATTRS : undefined)}
					>
						{children}
					</Box>
					<AppLayoutFooter>
						<nav aria-label="footer">
							<LinkList links={footerLinks} horizontal />
						</nav>
						<AppLayoutFooterDivider />
						<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
							We acknowledge the traditional owners of country throughout
							Australia and recognise their continuing connection to land,
							waters and culture. We pay our respects to their Elders past,
							present and emerging.
						</Text>
						<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
							&copy; {year} Department of Agriculture, Fisheries and Forestry
						</Text>
					</AppLayoutFooter>
				</AppLayoutContent>
			</AgDsAppLayout>
		</Fragment>
	);
}

function AppLayoutHeader({ user }: { user: User }) {
	const { pathname } = useRouter();
	const { linkedBusinesses, selectedBusiness, setSelectedBusiness } =
		useLinkedBusinesses();

	return (
		<AgDSAppLayoutHeader
			heading="yourGov"
			subLine="Access government services from one place"
			logo={<Logo />}
			href="/app"
			accountDetails={{
				name: user.displayName,
				secondaryText: selectedBusiness?.name,
				dropdown:
					pathname === '/app' ? null : (
						<DropdownMenuPanel palette="light">
							<DropdownMenuGroup label="Businesses">
								{linkedBusinesses.map((b) => (
									<DropdownMenuItemRadio
										key={b.name}
										checked={
											selectedBusiness?.name
												? selectedBusiness.name === b.name
												: false
										}
										secondaryText={`ABN ${b.abn}`}
										onClick={() => setSelectedBusiness(b)}
									>
										{b.name}
									</DropdownMenuItemRadio>
								))}
							</DropdownMenuGroup>
							<DropdownMenuGroup label="My account">
								<DropdownMenuItemLink href="/app/profile" icon={AvatarIcon}>
									Profile
								</DropdownMenuItemLink>
								<DropdownMenuItemLink href="/app/messages" icon={EmailIcon}>
									Messages
								</DropdownMenuItemLink>
								<DropdownMenuItemLink
									href="/app/account-settings"
									icon={SettingsIcon}
								>
									Account settings
								</DropdownMenuItemLink>
							</DropdownMenuGroup>
							<DropdownMenuDivider />
							<DropdownMenuItemLink href="/sign-out" icon={ExitIcon}>
								Sign out
							</DropdownMenuItemLink>
						</DropdownMenuPanel>
					),
			}}
		/>
	);
}

function AppLayoutSidebar() {
	const { pathname } = useRouter();
	const { selectedBusiness } = useLinkedBusinesses();

	const links = useMemo(
		() => [
			{
				options: { disableGroupPadding: true },
				items: [
					{
						label: 'Back to my account',
						icon: ChevronsLeftIcon,
						href: '/app',
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
									{selectedBusiness?.name}
								</Text>
								<Text color="muted" fontSize="xs">
									ABN: {selectedBusiness?.abn}
								</Text>
							</Fragment>
						),
					},
				],
			},
			[
				{ label: 'Dashboard', href: '/app/dashboard', icon: HomeIcon },
				{ label: 'Businesses', href: '/app/businesses', icon: FactoryIcon },
				{ label: 'Compliance', href: '/app/compliance', icon: SuccessIcon },
			],
			[
				{ label: 'Messages', href: '/app/messages', icon: EmailIcon },
				{
					label: 'Account settings',
					href: '/app/account-settings',
					icon: SettingsIcon,
				},
				{ label: 'Help', href: '/app/help', icon: HelpIcon },
			],
			[{ label: 'Sign out', href: '/sign-out', icon: ExitIcon }],
		],
		[selectedBusiness?.abn, selectedBusiness?.name]
	);

	return <AgDSAppLayoutSidebar items={links} activePath={pathname} />;
}
