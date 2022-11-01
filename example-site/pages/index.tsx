import { Stack } from '@ag.ds-next/box';
import { ButtonGroup, ButtonLink } from '@ag.ds-next/button';
import { SectionContent } from '@ag.ds-next/content';
import { Columns } from '@ag.ds-next/columns';
import { H2, H3, Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { CallToActionLink } from '@ag.ds-next/call-to-action';
import {
	HeroBanner,
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
} from '@ag.ds-next/hero-banner';
import { Card, CardInner, CardLink } from '@ag.ds-next/card';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';

export default function HomePage() {
	return (
		<>
			<DocumentTitle title="Home" />
			<AppLayout template={{ name: 'Home', slug: 'home' }}>
				<HeroBanner
					image={
						<img
							src="/agds-next/example-site/placeholder/hero-banner.jpeg"
							role="presentation"
							alt=""
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
						<ButtonLink href="/sign-in-form">Create account</ButtonLink>
						<ButtonLink href="/sign-in-form" variant="secondary">
							Sign in
						</ButtonLink>
					</ButtonGroup>
				</HeroBanner>

				<SectionContent>
					<Stack gap={1.5}>
						<H2>Content heading (H2)</H2>
						<Columns as="ul" cols={{ xs: 1, sm: 2, md: 4 }}>
							{Array.from(Array(4).keys()).map((idx) => (
								<Stack key={idx} as="li" gap={1.5}>
									<H3>Content heading (H3)</H3>
									<Text as="p">
										Short descriptive paragraph designed to fit in this space -
										sm/default (P). Short descriptive paragraph designed to fit
										in this space - sm/default (P).
									</Text>
								</Stack>
							))}
						</Columns>
					</Stack>
				</SectionContent>

				<SectionContent background="bodyAlt">
					<Columns cols={{ xs: 1, md: 2 }}>
						<Stack gap={2}>
							<Stack gap={1.5}>
								<H2>Highlighted content row heading (H2)</H2>
								<Text as="p">
									Short descriptive paragraph designed to fit in this space -
									sm/default (P). Short descriptive paragraph designed to fit in
									this space - sm/default (P).
								</Text>
							</Stack>
							<CallToActionLink href="/category/subcategory/content">
								Read more
							</CallToActionLink>
						</Stack>
						<img
							src="/agds-next/example-site/placeholder/hero-banner.jpeg"
							role="presentation"
							alt=""
							css={{ display: 'block', maxWidth: '100%' }}
						/>
					</Columns>
				</SectionContent>

				<SectionContent>
					<Stack gap={1.5}>
						<H2>Articles heading (H2)</H2>
						<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3 }}>
							{Array.from(Array(3).keys()).map((idx) => (
								<Card as="li" key={idx} clickable shadow>
									<img
										src="/agds-next/example-site/placeholder/hero-banner.jpeg"
										role="presentation"
										alt=""
										css={{ width: '100%' }}
									/>
									<CardInner>
										<Stack gap={1}>
											<Heading type="h3">
												<CardLink href="/category/subcategory/content">
													Title of article (H3)
												</CardLink>
											</Heading>
											<Text as="p">
												Short descriptive paragraph designed to fit in this
												space
											</Text>
										</Stack>
									</CardInner>
								</Card>
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
}
