import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { FormExampleSinglePage } from '../../../components/templates/FormExampleSinglePage';

export default function SinglePageFormPage() {
	return (
		<>
			<DocumentTitle title="Single-page form example" />
			<AppLayout
				template={{ name: 'Single-page form', slug: 'single-page-form' }}
			>
				<FormExampleSinglePage />
			</AppLayout>
		</>
	);
}
