import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { Category as CategoryContent } from './Category';

export default {
	title: 'Templates/Category',
};

export function Category() {
	return (
		<PageTemplate>
			<CategoryContent />
		</PageTemplate>
	);
}
