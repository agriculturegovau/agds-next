import { SiteLayout } from '../../components/SiteLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { Category } from '../../components/templates/Category';

export default function CategoryPage() {
	return (
		<>
			<DocumentTitle title="Category" />
			<SiteLayout template={{ name: 'Category', slug: 'category' }}>
				<Category />
			</SiteLayout>
		</>
	);
}
