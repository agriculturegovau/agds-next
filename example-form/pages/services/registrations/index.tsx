import { SectionContent } from '@ag.ds-next/content';
import {
	HeroSubcategoryBanner,
	HeroSubcategoryBannerTitle,
} from '@ag.ds-next/hero-banner';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { RegistrationsCardList } from '../../../components/RegistrationsCardList';

export default function RegistrationsPage() {
	return (
		<>
			<DocumentTitle title="Registrations" />
			<AppLayout>
				<HeroSubcategoryBanner>
					<Breadcrumbs
						links={[
							{ href: '/', label: 'Home' },
							{ href: '/services', label: 'Services' },
							{ label: 'Registrations' },
						]}
					/>
					<HeroSubcategoryBannerTitle>Registrations</HeroSubcategoryBannerTitle>
				</HeroSubcategoryBanner>
				<SectionContent>
					<RegistrationsCardList />
				</SectionContent>
			</AppLayout>
		</>
	);
}
