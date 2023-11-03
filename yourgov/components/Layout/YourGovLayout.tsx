import { PropsWithChildren, useMemo } from 'react';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { Stack } from '@ag.ds-next/react/stack';
import { Header } from '@ag.ds-next/react/header';
import { Core, tokens } from '@ag.ds-next/react/core';
import { MainNavBottomBar } from '@ag.ds-next/react/main-nav';
import { Box } from '@ag.ds-next/react/box';
import { Flex } from '@ag.ds-next/react/flex';
import { Footer } from '@ag.ds-next/react/footer';
import { Text } from '@ag.ds-next/react/text';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { LinkComponent } from '../LinkComponent';

export function YourGovLayout({ children }: PropsWithChildren<{}>) {
	const year = useMemo(() => new Date().getFullYear(), []);
	return (
		<Core linkComponent={LinkComponent}>
			<SkipLinks
				links={[{ href: '#main-content', label: 'Skip to main content' }]}
			/>
			<Flex flexDirection="column" fontFamily="body" minHeight="100vh">
				<Stack palette="dark">
					<Header
						background="bodyAlt"
						logo={<Logo />}
						heading="yourGov"
						subline="Access government services from one place"
					/>
					<MainNavBottomBar />
				</Stack>
				<Box
					as="main"
					id="main-content"
					tabIndex={-1}
					css={{ '&:focus': { outline: 'none' } }}
					flexGrow={1}
				>
					{children}
				</Box>
				<Box palette="dark">
					<Footer background="bodyAlt">
						<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
							We acknowledge the traditional owners of country throughout
							Australia and recognise their continuing connection to land,
							waters and culture. We pay our respects to their Elders past,
							present and emerging.
						</Text>
						<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
							&copy; {year} Department of Agriculture, Fisheries and Forestry
						</Text>
					</Footer>
				</Box>
			</Flex>
		</Core>
	);
}
