import { Stack } from '@ag.ds-next/react/box';
import { SectionContent } from '@ag.ds-next/react/content';
import { H2 } from '@ag.ds-next/react/heading';
import {
	HeroBanner,
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
} from '@ag.ds-next/react/hero-banner';
import { CallToActionLink } from '@ag.ds-next/react/call-to-action';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { ServicesRecentlyViewedCardList } from '../components/ServicesRecentlyViewedCardList';

export default function HomePage() {
	return (
		<>
			<DocumentTitle title="Home" />
			<AppLayout>
				<HeroBanner background="bodyAlt">
					<HeroBannerTitleContainer>
						<HeroBannerTitle>My Government services account</HeroBannerTitle>
						<HeroBannerSubtitle>
							Manage all your government services in one secure and easy to
							access place online.
						</HeroBannerSubtitle>
					</HeroBannerTitleContainer>
				</HeroBanner>
				<SectionContent>
					<Stack gap={1.5}>
						<H2>Frequently used services</H2>
						<ServicesRecentlyViewedCardList />
						<CallToActionLink href="/services">
							See more services
						</CallToActionLink>
					</Stack>
				</SectionContent>
			</AppLayout>
		</>
	);
}
