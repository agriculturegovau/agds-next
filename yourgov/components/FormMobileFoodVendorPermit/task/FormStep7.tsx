import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
import { taskFormSteps, useFormContext } from './FormProvider';

export function FormStep7() {
	const { step7GetState, step7SetState, isSavingBeforeExiting } =
		useGlobalForm();
	const { submitStep } = useFormContext();
	const { query } = useRouter();
	const step7State = step7GetState();
	const hasAddedUser = !!query.success;
	const addedUser = hasAddedUser
		? step7State?.employee &&
		  step7State.employee.find((employee) => employee.id === query.success)
		: undefined;
	const [showAddedEmployeeMessage, setShowAddedEmployeeMessage] =
		useState(addedUser);
	const [showRemovedEmployeeMessage, setShowRemovedEmployeeMessage] =
		useState(false);
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	useEffect(() => {
		setShowAddedEmployeeMessage(addedUser);
	}, [addedUser]);

	const [employeeIdToRemove, setEmployeeIdToRemove] = useState('');
	const [employeeToRemove, setEmployeeToRemove] = useState({});
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const closeModal = () => {
		setShowAddedEmployeeMessage('');
		setEmployeeIdToRemove('');
	};

	const removeEmployee = (id: string) => {
		step7SetState({
			...step7GetState,
			// FIXME: Why do I have to set this here? Why does the state not include it?
			started: true,
			completed: false,
			employee:
				step7State?.employee &&
				step7State.employee.filter((employee) => employee.id !== id),
		});
		closeModal();
		setTimeout(() => {
			setShowRemovedEmployeeMessage(true);
		}, 0);
	};

	useEffect(() => {
		setModalIsVisible(!!employeeIdToRemove);
		setShowRemovedEmployeeMessage(false);
		if (employeeIdToRemove) {
			setEmployeeToRemove(
				step7State?.employee &&
					step7State.employee.find(
						(employee) => employee.id === employeeIdToRemove
					)
			);
		}
	}, [employeeIdToRemove, step7State?.employee]);

	const onSubmit = async (event) => {
		event.preventDefault();
		if (isSavingBeforeExiting) {
			return;
		}

		if (step7State?.employee && step7State?.employee.length === 0) {
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

	return (
		<FormContainer
			formTitle="Employees"
			formIntroduction="Add your employee details."
			shouldFocusTitle={!showAddedEmployeeMessage}
		>
			<Stack gap={3}>
				<Stack gap={2}>
					{showErrorMessage && (
						<PageAlert focusOnMount title="No employees added" tone="error">
							<Text as="p">
								You need to add some staff. You’re amazing, but you can’t do
								this alone. Life is better with friends and team mates.
							</Text>
						</PageAlert>
					)}
					<H2 id="list-of-employees">List of employees</H2>
					{showAddedEmployeeMessage && (
						<SectionAlert
							focusOnMount
							onClose={() => setShowAddedEmployeeMessage(false)}
							title={`${addedUser?.firstName} ${addedUser?.lastName} has been added as an
							employee`}
							tone="success"
						/>
					)}
					{showRemovedEmployeeMessage && (
						<SectionAlert
							focusOnMount
							onClose={() => setShowRemovedEmployeeMessage(false)}
							title={`${employeeToRemove?.firstName} ${employeeToRemove?.lastName} has been removed as an
							employee`}
							tone="success"
						/>
					)}
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
									{step7State.employee
										.sort((a, b) => {
											if (a.firstName.toLowerCase() < b.firstName.toLowerCase())
												return -1;
											if (a.firstName.toLowerCase() > b.firstName.toLowerCase())
												return 1;

											if (a.lastName.toLowerCase() < b.lastName.toLowerCase())
												return -1;
											if (a.lastName.toLowerCase() > b.lastName.toLowerCase())
												return 1;

											return 0;
										})
										.map((employee) => (
											<TableRow key={employee.id}>
												<TableCell id={employee.id}>
													{employee.firstName} {employee.lastName}
												</TableCell>
												<TableCell>{employee.email}</TableCell>
												<TableCell>
													<Button
														aria-describedby={employee.id}
														variant="text"
														onClick={() => {
															setEmployeeIdToRemove(employee.id);
														}}
													>
														Remove
													</Button>
												</TableCell>
											</TableRow>
										))}
								</TableBody>
							</Table>
						</TableWrapper>
					) : (
						<Stack gap={1}>
							<AvatarIcon size="lg" color="muted" />
							<H3>No employees added</H3>
							<Text as="p">You must add an employee to proceed.</Text>
						</Stack>
					)}
					<ButtonLink
						alignSelf="start"
						href={taskFormSteps[6].items && taskFormSteps[6].items[0].href}
						iconBefore={PlusIcon}
						size="sm"
						variant="secondary"
					>
						Add employee
					</ButtonLink>
				</Stack>
			</Stack>
			<form onSubmit={onSubmit} noValidate>
				<StepActions />
			</form>
			<Modal
				isOpen={modalIsVisible}
				actions={
					<ButtonGroup>
						<Button
							onClick={() => {
								removeEmployee(employeeIdToRemove);
							}}
						>
							Remove employee
						</Button>
						<Button variant="secondary" onClick={closeModal}>
							Cancel
						</Button>
					</ButtonGroup>
				}
				title={`Are you sure you want to remove ${employeeToRemove?.firstName} ${employeeToRemove?.lastName} as an employee?`}
				onClose={closeModal}
			></Modal>
		</FormContainer>
	);
}
