import { FormEvent, Fragment } from 'react';
import { NotAvailableAlert } from '../FormTask4Step1';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { FormTask2Container } from './FormTask2Container';
import { useFormTask2Context } from './FormTask2Provider';
import { FormTask2Review } from './FormTask2Review';

export function FormTask2Step3() {
	const { formState, setFormState } = useGlobalForm();
	const { submitStep, canConfirmAndSubmit } = useFormTask2Context();

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		await submitStep();
		setFormState({
			...formState,
			task2: {
				...formState.task2,
				step3: { completed: true },
				completed: true,
			},
		});
	}

	return (
		<FormTask2Container
			formTitle="Confirm and submit"
			formIntroduction="Check and confirm all details on this page."
		>
			{canConfirmAndSubmit ? (
				<Fragment>
					<FormTask2Review headingsLevel="h2" />
					<form onSubmit={onSubmit}>
						<StepActions />
					</form>
				</Fragment>
			) : (
				<NotAvailableAlert />
			)}
		</FormTask2Container>
	);
}
