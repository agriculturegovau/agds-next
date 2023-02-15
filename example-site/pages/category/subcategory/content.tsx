import { DocumentTitle } from '../../../components/DocumentTitle';
import { AppLayout } from '../../../components/AppLayout';
import { Content } from '../../../components/templates/Content';

export default function ContentPage() {
	return (
		<>
			<DocumentTitle title="Content page example" />
			<AppLayout template={{ name: 'Content', slug: 'content' }}>
				<Content />
			</AppLayout>
		</>
	);
}
