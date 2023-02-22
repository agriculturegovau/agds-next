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
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableWrapper,
} from '@ag.ds-next/react/table';

export default {
	title: 'Examples/Vertical Navigation',
	parameters: {
		layout: 'fullscreen',
	},
};

const Content = () => {
	return (
		<Box>
			<PageContent>
				<TableWrapper>
					<Table>
						<TableCaption>
							Population of Australian states and territories, December 2015
						</TableCaption>
						<TableHead>
							<tr>
								<TableHeader width="50%" scope="col">
									Location
								</TableHeader>
								<TableHeader textAlign="right" scope="col">
									Population
								</TableHeader>
								<TableHeader textAlign="right" scope="col">
									Change over previous year %
								</TableHeader>
								<TableHeader textAlign="right" scope="col">
									Change over previous decade %
								</TableHeader>
							</tr>
						</TableHead>
						<TableBody>
							<tr>
								<TableCell>New South Wales</TableCell>
								<TableCell textAlign="right">7,670,700</TableCell>
								<TableCell textAlign="right">3.1%</TableCell>
								<TableCell textAlign="right">12.9%</TableCell>
							</tr>
							<tr>
								<TableCell>Victoria</TableCell>
								<TableCell textAlign="right">5,996,400</TableCell>
								<TableCell textAlign="right">2.5%</TableCell>
								<TableCell textAlign="right">9.3%</TableCell>
							</tr>
							<tr>
								<TableCell>Queensland</TableCell>
								<TableCell textAlign="right">4,808,800</TableCell>
								<TableCell textAlign="right">1.7%</TableCell>
								<TableCell textAlign="right">13.3%</TableCell>
							</tr>
							<tr>
								<TableCell>Western Australia</TableCell>
								<TableCell textAlign="right">2,603,900</TableCell>
								<TableCell textAlign="right">2.3%</TableCell>
								<TableCell textAlign="right">11.6%</TableCell>
							</tr>
							<tr>
								<TableCell>South Australia</TableCell>
								<TableCell textAlign="right">1,702,800</TableCell>
								<TableCell textAlign="right">2.0%</TableCell>
								<TableCell textAlign="right">6.8%</TableCell>
							</tr>
							<tr>
								<TableCell>Tasmania</TableCell>
								<TableCell textAlign="right">517,400</TableCell>
								<TableCell textAlign="right">4%</TableCell>
								<TableCell textAlign="right">5.3%</TableCell>
							</tr>
							<tr>
								<TableCell>Northern Territory</TableCell>
								<TableCell textAlign="right">244,400</TableCell>
								<TableCell textAlign="right">1.2%</TableCell>
								<TableCell textAlign="right">4.5%</TableCell>
							</tr>
							<tr>
								<TableCell>Australian Capital Territory</TableCell>
								<TableCell textAlign="right">393,000</TableCell>
								<TableCell textAlign="right">2.4%</TableCell>
								<TableCell textAlign="right">9.6%</TableCell>
							</tr>
						</TableBody>
					</Table>
				</TableWrapper>
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
					We acknowledge the traditional owners of country throughout Australia
					and recognise their continuing connection to land, waters and culture.
					We pay our respects to their Elders past, present and emerging.
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
	);
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
						xs: '5em 1fr',
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

				<Content />
			</Box>
		</Box>
	);
};
