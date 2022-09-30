import { Fragment } from 'react';
import { DocumentTitle } from '../../../../../components/DocumentTitle';
import { FormRegisterPetDetails } from '../../../../../components/FormRegisterPetDetails/FormRegisterPetDetails';

export default function FormRegisterPetTask2FormPage() {
	return (
		<Fragment>
			<DocumentTitle title="Your pet's details | Register a pet" />
			<FormRegisterPetDetails />
		</Fragment>
	);
}
