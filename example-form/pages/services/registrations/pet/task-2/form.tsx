import { Fragment } from 'react';
import { DocumentTitle } from '../../../../../components/DocumentTitle';
import { FormExampleMultiStep } from '../../../../../components/FormExampleMultiStep/FormExampleMultiStep';

export default function FormMultiPageFormPage() {
	return (
		<Fragment>
			<DocumentTitle title="Your pet's details" />
			<FormExampleMultiStep />
		</Fragment>
	);
}
