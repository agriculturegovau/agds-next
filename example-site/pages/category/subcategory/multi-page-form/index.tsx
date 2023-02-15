import { AppLayout } from '../../../../components/AppLayout';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { MultiPageFormHome } from '../../../../components/templates/MultiPageFormHome';

export default function FormMultiPageHomePage() {
	return (
		<>
			<DocumentTitle title="Multi-page form example" />
			<AppLayout
				template={{ name: 'Multi-page form', slug: 'multi-page-form' }}
			>
				<MultiPageFormHome />
			</AppLayout>
		</>
	);
}
