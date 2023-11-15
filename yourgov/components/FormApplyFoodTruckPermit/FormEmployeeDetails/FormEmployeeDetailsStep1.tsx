import { Fragment, useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { UnorderedList, ListItem } from '@ag.ds-next/react/list';
import { Stack } from '@ag.ds-next/react/stack';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { useScrollToField } from '@ag.ds-next/react/field';
import { Button } from '@ag.ds-next/react/button';
import { useTernaryState } from '@ag.ds-next/react/core';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	TableWrapper,
} from '@ag.ds-next/react/table';
import { FormApplyFoodTruckActions } from '../FormApplyFoodTruckActions';
import { useFormEmployeeDetails } from './FormEmployeeDetails';
import { FormEmployeeDetailsContainer } from './FormEmployeeDetailsContainer';
import { FormEmployeeDetailsStep1Drawer } from './FormEmployeeDetailsStep1Drawer';

export const formSchema = yup
	.object({
		driver: yup.array().of(yup.string()),
		crowdControl: yup.array().of(yup.string()),
		operationsManager: yup.array().of(yup.string()),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormEmployeeDetailsStep1 = () => {
	const { next, stepFormState, formState } = useFormEmployeeDetails();
	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
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

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		setFocusedError(false);
		next(data);
	};

	const onError = () => {
		setFocusedError(false);
	};

	// Only show the page alert if there is more than 1 error
	const hasErrors = Object.keys(errors).length > 1;

	useEffect(() => {
		if (hasErrors && !focusedError) {
			errorRef.current?.focus();
			setFocusedError(true);
		}
	}, [hasErrors, focusedError, errors]);

	const employees = formState[0]?.employees ?? [];

	const [isDrawerOpen, openDrawer, closeDrawer] = useTernaryState(false);
	const employeeRef = useRef(null);

	const driver = watch('driver');
	const crowdControl = watch('crowdControl');
	const operationsManager = watch('operationsManager');

	function selectDriver() {
		openDrawer();
		employeeRef.current = 'driver';
	}

	function selectCrowdControl() {
		openDrawer();
		employeeRef.current = 'crowdControl';
	}

	function selectOperationsManager() {
		openDrawer();
		employeeRef.current = 'operationsManager';
	}

	function onSideDrawerSubmit(data: SideDrawerFormSchema) {
		switch (employeeRef.current) {
			case 'driver':
				setValue('driver', data.employee);
				break;
			case 'crowdControl':
				setValue('crowdControl', data.employee);
				break;
			case 'operationsManager':
				setValue('operationsManager', data.employee);
				break;
		}
		closeDrawer();
	}

	return (
		<Fragment>
			<FormEmployeeDetailsContainer
				title="Employee roles"
				introduction="Add your employee roles."
			>
				<Stack
					as="form"
					gap={3}
					onSubmit={handleSubmit(onSubmit, onError)}
					noValidate
				>
					<FormStack>
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
											<TextLink href={`#${key}`} onClick={scrollToField}>
												{value.message}
											</TextLink>
										</ListItem>
									))}
								</UnorderedList>
							</PageAlert>
						)}

						<TableWrapper>
							<Table>
								<TableHead>
									<TableRow>
										<TableHeader scope="col">Role</TableHeader>
										<TableHeader scope="col">Employee name</TableHeader>
										<TableHeader textAlign="right" scope="col">
											Actions
										</TableHeader>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										<TableCell>Driver</TableCell>
										<TableCell>{driver}</TableCell>
										<TableCell textAlign="right">
											<Button variant="text" onClick={selectDriver}>
												Select employee
											</Button>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Crowd control</TableCell>
										<TableCell>{crowdControl}</TableCell>
										<TableCell textAlign="right">
											<Button variant="text" onClick={selectCrowdControl}>
												Select employee
											</Button>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>Operations manager</TableCell>
										<TableCell>{operationsManager}</TableCell>
										<TableCell textAlign="right">
											<Button variant="text" onClick={selectOperationsManager}>
												Select employee
											</Button>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</TableWrapper>
					</FormStack>
					<FormApplyFoodTruckActions />
				</Stack>
			</FormEmployeeDetailsContainer>
			<FormEmployeeDetailsStep1Drawer
				employees={employees}
				isOpen={isDrawerOpen}
				closeDrawer={closeDrawer}
				onSubmit={onSideDrawerSubmit}
			/>
		</Fragment>
	);
};
