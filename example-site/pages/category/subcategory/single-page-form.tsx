import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { SinglePageFormPage } from '../../../components/templates/SinglePageForm';

export default function SinglePageForm() {
	return (
		<>
			<DocumentTitle title="Single-page form example" />
			<AppLayout
				template={{ name: 'Single-page form', slug: 'single-page-form' }}
			>
				<SinglePageFormPage />
			</AppLayout>
		</>
	);
}
