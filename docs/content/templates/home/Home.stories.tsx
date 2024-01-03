import { SiteLayout } from '../__shared/SiteLayout';
import { Home as HomeComponent } from './Home';

const meta = {
	title: 'Templates/Home page',
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

export const Home = {
	name: 'Website layout',
	render: () => (
		<SiteLayout>
			<HomeComponent />
		</SiteLayout>
	),
};
