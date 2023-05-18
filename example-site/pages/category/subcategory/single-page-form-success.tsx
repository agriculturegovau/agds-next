import { SiteLayout } from '../../../components/SiteLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { SinglePageFormSuccess } from '../../../components/templates/SinglePageFormSuccess';

export default function SinglePageFormSuccessPage() {
	return (
		<>
			<DocumentTitle title="Success | Single-page form example" />
			<SiteLayout
				template={{ name: 'Single-page form', slug: 'single-page-form' }}
			>
				<SinglePageFormSuccess />
			</SiteLayout>
		</>
	);
}
