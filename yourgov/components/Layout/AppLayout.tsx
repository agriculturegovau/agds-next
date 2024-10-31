import { PropsWithChildren, Fragment, useMemo } from 'react';
import { useRouter } from 'next/router';
import { tokens } from '@ag.ds-next/react/core';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import {
	ExitIcon,
	HomeIcon,
	EmailIcon,
	SettingsIcon,
	HelpIcon,
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
import NotFoundPage from '../../pages/not-found';
import { Business, useLinkedBusinesses } from '../../lib/useLinkedBusinesses';
import { ErrorBoundary, ErrorBoundaryPageFallback } from '../ErrorBoundary';
import { IconApproval, IconUsers } from '../CustomIcons';

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
	const { pathname, push } = useRouter();
	const { linkedBusinesses, selectedBusiness, setSelectedBusiness } =
		useLinkedBusinesses();

	function onBusinessClick(business: Business) {
		setSelectedBusiness(business);
		push('/app/dashboard');
	}

	const isAppHomePage = pathname === '/app';

	return (
		<AgDSAppLayoutHeader
			heading="yourGov"
			subLine="Access government services from one place"
			logo={<Logo />}
			href="/app"
			accountDetails={{
				name: user.displayName,
				secondaryText: isAppHomePage ? 'My account' : selectedBusiness?.name,
				dropdown: (
					<DropdownMenuPanel palette="light">
						<DropdownMenuGroup label="Businesses">
							{linkedBusinesses.map((linkedBusiness) => (
								<DropdownMenuItemRadio
									key={linkedBusiness.name}
									checked={
										selectedBusiness?.name
											? selectedBusiness.name === linkedBusiness.name
											: false
									}
									secondaryText={`ABN ${linkedBusiness.abn}`}
									onClick={() => onBusinessClick(linkedBusiness)}
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
				{
					label: 'Dashboard',
					href: '/app/dashboard',
					icon: HomeIcon,
				},
				{
					label: 'Permits',
					href: '/app/licences-and-permits',
					icon: IconApproval,
					items: [
						{
							label: 'Apply for a new permit',
							href: '/app/licences-and-permits/apply/mobile-food-vendor-permit',
						},
						{
							label: 'Manage existing permits',
							href: '/app/licences-and-permits/manage-existing',
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

	return <AgDSAppLayoutSidebar items={links} activePath={pathname} />;
}
