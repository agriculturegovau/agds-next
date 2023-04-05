import { PageContent } from '@ag.ds-next/react/content';
import { AppLayout } from '../../components/AppLayout';
import { DataLoadingWithCards } from '../../components/DataLoading/DataLoadingWithCards';
import { DocumentTitle } from '../../components/DocumentTitle';

export default function DataLoadingPage() {
	return (
		<>
			<DocumentTitle title="Home" />
			<AppLayout template={{ name: 'Home', slug: 'home' }}>
				<PageContent>
					<DataLoadingWithCards />
				</PageContent>
			</AppLayout>
		</>
	);
}
