import { Fragment } from 'react';
import { DocumentTitle } from '../../../../../components/DocumentTitle';
import { FormRegisterPetPersonalDetails } from '../../../../../components/FormRegisterPetPersonalDetails/FormRegisterPetPersonalDetails';

export default function FormRegisterPetTask1FormPage() {
	return (
		<Fragment>
			<DocumentTitle title="Your personal details | Register a pet" />
			<FormRegisterPetPersonalDetails />
		</Fragment>
	);
}
