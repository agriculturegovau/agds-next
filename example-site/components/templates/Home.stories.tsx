import { SiteLayout } from '../../../.storybook/components/SiteLayout';
import { Home as HomeComponent } from './Home';

export default {
	title: 'Templates/Home page',
	parameters: {
		layout: 'fullscreen',
	},
};

export function Home() {
	return (
		<SiteLayout>
			<HomeComponent />
		</SiteLayout>
	);
}
