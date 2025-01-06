import { SiteLayout } from '../../../../components/SiteLayout';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { FormExampleMultiStep } from '../../../../components/FormExampleMultiStep/FormExampleMultiStep';

export default function FormMultiPageFormPage() {
	return (
		<>
			<DocumentTitle title="Multi-page form example" />
			<SiteLayout
				focusMode
				template={{ name: 'Multi-page form', slug: 'multi-page-form' }}
			>
				<FormExampleMultiStep />
			</SiteLayout>
		</>
	);
}
