import { SectionContent } from '@ag.ds-next/react/content';
import {
	HeroCategoryBanner,
	HeroCategoryBannerTitle,
	HeroCategoryBannerSubtitle,
} from '@ag.ds-next/react/hero-banner';
import { SiteLayout } from '../../components/SiteLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { ServicesCardList } from '../../components/ServicesCardList';

export default function ServicesPage() {
	return (
		<>
			<DocumentTitle title="Services" />
			<SiteLayout>
				<HeroCategoryBanner>
					<HeroCategoryBannerTitle>Services</HeroCategoryBannerTitle>
					<HeroCategoryBannerSubtitle>
						An easier and faster way to connect with government services for
						your business
					</HeroCategoryBannerSubtitle>
				</HeroCategoryBanner>
				<SectionContent>
					<ServicesCardList />
				</SectionContent>
			</SiteLayout>
		</>
	);
}
