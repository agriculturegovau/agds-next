import { FormEvent } from 'react';
import { useGlobalForm } from './GlobalFormProvider';
import { FormActions } from './FormActions';
import { FormTask1Container } from './FormTask1Container';
import { useFormTask1Context } from './FormTask1Provider';
import { FormTask1Review } from './FormTask1Review';

export function FormTask1Step7() {
	const { formState, setFormState } = useGlobalForm();
	const { submitStep } = useFormTask1Context();

	function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setFormState({
			...formState,
			task1: { ...formState.task1, step7: { completed: true } },
		});
		submitStep();
	}

	return (
		<FormTask1Container
			formTitle="Confirm and submit"
			formIntroduction="Check and confirm all details on this page."
		>
			<FormTask1Review />
			<form onSubmit={onSubmit}>
				<FormActions />
			</form>
		</FormTask1Container>
	);
}
