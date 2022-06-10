import { Stack } from '@ag.ds-next/box';
import { useLinkComponent } from '@ag.ds-next/core';
import { ButtonGroup, Button } from '@ag.ds-next/button';
import { SectionContent } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { H2, H3 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { CallToAction } from '@ag.ds-next/call-to-action';
import {
	HeroBanner,
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
} from '@ag.ds-next/hero-banner';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { ArticleCard } from '../components/ArticleCard';

export default function HomePage() {
	const Link = useLinkComponent();
	return (
		<>
			<DocumentTitle title="Home" />
			<AppLayout template={{ name: 'Home', slug: 'home' }}>
				<HeroBanner
					variant="lightAlt"
					image={
						<img
							alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
							src="/agds-next/example-site/placeholder/hero-banner.jpeg"
						/>
					}
				>
					<HeroBannerTitleContainer>
						<HeroBannerTitle>
							Website hero banner title - xxxl/display (H1)
						</HeroBannerTitle>
						<HeroBannerSubtitle>
							Short sentence providing more detail about the hero banner and
							actions - md/default (P)
						</HeroBannerSubtitle>
					</HeroBannerTitleContainer>
					<ButtonGroup>
						<Button as={Link} href="/sign-in-form">
							Create account
						</Button>
						<Button as={Link} href="/sign-in-form" variant="secondary">
							Sign in
						</Button>
					</ButtonGroup>
				</HeroBanner>

				<SectionContent>
					<Stack gap={1.5}>
						<H2>Content heading (H2)</H2>
						<Columns as="ul">
							{Array.from(Array(4).keys()).map((idx) => (
								<Column key={idx} as="li" columnSpan={{ xs: 12, sm: 6, md: 3 }}>
									<Stack gap={1.5}>
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
							<Stack gap={2}>
								<Stack gap={1.5}>
									<H2>Highlighted content row heading (H2)</H2>
									<Text as="p">
										Short descriptive paragraph designed to fit in this space -
										sm/default (P). Short descriptive paragraph designed to fit
										in this space - sm/default (P).
									</Text>
								</Stack>
								<CallToAction href="/category/subcategory/content">
									Read more
								</CallToAction>
							</Stack>
						</Column>
						<Column columnSpan={{ xs: 12, md: 6 }}>
							<img
								src="/agds-next/example-site/placeholder/hero-banner.jpeg"
								alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
								css={{ display: 'block', maxWidth: '100%' }}
							/>
						</Column>
					</Columns>
				</SectionContent>

				<SectionContent>
					<Stack gap={1.5}>
						<H2>Articles heading (H2)</H2>
						<Columns as="ul">
							{Array.from(Array(3).keys()).map((idx) => (
								<Column key={idx} as="li" columnSpan={{ xs: 12, sm: 6, lg: 4 }}>
									<ArticleCard />
								</Column>
							))}
						</Columns>
						<CallToAction href="/category">See more articles</CallToAction>
					</Stack>
				</SectionContent>
			</AppLayout>
		</>
	);
}
