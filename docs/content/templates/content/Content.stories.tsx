import { SiteLayout } from '../__shared/SiteLayout';
import { Content } from './Content';
import { ContentWithSideNav } from './ContentWithSideNav';

export default {
	title: 'Templates/Content page',
	parameters: {
		layout: 'fullscreen',
	},
};

export function Basic() {
	return (
		<SiteLayout>
			<Content />
		</SiteLayout>
	);
}

export function WithSideNav() {
	return (
		<SiteLayout>
			<ContentWithSideNav />
		</SiteLayout>
	);
}
