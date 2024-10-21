import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { ShallowErrors } from '../FormState';
import { StepActions } from '../StepActions';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormContainer } from './FormContainer';
import { taskFormSteps, useFormContext } from './FormProvider';
import { step7FormSchema, type Step7FormSchema } from './FormState';

export function FormStep7() {
	const { step7GetState, step7SetState, isSavingBeforeExiting } =
		useGlobalForm();
	const { submitStep } = useFormContext();
	const { query } = useRouter();
	const step7State = step7GetState();
	const isUpdated = !!query.success;
	const addedUser = isUpdated
		? step7State?.employee &&
		  step7State.employee.find((employee) => employee.id === query.success)
		: undefined;
	const [isSuccessMessageVisible, setIsSuccessMessageVisible] =
		useState(addedUser);

	useEffect(() => {
		setIsSuccessMessageVisible(addedUser);
	}, [addedUser]);

	const [employeeIdToRemove, setEmployeeIdToRemove] = useState('');
	const [employeeToRemove, setEmployeeToRemove] = useState({});
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const closeModal = () => {
		setEmployeeIdToRemove('');
	};

	const removeEmployeeById = (id: string) => {
		step7SetState({
			...step7GetState,
			employee: step7State.employee.filter((employee) => employee.id !== id),
		});
		closeModal();
	};

	useEffect(() => {
		setModalIsVisible(!!employeeIdToRemove);
		if (employeeIdToRemove) {
			setEmployeeToRemove(
				step7State?.employee &&
					step7State.employee.find(
						(employee) => employee.id === employeeIdToRemove
					)
			);
		}
	}, [employeeIdToRemove, step7State?.employee]);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<Step7FormSchema>({
		defaultValues: step7State,
		resolver: isSavingBeforeExiting ? undefined : zodResolver(step7FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const typeCorrectedErrors = errors as ShallowErrors<Step7FormSchema>;

	const onSubmit: SubmitHandler<Step7FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		step7SetState({
			...data,
			completed: !isSavingBeforeExiting,
			started: true,
		});
	};

	console.log(`step7GetState()`, step7GetState());

	return (
		<FormContainer
			formTitle="Employees"
			formIntroduction="Add your employee details."
			shouldFocusTitle={!isSuccessMessageVisible}
		>
			<Stack gap={3}>
				<Stack gap={2}>
					<PageAlert focusOnMount title="No employees added" tone="error">
						<Text as="p">
							You need to add some staff. You’re amazing, but you can’t do this
							alone. Life is better with friends and team mates.
						</Text>
					</PageAlert>
					<H2 id="list-of-employees">List of employees</H2>
					{isSuccessMessageVisible && (
						<SectionAlert
							focusOnMount
							title="Employee added"
							tone="success"
							onClose={() => setIsSuccessMessageVisible(false)}
						>
							{addedUser.firstName} {addedUser.lastName} has been added as an
							employee.
						</SectionAlert>
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
															console.log(`employee.id`, employee.id);
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
			<StepActions />
			<Modal
				isOpen={modalIsVisible}
				actions={
					<ButtonGroup>
						<Button
							onClick={() => {
								removeEmployeeById(employeeIdToRemove);
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
