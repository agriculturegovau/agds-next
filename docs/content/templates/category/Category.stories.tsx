import { SiteLayout } from '../__shared/SiteLayout';
import { Category as CategoryPage } from './Category';

export default {
	title: 'Templates/Category page',
	parameters: {
		layout: 'fullscreen',
	},
};

export function Category() {
	return (
		<SiteLayout>
			<CategoryPage />
		</SiteLayout>
	);
}
