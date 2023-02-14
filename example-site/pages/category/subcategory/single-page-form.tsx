import { useRouter } from 'next/router';
import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { FormExampleSinglePage } from '../../../components/templates/FormExampleSinglePage';

export default function SinglePageFormPage() {
	const router = useRouter();
	return (
		<>
			<DocumentTitle title="Single-page form example" />
			<AppLayout
				template={{ name: 'Single-page form', slug: 'single-page-form' }}
			>
				<FormExampleSinglePage
					onSubmit={() => router.push('single-page-form-success')}
				/>
			</AppLayout>
		</>
	);
}
