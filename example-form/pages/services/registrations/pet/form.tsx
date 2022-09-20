import { Fragment } from 'react';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { FormExampleMultiStep } from '../../../../components/FormExampleMultiStep/FormExampleMultiStep';

export default function FormRegisterPetFormPage() {
	return (
		<Fragment>
			<DocumentTitle title="Register your pet" />
			<FormExampleMultiStep />
		</Fragment>
	);
}
