import { SiteLayout } from '../../../.storybook/components/SiteLayout';
import { Subcategory as SubcategoryContent } from './Subcategory';

export default {
	title: 'Templates/Subcategory page',
	parameters: {
		layout: 'fullscreen',
	},
};

export function Subcategory() {
	return (
		<SiteLayout>
			<SubcategoryContent />
		</SiteLayout>
	);
}
