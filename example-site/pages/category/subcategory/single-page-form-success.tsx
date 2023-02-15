import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { SinglePageFormSuccess } from '../../../components/templates/SinglePageFormSuccess';

export default function SinglePageFormSuccessPage() {
	return (
		<>
			<DocumentTitle title="Success | Single-page form example" />
			<AppLayout
				template={{ name: 'Single-page form', slug: 'single-page-form' }}
			>
				<SinglePageFormSuccess />
			</AppLayout>
		</>
	);
}
