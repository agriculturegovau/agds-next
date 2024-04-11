import { FormEventHandler } from 'react';
import { ButtonLink } from '@ag.ds-next/react/button';
import { H2, H3 } from '@ag.ds-next/react/heading';
import { AvatarIcon, PlusIcon } from '@ag.ds-next/react/icon';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { FormTask2Container } from './FormTask2Container';
import { task2FormSteps, useFormTask2Context } from './FormTask2Provider';

export function FormTask2Step2() {
	const { submitStep } = useFormTask2Context();
	const { formState, setFormState } = useGlobalForm();

	const employeeList = formState.task2?.step2?.employeeList || [];

	const onSubmit: FormEventHandler<HTMLFormElement> = async () => {
		await submitStep();
		setFormState({
			...formState,
			task2: {
				...formState.task2,
				step2: {
					...formState.task2?.step2,
					// ...data,
					employeeList,
					completed: true,
				},
			},
		});
	};

	return (
		<FormTask2Container
			formTitle={task2FormSteps[1].label}
			formIntroduction="Add your employee food safety supervisor."
		>
			<Stack as="form" gap={2} width="100%" onSubmit={onSubmit}>
				<H2>List of employees</H2>
				<Stack gap={1.5} alignItems="flex-start" width="100%">
					<AvatarIcon size="xl" />
					<H3>No employees added</H3>
					<Text as="p">You must add an employee to proceed.</Text>
				</Stack>
				<StepActions />
			</Stack>
		</FormTask2Container>
	);
}
