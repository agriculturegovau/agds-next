import { FormEvent } from 'react';
import { FormActions } from './FormActions';
import { FormTask4Container } from './FormTask4Container';
import { FormTask1Review } from './FormTask1Review';

export function FormTask4Step1() {
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// next();
	};

	return (
		<FormTask4Container
			formTitle="Confirm and submit"
			formIntroduction="Check and confirm all details on this page."
		>
			<FormTask1Review />
			<form onSubmit={onSubmit}>
				<FormActions />
			</form>
		</FormTask4Container>
	);
}
