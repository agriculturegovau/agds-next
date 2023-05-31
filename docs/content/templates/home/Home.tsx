import { ButtonGroup, ButtonLink } from '@ag.ds-next/react/button';
import { CallToActionLink } from '@ag.ds-next/react/call-to-action';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Box } from '@ag.ds-next/react/box';
import { Stack } from '@ag.ds-next/react/stack';
import { SkipLinks } from '@ag.ds-next/react/skip-link';
import { Columns } from '@ag.ds-next/react/columns';
import { SectionContent } from '@ag.ds-next/react/content';
import { H2, H3, Heading } from '@ag.ds-next/react/heading';
import {
	HeroBanner,
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
} from '@ag.ds-next/react/hero-banner';
import { Text } from '@ag.ds-next/react/text';
// Supporting
import { SiteLayout } from '../__shared/SiteLayout';

const placeholderBanner = 'placeholder/hero-banner.jpeg';
const placeholderImage = 'placeholder/600x260.png';

export function Home() {
	return (
		<>
			<SkipLinks
				links={[
					{ href: '#main-content', label: 'Skip to main content' },
					{ href: '#main-nav', label: 'Skip to main navigation' },
				]}
			/>
			<SiteLayout>
				<Box
					flexGrow={1}
					as="main"
					id="main-content"
					tabIndex={-1}
					css={{ '&:focus': { outline: 'none' } }}
				>
					<HeroBanner
						image={<img src={placeholderBanner} role="presentation" alt="" />}
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
							<ButtonLink href="#">Primary action</ButtonLink>
							<ButtonLink href="#" variant="secondary">
								Secondary action
							</ButtonLink>
							<ButtonLink href="#" variant="tertiary">
								Tertiary action
							</ButtonLink>
						</ButtonGroup>
					</HeroBanner>

					<SectionContent>
						<Stack gap={1.5}>
							<H2>Content heading (H2)</H2>
							<Columns as="ul" cols={{ xs: 1, sm: 2, md: 4 }}>
								<Stack as="li" gap={1.5}>
									<H3>Content heading (H3)</H3>
									<Text as="p">
										Short descriptive paragraph designed to fit in this space -
										sm/default (P). Short descriptive paragraph designed to fit
										in this space - sm/default (P).
									</Text>
								</Stack>
								<Stack as="li" gap={1.5}>
									<H3>Content heading (H3)</H3>
									<Text as="p">
										Short descriptive paragraph designed to fit in this space -
										sm/default (P). Short descriptive paragraph designed to fit
										in this space - sm/default (P).
									</Text>
								</Stack>
								<Stack as="li" gap={1.5}>
									<H3>Content heading (H3)</H3>
									<Text as="p">
										Short descriptive paragraph designed to fit in this space -
										sm/default (P). Short descriptive paragraph designed to fit
										in this space - sm/default (P).
									</Text>
								</Stack>
								<Stack as="li" gap={1.5}>
									<H3>Content heading (H3)</H3>
									<Text as="p">
										Short descriptive paragraph designed to fit in this space -
										sm/default (P). Short descriptive paragraph designed to fit
										in this space - sm/default (P).
									</Text>
								</Stack>
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
										sm/default (P). Short descriptive paragraph designed to fit
										in this space - sm/default (P).
									</Text>
								</Stack>
								<CallToActionLink href="#">Read more</CallToActionLink>
							</Stack>
							<img
								src={placeholderImage}
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
											src={placeholderImage}
											role="presentation"
											alt=""
											css={{ width: '100%' }}
										/>
										<CardInner>
											<Stack gap={1}>
												<Heading type="h3">
													<CardLink href="#">Title of article (H3)</CardLink>
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
							<CallToActionLink href="#">See more articles</CallToActionLink>
						</Stack>
					</SectionContent>
				</Box>
			</SiteLayout>
		</>
	);
}
