import type { NextPage } from 'next';
import { Stack } from '@ag.ds-next/box';
import { Button, ButtonGroup, ButtonLink } from '@ag.ds-next/button';
import { SectionContent } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { H2, H3 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { CallToActionLink } from '@ag.ds-next/call-to-action';
import {
	HeroBanner,
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
} from '@ag.ds-next/hero-banner';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { ArticleCard } from '../components/ArticleCard';

const Home: NextPage = () => {
	return (
		<>
			<DocumentTitle title="Home" />
			<AppLayout template={{ name: 'Home', slug: 'home' }}>
				<HeroBanner
					variant="lightAlt"
					image={
						<img
							alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
							src="/agds-next/example-site/placeholder/hero-banner.png"
						/>
					}
				>
					<HeroBannerTitleContainer>
						<HeroBannerTitle>
							Website hero banner title - xxxl/display (H1)
						</HeroBannerTitle>
						<HeroBannerSubtitle>
							Short hero banner sentence - md/default (P)
						</HeroBannerSubtitle>
					</HeroBannerTitleContainer>
					<ButtonGroup>
						<ButtonLink href="/form-sign-in">Create account</ButtonLink>
						<ButtonLink href="/form-sign-in" variant="secondary">
							Sign in
						</ButtonLink>
					</ButtonGroup>
				</HeroBanner>

				<SectionContent>
					<Stack gap={2}>
						<H2>Content heading (H2)</H2>
						<Columns as="ul">
							{Array.from(Array(4).keys()).map((idx) => (
								<Column key={idx} as="li" columnSpan={{ xs: 12, sm: 6, md: 3 }}>
									<Stack gap={1}>
										<H3>Content heading (H3)</H3>
										<Text as="p">
											Short descriptive paragraph designed to fit in this space
											- sm/default (P). Short descriptive paragraph designed to
											fit in this space - sm/default (P).
										</Text>
									</Stack>
								</Column>
							))}
						</Columns>
					</Stack>
				</SectionContent>

				<SectionContent background="shade">
					<Columns>
						<Column columnSpan={{ xs: 12, md: 6 }}>
							<Stack gap={2} alignItems="flex-start">
								<Stack gap={1}>
									<H2>Highlighted content row heading (H2)</H2>
									<Text as="p">
										Short descriptive paragraph designed to fit in this space -
										sm/default (P). Short descriptive paragraph designed to fit
										in this space - sm/default (P).
									</Text>
								</Stack>
								<CallToActionLink href="/category/subcategory/content">
									Read more
								</CallToActionLink>
							</Stack>
						</Column>
						<Column columnSpan={{ xs: 12, md: 6 }}>
							<img
								src="/agds-next/example-site/placeholder/hero-banner.png"
								alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
								css={{ display: 'block', maxWidth: '100%' }}
							/>
						</Column>
					</Columns>
				</SectionContent>

				<SectionContent>
					<Stack alignItems="flex-start" gap={2}>
						<H2>Articles heading (H2)</H2>
						<Columns as="ul">
							{Array.from(Array(3).keys()).map((idx) => (
								<Column key={idx} as="li" columnSpan={{ xs: 12, sm: 6, lg: 4 }}>
									<ArticleCard />
								</Column>
							))}
						</Columns>
						<CallToActionLink href="/category">
							See more articles
						</CallToActionLink>
					</Stack>
				</SectionContent>
			</AppLayout>
		</>
	);
};

export default Home;
