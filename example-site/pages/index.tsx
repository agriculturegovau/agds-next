import type { NextPage } from 'next';
import { Flex, Stack } from '@ag.ds-next/box';
import { Button, ButtonGroup } from '@ag.ds-next/button';
import { Content } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { H2, H3 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { CallToActionLink } from '@ag.ds-next/call-to-action';
import { HeroBanner } from '@ag.ds-next/hero-banner';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { ArticleCard } from '../components/ArticleCard';

const Home: NextPage = () => {
	return (
		<>
			<DocumentTitle title="Home" />
			<AppLayout template={{ name: 'Home', slug: 'home' }}>
				<HeroBanner
					image={
						<img
							alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
							src="/agds-next/example-site/placeholder/hero-banner.png"
						/>
					}
					subTitle="Short hero banner sentence"
					title="Website hero banner title (H1)"
					variant="lightAlt"
				>
					<ButtonGroup>
						<Button>Create account</Button>
						<Button variant="secondary">Sign in</Button>
					</ButtonGroup>
				</HeroBanner>

				<Content spacing="lg">
					<Stack gap={2}>
						<H2>Content heading (h2)</H2>
						<Columns gap={3} as="ul">
							{Array.from(Array(4).keys()).map((idx) => (
								<Column columnSpan={{ xs: 12, sm: 6, md: 3 }} key={idx} as="li">
									<Stack gap={1}>
										<H3>Content heading (h3)</H3>
										<Text>
											Short descriptive paragraph designed to fit in this space
											- sm/default (P). Short descriptive paragraph designed to
											fit in this space - sm/default (P)
										</Text>
									</Stack>
								</Column>
							))}
						</Columns>
					</Stack>
				</Content>
				<Content spacing="lg" background="shade">
					<Columns gap={3}>
						<Column columnSpan={{ xs: 12, md: 6 }}>
							<Stack gap={2} alignItems="flex-start">
								<Stack gap={1}>
									<H2>Highlighted content row heading (h2)</H2>
									<Text fontSize="sm">
										Short descriptive paragraph designed to fit in this space -
										sm/default (P). Short descriptive paragraph designed to fit
										in this space - sm/default (P)
									</Text>
								</Stack>
								<CallToActionLink>Read more</CallToActionLink>
							</Stack>
						</Column>
						<Column columnSpan={{ xs: 12, md: 6 }}>
							<img
								src="/agds-next/example-site/placeholder/hero-banner.png"
								alt="Place holder image"
								css={{ width: '100%' }}
							/>
						</Column>
					</Columns>
				</Content>
				<Content spacing="lg">
					<Stack gap={2}>
						<H2>Articles heading (h2)</H2>
						<Columns gap={1} as="ul">
							{Array.from(Array(3).keys()).map((idx) => (
								<Column key={idx} as="li" columnSpan={{ xs: 12, sm: 6, lg: 4 }}>
									<ArticleCard />
								</Column>
							))}
						</Columns>
						<CallToActionLink href="#">See more articles</CallToActionLink>
					</Stack>
				</Content>
			</AppLayout>
		</>
	);
};

export default Home;
