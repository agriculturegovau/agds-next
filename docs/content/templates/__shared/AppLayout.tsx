import { PropsWithChildren, Fragment } from 'react';
import { tokens } from '@ag.ds-next/react/core';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import {
	WebsiteIcon,
	ExitIcon,
	HomeIcon,
	AvatarIcon,
	PlaneLandingIcon,
	PlaneTakeoffIcon,
} from '@ag.ds-next/react/icon';
import {
	AppLayout as AgDsAppLayout,
	AppLayoutHeader,
	AppLayoutSidebar,
	AppLayoutContent,
	AppLayoutFooter,
	AppLayoutFooterDivider,
} from '@ag.ds-next/react/app-layout';
import { Box } from '@ag.ds-next/react/box';
import { Text } from '@ag.ds-next/react/text';
import { LinkList } from '@ag.ds-next/react/link-list';
import {
	DropdownMenuDivider,
	DropdownMenuItemLink,
	DropdownMenuPanel,
} from '@ag.ds-next/react/dropdown-menu';

type AppLayoutProps = PropsWithChildren<{
	focusMode?: boolean;
	applyMainElement?: boolean;

	palette?: 'light' | 'dark';
	background?: 'body' | 'bodyAlt';
}>;

const sidebarLinks = [
	[
		{ label: 'Label', href: '#', icon: WebsiteIcon },
		{ label: 'Label', href: '#', icon: WebsiteIcon },
	],
	[{ label: 'Label', icon: ExitIcon }],
];

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

export const AppLayout = ({
	children,
	focusMode = false,
	applyMainElement = true,
	palette,
	background,
}: AppLayoutProps) => {
	const year = new Date().getFullYear();
	return (
		<Fragment>
			<SkipLinks
				links={[{ href: '#main-content', label: 'Skip to main content' }]}
			/>
			<AgDsAppLayout focusMode={focusMode}>
				<AppLayoutHeader
					heading="Service name"
					subLine="Service description that could be a little longer"
					logo={<Logo />}
					href="#"
					palette={palette}
					background={background}
					accountDetails={{
						name: 'User name',
						dropdown: (
							<DropdownMenuPanel>
								<DropdownMenuItemLink href="#" icon={HomeIcon}>
									Home
								</DropdownMenuItemLink>
								<DropdownMenuItemLink href="#" icon={PlaneTakeoffIcon}>
									Export
								</DropdownMenuItemLink>
								<DropdownMenuItemLink href="#" icon={PlaneLandingIcon}>
									Import and biosecurity
								</DropdownMenuItemLink>
								<DropdownMenuItemLink href="#" icon={AvatarIcon}>
									Profile and settings
								</DropdownMenuItemLink>

								<DropdownMenuDivider />

								<DropdownMenuItemLink href="#" icon={ExitIcon}>
									Sign out
								</DropdownMenuItemLink>
							</DropdownMenuPanel>
						),
					}}
				/>
				<AppLayoutSidebar background={background} items={sidebarLinks} />
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
};
