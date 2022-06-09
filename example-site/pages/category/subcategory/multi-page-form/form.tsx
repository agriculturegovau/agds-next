import type { NextPage } from 'next';
import { Fragment } from 'react';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { FormExampleMultiStep } from '../../../../components/FormExampleMultiStep/FormExampleMultiStep';

const FormMultiStepPage: NextPage = () => {
	return (
		<Fragment>
			<DocumentTitle title="Multi-page form example" />
			<FormExampleMultiStep />
		</Fragment>
	);
};

export default FormMultiStepPage;
