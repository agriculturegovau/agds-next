import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { Subcategory } from '../../../components/templates/Subcategory';

export default function SubcategoryPage() {
	return (
		<>
			<DocumentTitle title="Subcategory" />
			<AppLayout template={{ name: 'Subcategory', slug: 'subcategory' }}>
				<Subcategory />
			</AppLayout>
		</>
	);
}
