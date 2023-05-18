import { SiteLayout } from '../../../../components/SiteLayout';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { MultiPageFormSuccess } from '../../../../components/templates/MultiPageFormSuccess';

export default function FormMultiPageFormPage() {
	return (
		<>
			<DocumentTitle title="Success | Multi-page form example" />
			<SiteLayout
				template={{ name: 'Multi-page form', slug: 'multi-page-form' }}
			>
				<MultiPageFormSuccess />
			</SiteLayout>
		</>
	);
}
