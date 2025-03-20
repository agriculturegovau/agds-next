import { PropsWithChildren, useMemo } from 'react';
import { Logo } from '../../packages/react/src/ag-branding';
import { Box } from '../../packages/react/src/box';
import { Stack } from '../../packages/react/src/stack';
import { tokens } from '../../packages/react/src/core';
import { Footer, FooterDivider } from '../../packages/react/src/footer';
import { Header } from '../../packages/react/src/header';
import { AvatarIcon } from '../../packages/react/src/icon';
import { LinkList } from '../../packages/react/src/link-list';
import { MainNav } from '../../packages/react/src/main-nav';
import { Text } from '../../packages/react/src/text';

type PageTemplateProps = PropsWithChildren<{
	applyMainElement?: boolean;
	background?: 'body' | 'bodyAlt';
	focusMode?: boolean;
}>;

export function PageTemplate({
	applyMainElement = true,
	background,
	children,
	focusMode,
}: PageTemplateProps) {
	const year = useMemo(() => new Date().getFullYear(), []);
	return (
		<Box background={background}>
			<Stack palette="dark">
				<Header
					background="bodyAlt"
					heading="Export Service"
					logo={<Logo />}
					subline="Supporting Australian agricultural exports"
				/>
				<MainNav
					activePath="#home"
					focusMode={focusMode}
					id="main-nav"
					items={[
						{ label: 'Home', href: '#home' },
						{ label: 'Category', href: '#category' },
					]}
					secondaryItems={[
						{
							label: 'Sign in',
							href: '#sign-in',
							endElement: <AvatarIcon color="action" />,
						},
					]}
				/>
			</Stack>
			<Box flexGrow={1} {...(applyMainElement && { as: 'main' })}>
				{children}
			</Box>
			<Box palette="dark">
				<Footer background="bodyAlt">
					<nav aria-label="footer">
						<LinkList
							horizontal
							links={[
								{ label: 'Home', href: '/' },
								{
									label: 'Storybook',
									href: 'https://design-system.agriculture.gov.au/storybook/index.html',
								},
								{
									label: 'Playroom',
									href: 'https://design-system.agriculture.gov.au/playroom',
								},
								{
									label: 'Starter kit',
									href: 'https://github.com/agriculturegovau/agds-starter-kit',
								},
							]}
						/>
					</nav>
					<FooterDivider />
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						We acknowledge the traditional owners of country throughout
						Australia and recognise their continuing connection to land, waters
						and culture. We pay our respects to their Elders past, present and
						emerging.
					</Text>
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						&copy; {year} Department of Agriculture, Fisheries and Forestry
					</Text>
				</Footer>
			</Box>
		</Box>
	);
}
