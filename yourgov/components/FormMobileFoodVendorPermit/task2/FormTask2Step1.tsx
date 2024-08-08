import { useRouter } from 'next/router';
import { FormEventHandler, useState } from 'react';
import { z } from 'zod';
import { ButtonLink } from '@ag.ds-next/react/button';
import { H2, H3 } from '@ag.ds-next/react/heading';
import { AvatarIcon, PlusIcon } from '@ag.ds-next/react/icon';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { EmployeeTable } from './EmployeeTable';
import { FormTask2Container } from './FormTask2Container';
import {
	Task2Step1EmployeeSchema,
	Task2Step1Schema,
	task2Step1Schema,
} from './FormTask2FormState';
import { task2FormSteps, useFormTask2Context } from './FormTask2Provider';

export function FormTask2Step1() {
	const { query } = useRouter();
	const { submitStep } = useFormTask2Context();
	const { formState, setFormState, isSavingBeforeExiting } = useGlobalForm();
	// const stepFormState = formState.task2?.step1;
	const step1AddEmployeePath = `/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-2/step-1/add-employee`;

	const [isSuccessVisible, setIsSuccessVisible] = useState(
		query.success === 'true'
	);
	const [errors, setErrors] = useState<z.ZodFormattedError<Task2Step1Schema>>();

	const employeeList = formState.task2?.step1?.employeeList || [];
	const hasEmployees = employeeList.length > 0;

	const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		const validation = task2Step1Schema.safeParse(formState.task2?.step1);
		event.preventDefault();

		if (!validation.success) {
			setErrors(validation.error.format());
			return;
		}

		!isSavingBeforeExiting && (await submitStep());
		setFormState({
			...formState,
			task2: {
				...formState.task2,
				step1: {
					...formState.task2?.step1,
					// ...data,
					employeeList,
					completed: !isSavingBeforeExiting,
					started: true,
				},
				started: true,
			},
		});
	};

	function removeEmployee(
		employee: Partial<Task2Step1EmployeeSchema> | undefined
	) {
		setFormState({
			...formState,
			task2: {
				...formState.task2,
				step1: {
					...formState.task2?.step1,
					// ...data,
					employeeList: employeeList?.filter(
						(emp) => emp?.email !== employee?.email
					),
				},
			},
		});
	}

	const lastEmployee = employeeList[employeeList.length - 1];

	return (
		<FormTask2Container
			formTitle={task2FormSteps[0].label}
			formIntroduction="Add your employee details."
		>
			<Stack as="form" gap={2} width="100%" onSubmit={onSubmit}>
				{errors?.employeeList?._errors && (
					<PageAlert
						focusOnMount
						tone="error"
						title={errors.employeeList?._errors[0]}
					>
						<Text>
							You need to add some staff. You’re amazing, but you can’t do this
							alone. Life is better with friends and team mates.
						</Text>
					</PageAlert>
				)}

				<H2>List of employees</H2>

				{isSuccessVisible && lastEmployee && (
					<PageAlert
						tone="success"
						title="Employee added"
						onClose={() => setIsSuccessVisible(false)}
					>
						<Text>
							{lastEmployee.firstName} {lastEmployee.lastName} has been added as
							an employee.
						</Text>
					</PageAlert>
				)}

				{hasEmployees && (
					<EmployeeTable
						employeeList={employeeList}
						onRemoveEmployee={removeEmployee}
						step1AddEmployeePath={step1AddEmployeePath}
					/>
				)}

				{!hasEmployees && (
					<Stack gap={1.5} alignItems="flex-start" width="100%">
						<AvatarIcon size="xl" />
						<H3>No employees added</H3>
						<Text as="p">You must add an employee to proceed.</Text>
						<ButtonLink
							href={step1AddEmployeePath}
							variant="secondary"
							size="sm"
							iconBefore={PlusIcon}
						>
							Add employee
						</ButtonLink>
					</Stack>
				)}
				<StepActions />
			</Stack>
		</FormTask2Container>
	);
}
