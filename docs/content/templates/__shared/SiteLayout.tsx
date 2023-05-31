import { PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/react/box';
import { Flex } from '@ag.ds-next/react/flex';
import { Stack } from '@ag.ds-next/react/stack';
import { Footer, FooterDivider } from '@ag.ds-next/react/footer';
import { Header } from '@ag.ds-next/react/header';
import { LinkList } from '@ag.ds-next/react/link-list';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { MainNav } from '@ag.ds-next/react/main-nav';
import { Text } from '@ag.ds-next/react/text';
import { tokens } from '@ag.ds-next/react/core';

export const SiteLayout = ({ children }: PropsWithChildren) => (
	<Flex
		flexDirection="column"
		fontFamily="body"
		palette="light"
		minHeight="100vh"
	>
		<Stack palette="dark">
			<Header
				background="bodyAlt"
				logo={<Logo />}
				heading="Site title"
				href="#"
				subline="Service description that could be a little longer"
			/>

			<MainNav
				id="main-nav"
				items={[
					{ label: 'Menu', href: '#' },
					{ label: 'Menu', href: '#' },
					{ label: 'Menu', href: '#' },
				]}
				secondaryItems={[{ label: 'Menu', href: '#' }]}
			/>
		</Stack>
		{children}
		<Box palette="dark">
			<Footer background="bodyAlt">
				<nav aria-label="footer">
					<LinkList
						links={[
							{ label: 'Link', href: '#' },
							{ label: 'Link', href: '#' },
							{ label: 'Link', href: '#' },
						]}
						horizontal
					/>
				</nav>
				<FooterDivider />

				<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
					We acknowledge the traditional owners of country throughout Australia
					and recognise their continuing connection to land, waters and culture.
					We pay our respects to their Elders past, present and emerging.
				</Text>
				<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
					&copy; {new Date().getFullYear()} Department of Agriculture, Fisheries
					and Forestry
				</Text>
			</Footer>
		</Box>
	</Flex>
);
