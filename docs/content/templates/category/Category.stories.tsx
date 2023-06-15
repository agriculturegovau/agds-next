import { AppLayout } from '../__shared/AppLayout';
import { SiteLayout } from '../__shared/SiteLayout';
import { Category as CategoryPage } from './Category';

export default {
	title: 'Templates/Category page',
	parameters: {
		layout: 'fullscreen',
	},
};

export const InSiteLayout = {
	name: 'Website layout',
	render: () => (
		<SiteLayout>
			<CategoryPage />
		</SiteLayout>
	),
};

export const InAppLayout = {
	name: 'Application layout',
	render: () => (
		<AppLayout>
			<CategoryPage />
		</AppLayout>
	),
};
