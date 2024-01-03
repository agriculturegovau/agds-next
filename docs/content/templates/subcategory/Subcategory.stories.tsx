import { AppLayout } from '../__shared/AppLayout';
import { SiteLayout } from '../__shared/SiteLayout';
import { Subcategory as SubcategoryContent } from './Subcategory';

const meta = {
	title: 'Templates/Subcategory page',
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

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
