import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ButtonLink } from '@ag.ds-next/react/button';
import { H2, H3 } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/stack';
import { AvatarIcon, PlusIcon } from '@ag.ds-next/react/icon';
import { Text } from '@ag.ds-next/react/text';
import { FormActions } from '../FormActions';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormTask2Container } from './FormTask2Container';
import {
	ArrayOfTask2Step1FormSchema,
	arrayOfTask2Step1FormSchema,
} from './FormTask2FormState';
import { task2FormSteps, useFormTask2Context } from './FormTask2Provider';

export function FormTask2Step1() {
	const { submitStep } = useFormTask2Context();
	const { formState, typeSearchParm, setFormState } = useGlobalForm();
	// const stepFormState = formState.task2?.step1;
	const step1AddEmployeePath = `/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-2/step-1/add-employee?type=${typeSearchParm}`;

	console.log('FormTask2Step1', { formState });

	// const employeeList = formState.task2?.step1?.employeeList;

	const {
		// register,
		handleSubmit,
		// formState: { errors },
	} = useForm<ArrayOfTask2Step1FormSchema>({
		resolver: yupResolver(arrayOfTask2Step1FormSchema),
	});

	const onSubmit: SubmitHandler<ArrayOfTask2Step1FormSchema> = async (data) => {
		await submitStep();
		console.log({ data });
		debugger;
		// setFormState({
		// 	...formState,
		// 	task2: {
		// 		...formState.task2,
		// 		step1: {
		// 			...formState.task2?.step1,
		// 			// ...data,
		// 			employeeList: formState.task2?.step1?.employeeList,
		// 			completed: true,
		// 		},
		// 	},
		// });
	};

	return (
		<FormTask2Container
			formTitle={task2FormSteps[0].label}
			formIntroduction="Add your employee details."
		>
			<Stack
				as="form"
				gap={3}
				alignItems="flex-start"
				width="100%"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Stack gap={1.5} alignItems="flex-start" width="100%">
					<H2>List of employees</H2>
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
				<FormActions />
			</Stack>
		</FormTask2Container>
	);
}
