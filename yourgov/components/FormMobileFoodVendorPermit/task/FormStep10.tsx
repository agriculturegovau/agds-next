import { FormEvent, Fragment } from 'react';
import { CannotStartAlert } from '../CannotStartAlert';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { FormContainer } from './FormContainer';
import { useFormContext } from './FormProvider';
import { FormStep10Review } from './FormStep10Review';

export function FormStep10() {
	const { isSavingBeforeExiting, step10SetState } = useGlobalForm();
	const { submitStep, canConfirmAndSubmit } = useFormContext();

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		step10SetState({
			completed: true,
		});
	}

	return (
		<FormContainer
			formTitle="Review and submit"
			formIntroduction="Check and confirm all details on this page."
			hideRequiredFieldsMessage
		>
			{canConfirmAndSubmit ? (
				<Fragment>
					<FormStep10Review headingsLevel="h2" />
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
