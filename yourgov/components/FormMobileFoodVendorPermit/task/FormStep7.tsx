import { FormEvent, Fragment } from 'react';
import { CannotStartAlert } from '../CannotStartAlert';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { FormContainer } from './FormContainer';
import { useFormContext } from './FormProvider';
import { FormStep7Review } from './FormStep7Review';

export function FormStep7() {
	const { isSavingBeforeExiting, step7SetState } = useGlobalForm();
	const { submitStep, canConfirmAndSubmit } = useFormContext();

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		step7SetState({
			completed: true,
		});
	}

	return (
		<FormContainer
			formTitle="Confirm and submit"
			formIntroduction="Check and confirm all details on this page to complete this task."
			hideRequiredFieldsMessage
		>
			{canConfirmAndSubmit ? (
				<Fragment>
					<FormStep7Review headingsLevel="h2" />
					<form onSubmit={onSubmit}>
						<StepActions submitText="Submit application" />
					</form>
				</Fragment>
			) : (
				<CannotStartAlert />
			)}
		</FormContainer>
	);
}
