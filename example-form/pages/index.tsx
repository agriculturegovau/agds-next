import { Stack } from '@ag.ds-next/react/stack';
import { SectionContent } from '@ag.ds-next/react/content';
import { H2 } from '@ag.ds-next/react/heading';
import {
	HeroBanner,
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
} from '@ag.ds-next/react/hero-banner';
import { CallToActionLink } from '@ag.ds-next/react/call-to-action';
import { SiteLayout } from '../components/SiteLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { ServicesRecentlyViewedCardList } from '../components/ServicesRecentlyViewedCardList';

export default function HomePage() {
	return (
		<>
			<DocumentTitle title="Home" />
			<SiteLayout>
				<HeroBanner>
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
			</SiteLayout>
		</>
	);
}
