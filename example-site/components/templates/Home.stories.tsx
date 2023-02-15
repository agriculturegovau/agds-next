import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { Home as HomeComponent } from './Home';

export default {
	title: 'Templates/Home',
	parameters: {
		layout: 'fullscreen',
	},
};

export function Home() {
	return (
		<PageTemplate>
			<HomeComponent />
		</PageTemplate>
	);
}
