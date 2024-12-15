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
import { StepActions } from '../StepActions';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormContainer } from './FormContainer';
import { formSteps, useFormContext } from './FormProvider';
import { Step7FormSchema } from './FormState';

export function FormStep7() {
	const {
		step7GetState,
		step7SetState,
		step8GetState,
		step8SetState,
		isSavingBeforeExiting,
	} = useGlobalForm();
	const { submitStep } = useFormContext();
	const { query } = useRouter();
	const step7State = step7GetState();

	const [employeeToRemove, setEmployeeToRemove] =
		useState<Partial<Step7FormSchema['employee']>>();
	const [removedEmployee, setRemovedEmployee] = useState('');

	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [showRemovedEmployeeMessage, setShowRemovedEmployeeMessage] =
		useState(false);
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	const addedPageAlertRef = useRef<HTMLDivElement>(null);
	const removedPageAlertRef = useRef<HTMLDivElement>(null);

	const addedEmployee = query.success
		? step7State?.employee &&
		  step7State.employee.find((employee) => employee?.id === query.success)
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
		step7SetState({
			...step7State,
			completed: false,
			employee:
				step7State?.employee &&
				step7State.employee.filter(
					(employee) => employee?.id !== employeeToRemove?.id
				),
		});

		setRemovedEmployee(
			`${employeeToRemove?.firstName} ${employeeToRemove?.lastName}`
		);
		closeModal();

		setTimeout(() => {
			setShowRemovedEmployeeMessage(true);
			// FIXME: Can't set this immediately after setting step7, otherwise step7 doesn't actually get set
			if (
				step8GetState()?.supervisor ===
				`${employeeToRemove?.firstName} ${employeeToRemove?.lastName}`
			) {
				step8SetState({});
			}
		}, 0);
	};

	const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();

		if (isSavingBeforeExiting) {
			return;
		}

		if (step7State?.employee && step7State?.employee.length === 0) {
			setShowRemovedEmployeeMessage(false);
			setShowErrorMessage(true);
			return;
		}

		await submitStep();
		step7SetState({
			...step7State,
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
			formTitle="Employees"
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
						tone="success"
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
						tone="success"
					/>
				</Box>
				{step7State?.employee && step7State.employee.length > 0 ? (
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
								{step7State.employee.map(
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
					href={formSteps[6].items && formSteps[6].items[0].href}
					iconBefore={PlusIcon}
					size="sm"
					variant="secondary"
				>
					Add employee
				</ButtonLink>
			</Stack>
			<form onSubmit={onSubmit} noValidate>
				<StepActions />
			</form>
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
			></Modal>
		</FormContainer>
	);
}
