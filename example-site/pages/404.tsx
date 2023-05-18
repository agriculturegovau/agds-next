import { SiteLayout } from '../components/SiteLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { NotFound } from '../components/templates/NotFound';

export default function NotFoundPage() {
	return (
		<>
			<DocumentTitle title="Error 404" />
			<SiteLayout template={{ name: '404', slug: '404' }}>
				<NotFound />
			</SiteLayout>
		</>
	);
}
