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
	createIcon,
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
import { useLinkedBusinesses } from '../../lib/useLinkedBusinesses';
import { ErrorBoundary, ErrorBoundaryPageFallback } from '../ErrorBoundary';

type AppLayoutProps = PropsWithChildren<{
	focusMode?: boolean;
	applyMainElement?: boolean;
}>;

const footerLinks = [
	{ label: 'Label', href: '/not-found' },
	{ label: 'Label', href: '/not-found' },
	{ label: 'Label', href: '/not-found' },
	{ label: 'Label', href: '/not-found' },
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
								<DropdownMenuItemLink href="/app/not-found" icon={AvatarIcon}>
									Profile
								</DropdownMenuItemLink>
								<DropdownMenuItemLink href="/app/messages" icon={EmailIcon}>
									Messages
								</DropdownMenuItemLink>
								<DropdownMenuItemLink href="/app/not-found" icon={SettingsIcon}>
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
					label: 'Licences and permits',
					href: '/app/licences-and-permits',
					icon: IconApproval,
				},
				{
					label: 'Staff access',
					href: '/not-found',
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

const IconApproval = createIcon(
	<Fragment>
		<path
			d="M11.832 1.15241C11.9273 1.06594 12.0727 1.06594 12.168 1.15241L14.9342 3.66209C14.9826 3.70607 15.0464 3.72929 15.1118 3.72676L18.844 3.58228C18.9726 3.57731 19.084 3.67075 19.1014 3.79824L19.6072 7.49883C19.6161 7.56368 19.65 7.62246 19.7017 7.66256L22.6536 9.9509C22.7553 10.0297 22.7806 10.1729 22.712 10.2818L20.7207 13.4417C20.6859 13.4971 20.6741 13.5639 20.6879 13.6279L21.4783 17.2783C21.5055 17.4041 21.4328 17.53 21.3103 17.5693L17.7538 18.71C17.6914 18.73 17.6394 18.7736 17.6089 18.8315L15.8679 22.1359C15.808 22.2498 15.6714 22.2995 15.5522 22.2509L12.0945 20.8386C12.0339 20.8139 11.9661 20.8139 11.9055 20.8386L8.44776 22.2509C8.32863 22.2995 8.19203 22.2498 8.13205 22.1359L6.39106 18.8315C6.36056 18.7736 6.30856 18.73 6.24624 18.71L2.6897 17.5693C2.56717 17.53 2.49449 17.4041 2.52172 17.2783L3.31208 13.6279C3.32593 13.5639 3.31415 13.4971 3.27926 13.4417L1.28804 10.2818C1.21944 10.1729 1.24468 10.0297 1.34638 9.9509L4.29828 7.66256C4.35 7.62246 4.38394 7.56368 4.3928 7.49883L4.89862 3.79824C4.91605 3.67075 5.0274 3.57731 5.15599 3.58228L8.88819 3.72676C8.95359 3.72929 9.01737 3.70607 9.06585 3.66209L11.832 1.15241Z"
			strokeWidth="2"
			strokeLinejoin="round"
		/>
		<path
			d="M7.23828 12.9521L10.0954 15.8092L16.4047 9.5"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Fragment>,
	'IconApproval'
);

const IconUsers = createIcon(
	<Fragment>
		<path
			d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Fragment>,
	'IconUsers'
);
