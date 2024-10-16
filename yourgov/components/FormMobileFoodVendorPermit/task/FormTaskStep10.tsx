import { FormEvent, Fragment } from 'react';
import { CannotStartAlert } from '../CannotStartAlert';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { FormTaskContainer } from './FormTaskContainer';
import { useFormTaskContext } from './FormTaskProvider';
import { FormTaskStep10Review } from './FormTaskStep10Review';

export function FormTaskStep10() {
	const { isSavingBeforeExiting, step10SetState } = useGlobalForm();
	const { submitStep, canConfirmAndSubmit } = useFormTaskContext();

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
		<FormTaskContainer
			formTitle="Review and submit"
			formIntroduction="Check and confirm all details on this page."
			hideRequiredFieldsMessage
		>
			{canConfirmAndSubmit ? (
				<Fragment>
					<FormTaskStep10Review headingsLevel="h2" />
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
