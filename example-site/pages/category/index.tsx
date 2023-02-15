import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { Category } from '../../components/templates/Category';

export default function CategoryPage() {
	return (
		<>
			<DocumentTitle title="Category" />
			<AppLayout template={{ name: 'Category', slug: 'category' }}>
				<Category />
			</AppLayout>
		</>
	);
}
