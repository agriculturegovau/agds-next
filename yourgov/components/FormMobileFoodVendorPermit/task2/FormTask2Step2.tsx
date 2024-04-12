import { FormEventHandler } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonLink } from '@ag.ds-next/react/button';
import { H2, H3 } from '@ag.ds-next/react/heading';
import { AvatarIcon, PlusIcon } from '@ag.ds-next/react/icon';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Radio } from '@ag.ds-next/react/radio';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Callout } from '@ag.ds-next/react/callout';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { Task1Step2FormSchema } from '../task1/FormTask1FormState';
import { checkHasError, checkHasMultipleErrors } from '../utils';
import { FormTask2Container } from './FormTask2Container';
import { task2FormSteps, useFormTask2Context } from './FormTask2Provider';
import { Task2Step2Schema, task2Step2Schema } from './FormTask2FormState';

export function FormTask2Step2() {
	const { submitStep } = useFormTask2Context();
	const { formState, setFormState } = useGlobalForm();

	const employeeList = formState.task2?.step1?.employeeList || [];

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Task2Step2Schema>({
		defaultValues: formState.task2?.step2,
		resolver: zodResolver(task2Step2Schema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const onSubmit: SubmitHandler<Task2Step2Schema> = async (data) => {
		await submitStep();
		setFormState({
			...formState,
			task1: { ...formState.task1, step2: { ...data, completed: true } },
		});
	};

	return (
		<FormTask2Container
			formTitle={task2FormSteps[1].label}
			formIntroduction="Add your employee food safety supervisor."
		>
			<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)}>
				<ControlGroup
					label="Who is the appointed Food Safety Supervisor for this business?"
					block
					required
					invalid={checkHasError(errors)}
					message={errors.foodSafetySupervisor?.message}
				>
					{employeeList.map(
						(emp) =>
							emp && (
								<Radio
									{...register('foodSafetySupervisor')}
									value={emp.email}
									key={emp.email}
								>
									{emp.firstName} {emp.lastName}
								</Radio>
							)
					)}
				</ControlGroup>
				<Callout
					title="Food Safety Supervisor Certificate(s) required"
					tone="info"
				>
					<Text as="p">
						You will be required to upload a Food Safety Supervisor Certificate
						for each staff member appointed as a Food Safety Supervisor in the
						‘Upload documents’ task of this application.
					</Text>
				</Callout>
				<StepActions />
			</Stack>
		</FormTask2Container>
	);
}
