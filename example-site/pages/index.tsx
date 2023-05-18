import { SiteLayout } from '../components/SiteLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { Home } from '../components/templates/Home';

export default function HomePage() {
	return (
		<>
			<DocumentTitle title="Home" />
			<SiteLayout template={{ name: 'Home', slug: 'home' }}>
				<Home />
			</SiteLayout>
		</>
	);
}
