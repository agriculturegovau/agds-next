import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, ButtonLink } from '@ag.ds-next/react/button';
import { H2, H3 } from '@ag.ds-next/react/heading';
import { AvatarIcon, PlusIcon } from '@ag.ds-next/react/icon';
import { Stack } from '@ag.ds-next/react/stack';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableWrapper,
} from '@ag.ds-next/react/table';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { FormTask2Container } from './FormTask2Container';
import {
	ArrayOfTask2Step1FormSchema,
	Task2Step1FormSchema,
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
		resolver: zodResolver(arrayOfTask2Step1FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const hasEmployees = (formState.task2?.step1?.employeeList?.length || 0) > 0;

	const onSubmit: SubmitHandler<ArrayOfTask2Step1FormSchema> = async (data) => {
		arrayOfTask2Step1FormSchema.parse(data);
		await submitStep();
		console.log({ data });
		setFormState({
			...formState,
			task2: {
				...formState.task2,
				step1: {
					...formState.task2?.step1,
					// ...data,
					employeeList: formState.task2?.step1?.employeeList,
					completed: true,
				},
			},
		});
	};

	function removeEmployee(employee: Partial<Task2Step1FormSchema> | undefined) {
		setFormState({
			...formState,
			task2: {
				...formState.task2,
				step1: {
					...formState.task2?.step1,
					// ...data,
					employeeList: formState.task2?.step1?.employeeList?.filter(
						(emp) => emp?.email !== employee?.email
					),
					completed: true,
				},
			},
		});
	}

	return (
		<FormTask2Container
			formTitle={task2FormSteps[0].label}
			formIntroduction="Add your employee details."
		>
			<Stack as="form" gap={3} width="100%" onSubmit={handleSubmit(onSubmit)}>
				<H2>List of employees</H2>

				{hasEmployees && (
					<TableWrapper>
						<Stack gap={1.5} alignItems="flex-start" width="100%">
							<Table>
								<TableHead>
									<TableRow>
										<TableHeader scope="col">Employee name</TableHeader>
										<TableHeader scope="col">Email address</TableHeader>
										<TableHeader scope="col">Action</TableHeader>
									</TableRow>
								</TableHead>
								<TableBody>
									{formState.task2?.step1?.employeeList?.map((employee) => (
										<TableRow key={employee?.email}>
											<TableCell>
												<TextLink
													href={
														step1AddEmployeePath +
														'&employeeId=' +
														employee?.email
													}
												>
													{`${employee?.firstName} ${employee?.lastName}`}
												</TextLink>
											</TableCell>
											<TableCell>{employee?.email}</TableCell>
											<TableCell>
												<Button
													onClick={() => removeEmployee(employee)}
													variant="text"
												>
													Remove
												</Button>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
							<ButtonLink
								href={step1AddEmployeePath}
								variant="secondary"
								size="sm"
								iconBefore={PlusIcon}
							>
								Add employee
							</ButtonLink>
						</Stack>
					</TableWrapper>
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
