import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { Category as CategoryComponent } from './Category';

export default {
	title: 'Templates/Category',
};

export function Category() {
	return (
		<PageTemplate>
			<CategoryComponent />
		</PageTemplate>
	);
}
