import { FormEvent, Fragment } from 'react';
import { NotAvailableAlert } from '../task4/FormTask4Step1';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { FormTask1Container } from './FormTask1Container';
import { useFormTask1Context } from './FormTask1Provider';
import { FormTask1Review } from './FormTask1Review';

export function FormTask1Step7() {
	const { formState, setFormState } = useGlobalForm();
	const { submitStep, canConfirmAndSubmit } = useFormTask1Context();

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		await submitStep();
		setFormState({
			...formState,
			task1: {
				...formState.task1,
				step7: { completed: true },
				completed: true,
			},
		});
	}

	return (
		<FormTask1Container
			formTitle="Confirm and submit"
			formIntroduction="Check and confirm all details on this page."
		>
			{canConfirmAndSubmit ? (
				<Fragment>
					<FormTask1Review headingsLevel="h2" />
					<form onSubmit={onSubmit}>
						<StepActions />
					</form>
				</Fragment>
			) : (
				<NotAvailableAlert />
			)}
		</FormTask1Container>
	);
}
