import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { Category as CategoryComponent } from './Category';

export default {
	title: 'Templates/Category',
	parameters: {
		layout: 'fullscreen',
	},
};

export function Category() {
	return (
		<PageTemplate>
			<CategoryComponent />
		</PageTemplate>
	);
}
