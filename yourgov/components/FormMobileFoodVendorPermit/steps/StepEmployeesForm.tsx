import { type FormEventHandler, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@ag.ds-next/react/box';
import { Button, ButtonGroup, ButtonLink } from '@ag.ds-next/react/button';
import { H2, H3 } from '@ag.ds-next/react/heading';
import { AvatarIcon, PlusIcon } from '@ag.ds-next/react/icon';
import { Modal } from '@ag.ds-next/react/modal';
import { PageAlert } from '@ag.ds-next/react/page-alert';
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
import { SectionAlert } from '@ag.ds-next/react/section-alert';
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormContainer } from './FormContainer';
import { useFormContext } from './FormProvider';
import { StepEmployeesFormSchema } from './FormState';
import { Form } from './Form';
import { stepKeyToStepDataMap } from './stepsData';

export function StepEmployeesForm() {
	const {
		stepEmployeesGetState,
		stepEmployeesReviewEditGetState,
		stepEmployeesSetState,
		stepEmployeesReviewEditSetState,
		isSavingBeforeExiting,
	} = useGlobalForm();
	const { submitStep } = useFormContext();

	const editingStep = useIsEditingFromReviewStep();
	const reviewEditState = stepEmployeesReviewEditGetState();
	const stepState =
		editingStep?.match && reviewEditState?.edited
			? stepEmployeesReviewEditGetState()
			: stepEmployeesGetState();

	const conditionalStateSetter = editingStep?.match
		? stepEmployeesReviewEditSetState
		: stepEmployeesSetState;

	const addEmployeeHref = stepKeyToStepDataMap.stepEmployees?.items
		? stepKeyToStepDataMap.stepEmployees.items[0][
				editingStep?.match ? 'changeHref' : 'href'
		  ]
		: undefined;

	const { query } = useRouter();

	const [employeeToRemove, setEmployeeToRemove] =
		useState<Partial<StepEmployeesFormSchema['employee']>>();
	const [removedEmployee, setRemovedEmployee] = useState('');

	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [showRemovedEmployeeMessage, setShowRemovedEmployeeMessage] =
		useState(false);
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	const addedPageAlertRef = useRef<HTMLDivElement>(null);
	const removedPageAlertRef = useRef<HTMLDivElement>(null);

	const addedEmployee = query.success
		? stepState?.employee?.find((employee) => employee?.id === query.success)
		: undefined;
	const [showAddedEmployeeMessage, setShowAddedEmployeeMessage] = useState(
		!!addedEmployee
	);

	const closeModal = () => {
		setShowAddedEmployeeMessage(false);
		setEmployeeToRemove(undefined);
	};

	useEffect(() => {
		setModalIsVisible(!!employeeToRemove);
		setShowRemovedEmployeeMessage(false);
	}, [employeeToRemove]);

	const removeEmployee = () => {
		conditionalStateSetter({
			...stepState,
			completed: false,
			edited: editingStep?.match ? true : undefined,
			employee: stepState?.employee?.filter(
				(employee) => employee?.id !== employeeToRemove?.id
			),
		});

		setRemovedEmployee(
			`${employeeToRemove?.firstName} ${employeeToRemove?.lastName}`
		);
		closeModal();

		setTimeout(() => {
			setShowRemovedEmployeeMessage(true);
		}, 0);
	};

	const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();

		if (isSavingBeforeExiting) {
			return;
		}

		if (stepState?.employee && stepState?.employee.length === 0) {
			setShowRemovedEmployeeMessage(false);
			setShowErrorMessage(true);
			return;
		}

		await submitStep();
		stepEmployeesSetState({
			...stepState,
			completed: !isSavingBeforeExiting,
			started: true,
		});
	};

	useEffect(() => {
		setShowAddedEmployeeMessage(!!addedEmployee);

		if (addedEmployee) {
			setTimeout(() => {
				addedPageAlertRef.current?.focus();
			}, 500);
		}
	}, [addedEmployee]);

	useEffect(() => {
		if (removedEmployee) {
			setTimeout(() => {
				removedPageAlertRef.current?.focus();
			}, 500);
		}
	}, [removedEmployee]);

	return (
		<FormContainer
			formIntroduction="Add your employee details."
			formTitle={
				stepKeyToStepDataMap.stepEmployees[
					editingStep?.match ? 'changeLabel' : 'label'
				]
			}
			hideRequiredFieldsMessage
			shouldFocusTitle={!showAddedEmployeeMessage}
		>
			<Stack gap={2}>
				{showErrorMessage && (
					<PageAlert focusOnMount title="No employees added" tone="error">
						<Text as="p">You need to add some staff.</Text>
					</PageAlert>
				)}
				<H2 id="list-of-employees">List of employees</H2>
				<Box
					css={{
						display: showAddedEmployeeMessage ? 'block' : 'none',
					}}
					focusRingFor="all"
					ref={addedPageAlertRef}
					tabIndex={-1}
				>
					<SectionAlert
						onClose={() => setShowAddedEmployeeMessage(false)}
						title={`${addedEmployee?.firstName} ${addedEmployee?.lastName} has been added as an
							employee`}
						tone="successHigh"
					/>
				</Box>
				<Box
					css={{
						display: showRemovedEmployeeMessage ? 'block' : 'none',
					}}
					focusRingFor="all"
					ref={removedPageAlertRef}
					tabIndex={-1}
				>
					<SectionAlert
						onClose={() => setShowRemovedEmployeeMessage(false)}
						title={`${removedEmployee} has been removed as an
							employee`}
						tone="successHigh"
					/>
				</Box>
				{stepState?.employee && stepState.employee.length > 0 ? (
					<TableWrapper>
						<Table aria-labelledby="list-of-employees">
							<TableHead>
								<TableRow>
									<TableHeader>Employee name</TableHeader>
									<TableHeader>Email address</TableHeader>
									<TableHeader>Action</TableHeader>
								</TableRow>
							</TableHead>
							<TableBody>
								{stepState.employee.map(
									(employee) =>
										employee?.id && (
											<TableRow key={employee.id}>
												<TableCell id={employee.id}>
													{employee.firstName} {employee.lastName}
												</TableCell>
												<TableCell>{employee.email}</TableCell>
												<TableCell>
													<Button
														aria-describedby={employee.id}
														onClick={() => {
															setEmployeeToRemove(employee);
														}}
														variant="text"
													>
														Remove
													</Button>
												</TableCell>
											</TableRow>
										)
								)}
							</TableBody>
						</Table>
					</TableWrapper>
				) : (
					<Stack gap={1}>
						<AvatarIcon color="muted" size="lg" />
						<H3>No employees added</H3>
						<Text as="p">You must add an employee to proceed.</Text>
					</Stack>
				)}

				<ButtonLink
					alignSelf="start"
					href={addEmployeeHref}
					iconBefore={PlusIcon}
					size="sm"
					variant="secondary"
				>
					Add employee
				</ButtonLink>
			</Stack>

			<Form
				onEditCancel={() => {
					stepEmployeesReviewEditSetState({});
				}}
				onSubmit={onSubmit}
			/>

			<Modal
				actions={
					<ButtonGroup>
						<Button onClick={removeEmployee}>Remove employee</Button>
						<Button onClick={closeModal} variant="secondary">
							Cancel
						</Button>
					</ButtonGroup>
				}
				isOpen={modalIsVisible}
				onClose={closeModal}
				title={`Are you sure you want to remove ${employeeToRemove?.firstName} ${employeeToRemove?.lastName} as an employee?`}
			/>
		</FormContainer>
	);
}
