import {
	HeroBanner,
	HeroBannerSubtitle,
	HeroBannerTitle,
	HeroBannerTitleContainer,
} from '@ag.ds-next/hero-banner';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';

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
			</AppLayout>
		</>
	);
}
