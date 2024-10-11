import { FormEvent, Fragment } from 'react';
import { CannotStartAlert } from '../CannotStartAlert';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { FormTask1Container } from './FormTask1Container';
import { useFormTask1Context } from './FormTask1Provider';
import { FormTask1Step7Review } from './FormTask1Step7Review';

export function FormTask1Step7() {
	const { formState, isSavingBeforeExiting, setFormState } = useGlobalForm();
	const { submitStep, canConfirmAndSubmit } = useFormTask1Context();

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (isSavingBeforeExiting) {
			return;
		}
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
			formIntroduction="Check and confirm all details on this page to complete this task."
			hideRequiredFieldsMessage
		>
			{canConfirmAndSubmit ? (
				<Fragment>
					<FormTask1Step7Review headingsLevel="h2" />
					<form onSubmit={onSubmit}>
						<StepActions submitText="Submit application" />
					</form>
				</Fragment>
			) : (
				<CannotStartAlert />
			)}
		</FormTask1Container>
	);
}
