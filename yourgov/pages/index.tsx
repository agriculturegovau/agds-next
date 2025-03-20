import { Stack } from '@ag.ds-next/react/stack';
import { Content, SectionContent } from '@ag.ds-next/react/content';
import { H2, H3 } from '@ag.ds-next/react/heading';
import {
	HeroBanner,
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
} from '@ag.ds-next/react/hero-banner';
import { ButtonGroup, ButtonLink } from '@ag.ds-next/react/button';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Text } from '@ag.ds-next/react/text';
import { Columns } from '@ag.ds-next/react/columns';
import { CallToActionLink } from '@ag.ds-next/react/call-to-action';
import { Box } from '@ag.ds-next/react/box';
import { SiteLayout } from '../components/Layout/SiteLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { useWithBasePath } from '../lib/useWithBasePath';

export default function Page() {
	const withBasePath = useWithBasePath();
	return (
		<>
			<DocumentTitle title="Home" />
			<SiteLayout>
				<HeroBanner
					background="bodyAlt"
					image={
						<img
							alt=""
							css={{ objectPosition: 'right !important' }}
							// @ts-expect-error Property 'fetchpriority' does not exist on type, however, React does not recognize the `fetchPriority` prop on a DOM element… spell it as lowercase `fetchpriority` instead
							fetchpriority="high"
							src={withBasePath('/hero-banner.jpg')}
							width="100%"
						/>
					}
				>
					<HeroBannerTitleContainer>
						<HeroBannerTitle>
							Find and access government services
						</HeroBannerTitle>
						<HeroBannerSubtitle>
							Manage all your government services in one secure and easy to
							access place online.
						</HeroBannerSubtitle>
						<ButtonGroup>
							<ButtonLink href="/not-found" variant="primary">
								Create an account
							</ButtonLink>
							<ButtonLink href="/sign-in" variant="secondary">
								Sign in
							</ButtonLink>
						</ButtonGroup>
					</HeroBannerTitleContainer>
				</HeroBanner>

				<SectionContent>
					<Stack gap={1.5}>
						<H2>Why create an account?</H2>
						<Columns as="ul" cols={{ xs: 1, sm: 2, md: 4 }}>
							<Stack as="li" gap={1}>
								<H3>Secure and easy way to share your details</H3>
								<Text>
									Use your yourGov profile to easily provide your personal
									details when you access any government service.
								</Text>
							</Stack>
							<Stack as="li" gap={1}>
								<H3>Find and manage business approvals</H3>
								<Text>
									Search, apply and manage business licences and permits online
									in one place.
								</Text>
							</Stack>
							<Stack as="li" gap={1}>
								<H3>Manage benefits and payments</H3>
								<Text>
									Find what you are eligible for and then claim and manage your
									payments online.
								</Text>
							</Stack>
							<Stack as="li" gap={1}>
								<H3>Track the progress of applications</H3>
								<Text>
									Receive real-time alerts for your government approvals,
									applications and transactions.
								</Text>
							</Stack>
						</Columns>
					</Stack>
				</SectionContent>

				<Content as="section" background="bodyAlt">
					<Columns cols={{ xs: 1, md: 2 }} gap={3}>
						<Stack
							alignItems="flex-start"
							gap={1.5}
							paddingBottom={{ xs: 0, md: 4 }}
							paddingTop={{ xs: 3, md: 4 }}
						>
							<H2>Intending to make, serve or sell alcohol?</H2>
							<Text as="p">
								Get tailored step-by-step guidance on what approvals your
								business will need to sell and or serve alcohol. Just answer a
								few quick questions about your business.
							</Text>
							<CallToActionLink href="/not-found">
								Find liquor licence tool
							</CallToActionLink>
						</Stack>

						<Box
							alignSelf="center"
							alt=""
							as="img"
							justifySelf="center"
							maxWidth="100%"
							paddingBottom={{ xs: 0, sm: 3, md: 4 }}
							paddingTop={{ md: 4 }}
							src={withBasePath('/home-section-image.jpg')}
						/>
					</Columns>
				</Content>

				<SectionContent>
					<Columns as="ul" cols={{ xs: 1, sm: 2 }}>
						<Card as="li" clickable shadow>
							<CardInner>
								<Stack gap={1}>
									<H3>
										<CardLink href="/services">Services</CardLink>
									</H3>
									<Text as="p">
										An easier and faster way to connect with government services
										for your business.
									</Text>
								</Stack>
							</CardInner>
						</Card>
						<Card as="li" clickable shadow>
							<CardInner>
								<Stack gap={1}>
									<H3>
										<CardLink href="/not-found">Help</CardLink>
									</H3>
									<Text as="p">
										Information and support to help you use yourGov.
									</Text>
								</Stack>
							</CardInner>
						</Card>
					</Columns>
				</SectionContent>
			</SiteLayout>
		</>
	);
}
