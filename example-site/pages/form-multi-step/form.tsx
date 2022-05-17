import type { NextPage } from 'next';
import { Content } from '@ag.ds-next/content';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { FormExampleMultiStep } from '../../components/FormExampleMultiStep/FormExampleMultiStep';

const FormMultiStepPage: NextPage = () => {
	return (
		<>
			<DocumentTitle title="Multi step form example" />
			<AppLayout>
				<Content>
					<FormExampleMultiStep />
				</Content>
			</AppLayout>
		</>
	);
};

export default FormMultiStepPage;
