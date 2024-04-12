import { FormEvent, Fragment } from 'react';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Text } from '@ag.ds-next/react/text';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { useFormTask2Context } from './FormTask2Provider';
import { FormTask2Container } from './FormTask2Container';
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
				<PageAlert
					tone="warning"
					title="This section of the form is not ready to be completed"
				>
					<Text as="p">
						Before starting this part of the form, you will need to go back and
						complete all of the previous sections.
					</Text>
				</PageAlert>
			)}
		</FormTask2Container>
	);
}
