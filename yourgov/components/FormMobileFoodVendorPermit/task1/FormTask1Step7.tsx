import { FormEvent, Fragment } from 'react';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Text } from '@ag.ds-next/react/text';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormActions } from '../FormActions';
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
						<FormActions />
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
		</FormTask1Container>
	);
}
