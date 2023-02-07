import { mapResponsiveProp, mq } from '@ag.ds-next/react/core';
import { Logo } from '@ag.ds-next/react/ag-branding';
import { Box } from '@ag.ds-next/react/box';
import { PageContent } from '@ag.ds-next/react/content';
import { tokens } from '@ag.ds-next/react/core';
import { Footer, FooterDivider } from '@ag.ds-next/react/footer';
import { Header } from '@ag.ds-next/react/header';
import { LinkList } from '@ag.ds-next/react/link-list';
import { MainNav } from '@ag.ds-next/react/main-nav';
import { Text } from '@ag.ds-next/react/text';

export default {
	title: 'Examples/Vertical Navigation',
};

export const VerticalNavigation = () => {
	return (
		<Box>
			<Box palette="dark">
				<Header
					heading="Exports Service"
					subline="Supporting Australian agricultural exports"
					size="sm"
					background="bodyAlt"
				/>
			</Box>

			<Box
				css={mq({
					display: 'grid',
					gridTemplateColumns: mapResponsiveProp({
						xs: '1fr',
						lg: '340px 1fr',
					}),
				})}
			>
				<MainNav
					background="bodyAlt"
					vertical
					items={[
						{ href: '#dashboard', label: 'Dashboard' },
						{ href: '#', label: 'Establishments' },
						{ href: '#', label: 'Data and Insights' },
						{ href: '#', label: 'Compliance' },
					]}
					activePath="#dashboard"
					secondaryItems={[{ href: '#', label: 'Help' }]}
				/>

				<Box>
					<PageContent>
						<Box background="shade" padding={1}>
							<Text>Placeholder text</Text>
						</Box>
					</PageContent>

					<Footer>
						<nav aria-label="footer">
							<LinkList
								horizontal
								links={[
									{ href: '#', label: 'Home' },
									{ href: '#', label: 'Terms and conditions' },
									{ href: '#', label: 'Privacy policy' },
									{ href: '#', label: 'A really long link title' },
								]}
							/>
						</nav>
						<FooterDivider />
						<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
							We acknowledge the traditional owners of country throughout
							Australia and recognise their continuing connection to land,
							waters and culture. We pay our respects to their Elders past,
							present and emerging.
						</Text>
						<Box
							css={{
								width: '15rem',
							}}
						>
							<Logo />
						</Box>
						<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
							&copy; 2022 Department of Agriculture, Fisheries and Forestry
						</Text>
					</Footer>
				</Box>
			</Box>
		</Box>
	);
};
