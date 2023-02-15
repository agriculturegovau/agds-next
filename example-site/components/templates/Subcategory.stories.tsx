import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { Subcategory as SubcategoryContent } from './Subcategory';

export default {
	title: 'Templates/Subcategory',
};

export function Subcategory() {
	return (
		<PageTemplate>
			<SubcategoryContent />
		</PageTemplate>
	);
}
