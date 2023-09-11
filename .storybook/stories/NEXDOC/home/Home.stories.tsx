import { SiteLayout } from '../__shared/SiteLayout';
import { Home as HomeComponent } from './Home';

export default {
	title: 'NEXDOC/Home page',
	parameters: {
		layout: 'fullscreen',
	},
};

export const Home = {
	name: 'Website layout',
	render: () => (
		<SiteLayout>
			<HomeComponent />
		</SiteLayout>
	),
};
