import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { Home } from '../components/templates/Home';

export default function HomePage() {
	return (
		<>
			<DocumentTitle title="Home" />
			<AppLayout template={{ name: 'Home', slug: 'home' }}>
				<Home />
			</AppLayout>
		</>
	);
}
