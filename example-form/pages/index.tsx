import {
	Stack,
	SectionContent,
	H2,
	HeroBanner,
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
	CallToActionLink,
} from '@ag.ds-next/react';
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
