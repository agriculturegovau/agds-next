import { FormEvent, Fragment } from 'react';
import { CannotStartAlert } from '../CannotStartAlert';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { FormTaskContainer } from './FormTaskContainer';
import { useFormTaskContext } from './FormTaskProvider';
import { FormTaskStep7Review } from './FormTaskStep7Review';

export function FormTaskStep7() {
	const { formState, isSavingBeforeExiting, setFormState } = useGlobalForm();
	const { submitStep, canConfirmAndSubmit } = useFormTaskContext();

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		setFormState({
			...formState,
			task: {
				...formState.task,
				step7: { completed: true },
				completed: true,
			},
		});
	}

	return (
		<FormTaskContainer
			formTitle="Confirm and submit"
			formIntroduction="Check and confirm all details on this page to complete this task."
			hideRequiredFieldsMessage
		>
			{canConfirmAndSubmit ? (
				<Fragment>
					<FormTaskStep7Review headingsLevel="h2" />
					<form onSubmit={onSubmit}>
						<StepActions submitText="Submit application" />
					</form>
				</Fragment>
			) : (
				<CannotStartAlert />
			)}
		</FormTaskContainer>
	);
}
