import { DocumentTitle } from '../../../components/DocumentTitle';
import { SiteLayout } from '../../../components/SiteLayout';
import { Content } from '../../../components/templates/Content';

export default function ContentPage() {
	return (
		<>
			<DocumentTitle title="Content page example" />
			<SiteLayout
				template={{ name: 'Content', slug: 'content' }}
				applyMainElement={false}
			>
				<Content />
			</SiteLayout>
		</>
	);
}
