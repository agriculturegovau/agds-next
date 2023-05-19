import { SiteLayout } from '../../../.storybook/components/SiteLayout';
import { Category as CategoryComponent } from './Category';

export default {
	title: 'Templates/Category page',
	parameters: {
		layout: 'fullscreen',
	},
};

export function Category() {
	return (
		<SiteLayout>
			<CategoryComponent />
		</SiteLayout>
	);
}
