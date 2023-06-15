import { AppLayout } from '../__shared/AppLayout';
import { SiteLayout } from '../__shared/SiteLayout';
import { Content } from './Content';
import { ContentWithSideNav } from './ContentWithSideNav';

export default {
	title: 'Templates/Content page',
	parameters: {
		layout: 'fullscreen',
	},
};

export const WithSideNav = {
	name: 'With side navigation',
	render: () => (
		<SiteLayout>
			<ContentWithSideNav />
		</SiteLayout>
	),
};

export const WithoutSideNav = {
	name: 'Without side navigation',
	render: () => (
		<SiteLayout>
			<Content />
		</SiteLayout>
	),
};

export const InAppLayout = {
	name: 'Application layout',
	render: () => (
		<AppLayout>
			<Content />
		</AppLayout>
	),
};
