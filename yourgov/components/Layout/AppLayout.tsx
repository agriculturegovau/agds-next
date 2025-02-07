import { PropsWithChildren, Fragment, useMemo } from 'react';
import { useRouter } from 'next/router';
import {
	AppLayout as AgDsAppLayout,
	AppLayoutHeader as AgDSAppLayoutHeader,
	AppLayoutSidebar as AgDSAppLayoutSidebar,
	AppLayoutFooter,
	AppLayoutFooterDivider,
	AppLayoutContent,
} from '@ag.ds-next/react/app-layout';
import { Box } from '@ag.ds-next/react/box';
import { tokens } from '@ag.ds-next/react/core';
import { Logo } from '@ag.ds-next/react/ag-branding';
import {
	DropdownMenuDivider,
	DropdownMenuGroup,
	DropdownMenuItemLink,
	DropdownMenuItemRadio,
	DropdownMenuPanel,
} from '@ag.ds-next/react/dropdown-menu';
import {
	AvatarIcon,
	ChevronsLeftIcon,
	EmailIcon,
	ExitIcon,
	HelpIcon,
	HomeIcon,
	PermitIcon,
	SettingsIcon,
} from '@ag.ds-next/react/icon';
import { LinkList } from '@ag.ds-next/react/link-list';
import { NotificationBadge } from '@ag.ds-next/react/notification-badge';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { Text } from '@ag.ds-next/react/text';
import { useAuth, User } from '../../lib/useAuth';
import NotFoundPage from '../../pages/not-found';
import { Business, useLinkedBusinesses } from '../../lib/useLinkedBusinesses';
import { ErrorBoundary, ErrorBoundaryPageFallback } from '../ErrorBoundary';
import { IconUsers } from '../CustomIcons';

type AppLayoutProps = PropsWithChildren<{
	focusMode?: boolean;
	applyMainElement?: boolean;
}>;

const footerLinks = [
	{ label: 'About', href: '/not-found' },
	{ label: 'Help', href: '/not-found' },
	{ label: 'Accessibility', href: '/not-found' },
	{ label: 'Disclaimer', href: '/not-found' },
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
	if (!user) return <NotFoundPage />;

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
						<ErrorBoundary fallback={<ErrorBoundaryPageFallback />}>
							{children}
						</ErrorBoundary>
					</Box>
					<AppLayoutFooter>
						<nav aria-label="footer">
							<LinkList horizontal links={footerLinks} />
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
	const { pathname, ...router } = useRouter();
	const { linkedBusinesses, selectedBusiness, setSelectedBusiness } =
		useLinkedBusinesses();

	function onBusinessClick(business: Business) {
		setSelectedBusiness(business);
		router.push('/app/dashboard');
	}

	const isAppHomePage = pathname === '/app';

	return (
		<AgDSAppLayoutHeader
			accountDetails={{
				name: user.displayName,
				secondaryText: isAppHomePage ? 'My account' : selectedBusiness?.name,
				dropdown: (
					<DropdownMenuPanel palette="light">
						<DropdownMenuGroup label="Businesses">
							{linkedBusinesses.map((linkedBusiness) => (
								<DropdownMenuItemRadio
									checked={
										selectedBusiness?.name
											? selectedBusiness.name === linkedBusiness.name
											: false
									}
									key={linkedBusiness.name}
									onClick={() => onBusinessClick(linkedBusiness)}
									secondaryText={`ABN ${linkedBusiness.abn}`}
								>
									{linkedBusiness.name}
								</DropdownMenuItemRadio>
							))}
						</DropdownMenuGroup>
						<DropdownMenuGroup label="My account">
							<DropdownMenuItemLink href="/not-found" icon={AvatarIcon}>
								Profile
							</DropdownMenuItemLink>
							<DropdownMenuItemLink href="/not-found" icon={EmailIcon}>
								Messages
							</DropdownMenuItemLink>
							<DropdownMenuItemLink href="/not-found" icon={SettingsIcon}>
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
			heading="yourGov"
			href="/app"
			logo={<Logo />}
			subLine="Access government services from one place"
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
								<Text fontSize="xs" fontWeight="bold">
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
				{
					label: 'Dashboard',
					href: '/app/dashboard',
					icon: HomeIcon,
				},
				{
					label: 'Permits',
					href: '/app/permits',
					icon: PermitIcon,
					items: [
						{
							label: 'Apply for a new permit',
							href: '/app/permits/apply-for-new-permit',
						},
						{
							label: 'Manage existing permits',
							href: '/app/permits/manage-existing',
						},
					],
				},
				{
					label: 'Staff',
					href: '/app/staff',
					icon: IconUsers,
				},
			],
			[
				{
					label: 'Messages',
					href: '/app/messages',
					icon: EmailIcon,
					endElement: <NotificationBadge tone="action" value={3} />,
				},
				{
					label: 'Account settings',
					href: '/not-found',
					icon: SettingsIcon,
				},
				{
					label: 'Help',
					href: '/not-found',
					icon: HelpIcon,
				},
			],
			[
				{
					label: 'Sign out',
					href: '/sign-out',
					icon: ExitIcon,
				},
			],
		],
		[selectedBusiness?.abn, selectedBusiness?.name]
	);

	return <AgDSAppLayoutSidebar activePath={pathname} items={links} />;
}
