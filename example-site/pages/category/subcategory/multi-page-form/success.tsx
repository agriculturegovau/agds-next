import { AppLayout } from '../../../../components/AppLayout';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { MultiPageFormSuccess } from '../../../../components/templates/MultiPageFormSuccess';

export default function FormMultiPageFormPage() {
	return (
		<>
			<DocumentTitle title="Success | Multi-page form example" />
			<AppLayout
				template={{ name: 'Multi-page form', slug: 'multi-page-form' }}
			>
				<MultiPageFormSuccess />
			</AppLayout>
		</>
	);
}
