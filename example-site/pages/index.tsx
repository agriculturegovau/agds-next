import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { HomePage } from '../components/templates/HomePage';

export default function Home() {
	return (
		<>
			<DocumentTitle title="Home" />
			<AppLayout template={{ name: 'Home', slug: 'home' }}>
				<HomePage />
			</AppLayout>
		</>
	);
}
