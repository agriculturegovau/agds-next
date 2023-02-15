import { AppLayout } from '../../../../components/AppLayout';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { MultiPageFormIntro } from '../../../../components/templates/MultiPageFormIntro';

export default function FormMultiPageHomePage() {
	return (
		<>
			<DocumentTitle title="Multi-page form example" />
			<AppLayout
				template={{ name: 'Multi-page form', slug: 'multi-page-form' }}
			>
				<MultiPageFormIntro />
			</AppLayout>
		</>
	);
}
