import { Fragment, useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box } from '@ag.ds-next/react/box';
import { Stack } from '@ag.ds-next/react/stack';
import { Button } from '@ag.ds-next/react/button';
import { H2 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { ListItem, UnorderedList } from '@ag.ds-next/react/list';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableWrapper,
} from '@ag.ds-next/react/table';
import { InfoIcon, PlusIcon } from '@ag.ds-next/react/icon';
import { Flex } from '@ag.ds-next/react/flex';
import { Divider } from '@ag.ds-next/react/divider';
import { FormRequiredFieldsMessage } from '../../FormRequiredFieldsMessage';
import { FormApplyFoodTruckActions } from '../FormApplyFoodTruckActions';
import { FormEmployeeDetailsContainer } from './FormEmployeeDetailsContainer';
import { useFormEmployeeDetails } from './FormEmployeeDetails';
import {
	AddEmployeeForm,
	AddEmployeeFormSchema,
	addEmployeeFormSchema,
} from './FormEmployeeDetailsStep0SideFlow';
import { formatEmployeeName } from './types';

export const formSchema = yup
	.object({
		employees: yup
			.array()
			.of(addEmployeeFormSchema)
			.min(1, 'At least 1 employee is requried')
			.required('At least 1 employee is requried'),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormEmployeeDetailsStep0 = () => {
	const { next, stepFormState, isSideFlow, setIsSideFlow } =
		useFormEmployeeDetails();

	const errorRef = useRef<HTMLDivElement>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		watch,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<FormSchema>({
		defaultValues: stepFormState,
		resolver: yupResolver(formSchema),
	});

	const [hasClosedForm, setHasClosedForm] = useState(false);

	function onSideFlowCancel() {
		setIsSideFlow(false);
		setHasClosedForm(true);
	}

	function changeDetails() {
		setIsSideFlow(true);
	}

	useEffect(() => {
		if (!hasClosedForm) return;
		headingRef.current?.focus();
		setHasClosedForm(false);
	}, [hasClosedForm]);

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		next(data);
	};

	const onError: SubmitErrorHandler<FormSchema> = () => {
		setFocusedError(false);
	};

	// Only show the page alert if there is more than 0 error
	const hasErrors = Object.keys(errors).length > 0;

	useEffect(() => {
		if (hasErrors && !focusedError) {
			errorRef.current?.focus();
			setFocusedError(true);
		}
	}, [hasErrors, focusedError, errors]);

	const employees = watch('employees') ?? [];

	function addEmployee(employee: AddEmployeeFormSchema) {
		setValue('employees', [...employees, employee]);
		setIsSideFlow(false);
	}

	function removeEmployee(idxToRemove: number) {
		setValue(
			'employees',
			employees.filter((e, i) => i !== idxToRemove)
		);
	}

	return (
		<FormEmployeeDetailsContainer
			title="Employees"
			introduction="Add your employee details."
			callToAction={isSideFlow ? <FormRequiredFieldsMessage /> : null}
		>
			<Stack gap={3} width="100%">
				{isSideFlow ? (
					<AddEmployeeForm onCancel={onSideFlowCancel} onSubmit={addEmployee} />
				) : (
					<Fragment>
						<Stack gap={1.5} width="100%">
							<H2 ref={headingRef} tabIndex={-1} focus>
								List of employees
							</H2>

							{hasErrors && (
								<PageAlert
									ref={errorRef}
									tone="error"
									title="There is a problem"
									tabIndex={-1}
								>
									<Text as="p">
										Please correct the following fields and try again
									</Text>
									<UnorderedList>
										{Object.entries(errors).map(([key, value]) => (
											<ListItem key={key}>
												{Array.isArray(value)
													? value[0].message
													: value.message}
											</ListItem>
										))}
									</UnorderedList>
								</PageAlert>
							)}

							<TableWrapper>
								<Table>
									<TableHead>
										<TableRow>
											<TableHeader scope="col">Employee name</TableHeader>
											<TableHeader scope="col">Email address</TableHeader>
											<TableHeader textAlign="right" scope="col">
												Action
											</TableHeader>
										</TableRow>
									</TableHead>
									<TableBody>
										{employees?.map((employee, idx) => (
											<TableRow key={idx}>
												<TableCell>{formatEmployeeName(employee)}</TableCell>
												<TableCell>{employee.email}</TableCell>
												<TableCell textAlign="right">
													<Button
														variant="text"
														onClick={() => removeEmployee(idx)}
													>
														Remove
													</Button>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableWrapper>

							{employees?.length === 0 && (
								<Flex gap={0.75}>
									<InfoIcon color="info" />
									<Stack gap={1}>
										<Text fontWeight="bold">No employees added</Text>
									</Stack>
								</Flex>
							)}

							<Divider />

							<div>
								<Button
									variant="secondary"
									size="sm"
									onClick={changeDetails}
									iconBefore={PlusIcon}
								>
									Add employee
								</Button>
							</div>
						</Stack>

						<Box
							as="form"
							width="100%"
							onSubmit={handleSubmit(onSubmit, onError)}
						>
							<FormApplyFoodTruckActions />
						</Box>
					</Fragment>
				)}
			</Stack>
		</FormEmployeeDetailsContainer>
	);
};
