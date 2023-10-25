import { SectionContent } from '@ag.ds-next/react/content';
import {
	HeroSubcategoryBanner,
	HeroSubcategoryBannerTitle,
} from '@ag.ds-next/react/hero-banner';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { SiteLayout } from '../../components/Layout/SiteLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { NoiDocumentUpload } from '../../components/NoiDocumentUpload';

export default function UploadPage() {
	return (
		<>
			<DocumentTitle title="Upload files" />
			<SiteLayout>
				<HeroSubcategoryBanner>
					<Breadcrumbs
						links={[
							{ href: '/', label: 'Home' },
							{ href: '/services', label: 'Services' },
							{ label: 'Upload files' },
						]}
					/>
					<HeroSubcategoryBannerTitle>Upload files</HeroSubcategoryBannerTitle>
				</HeroSubcategoryBanner>
				<SectionContent>
					<NoiDocumentUpload />
				</SectionContent>
			</SiteLayout>
		</>
	);
}
