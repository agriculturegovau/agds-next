import { AppLayout } from '../__shared/AppLayout';
import { SiteLayout } from '../__shared/SiteLayout';
import { Subcategory as SubcategoryContent } from './Subcategory';

export default {
	title: 'Templates/Subcategory page',
	parameters: {
		layout: 'fullscreen',
	},
};

export const Subcategory = {
	name: 'Website layout',
	render: () => (
		<SiteLayout>
			<SubcategoryContent />
		</SiteLayout>
	),
};

export const InAppSubcategory = {
	name: 'Application layout',
	render: () => (
		<AppLayout>
			<SubcategoryContent />
		</AppLayout>
	),
};
