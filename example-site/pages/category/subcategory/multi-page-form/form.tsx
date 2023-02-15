import { AppLayout } from '../../../../components/AppLayout';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { FormExampleMultiStep } from '../../../../components/FormExampleMultiStep/FormExampleMultiStep';

export default function FormMultiPageFormPage() {
	return (
		<>
			<DocumentTitle title="Multi-page form example" />
			<AppLayout
				template={{ name: 'Multi-page form', slug: 'multi-page-form' }}
				focusMode
			>
				<FormExampleMultiStep />
			</AppLayout>
		</>
	);
}
