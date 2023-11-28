import { PropsWithChildren, Fragment } from 'react';
import { tokens } from '@ag.ds-next/react/core';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { WebsiteIcon, ExitIcon } from '@ag.ds-next/react/icon';
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

type AppLayoutProps = PropsWithChildren<{
	focusMode?: boolean;
	applyMainElement?: boolean;
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
}: AppLayoutProps) => {
	const year = new Date().getFullYear();
	return (
		<Fragment>
			<SkipLinks
				links={[{ href: '#main-content', label: 'Skip to main content' }]}
			/>
			<AgDsAppLayout focusMode={focusMode}>
				<AppLayoutHeader
					heading="Lorem ipsum dolor sit amet consectetur adipiscing elit at auctor sit amet posuere nec mi pellentesque alique"
					subLine="Lorem ipsum dolor sit amet consectetur adipiscing elit aenean tempus volutpat lacus in accumsan vestibulum rutrum velit non nulla porta aliquet aliquam leo lorem vehicula at auctor sit amet posuere nec mi pellentesque alique"
					logo={<Logo />}
					href="#"
				/>
				<AppLayoutSidebar items={sidebarLinks} />
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
						<Text fontSize="xs">
							We acknowledge the traditional owners of country throughout
							Australia and recognise their continuing connection to land,
							waters and culture. We pay our respects to their Elders past,
							present and emerging.
						</Text>
						<Text fontSize="xs">
							&copy; {year} Department of Agriculture, Fisheries and Forestry
						</Text>
					</AppLayoutFooter>
				</AppLayoutContent>
			</AgDsAppLayout>
		</Fragment>
	);
};
