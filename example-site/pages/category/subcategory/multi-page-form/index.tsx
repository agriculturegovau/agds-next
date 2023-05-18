import { SiteLayout } from '../../../../components/SiteLayout';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { MultiPageFormIntro } from '../../../../components/templates/MultiPageFormIntro';

export default function FormMultiPageHomePage() {
	return (
		<>
			<DocumentTitle title="Multi-page form example" />
			<SiteLayout
				template={{ name: 'Multi-page form', slug: 'multi-page-form' }}
			>
				<MultiPageFormIntro />
			</SiteLayout>
		</>
	);
}
