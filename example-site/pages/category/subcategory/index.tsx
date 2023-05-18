import { SiteLayout } from '../../../components/SiteLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { Subcategory } from '../../../components/templates/Subcategory';

export default function SubcategoryPage() {
	return (
		<>
			<DocumentTitle title="Subcategory" />
			<SiteLayout template={{ name: 'Subcategory', slug: 'subcategory' }}>
				<Subcategory />
			</SiteLayout>
		</>
	);
}
