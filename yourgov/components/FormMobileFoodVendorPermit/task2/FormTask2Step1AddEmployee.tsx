import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from '@ag.ds-next/react/stack';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { TextInput } from '@ag.ds-next/react/text-input';
import { H1 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { ListItem, UnorderedList } from '@ag.ds-next/react/list';
import { TextLink } from '@ag.ds-next/react/text-link';
import { useScrollToField } from '@ag.ds-next/react/field';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Divider } from '@ag.ds-next/react/divider';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { Callout } from '@ag.ds-next/react/callout';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { FormRequiredFieldsMessage } from '../../FormRequiredFieldsMessage';
import { useGlobalForm } from '../GlobalFormProvider';
import {
	Task2Step1EmployeeSchema,
	task2Step1EmployeeSchema,
} from './FormTask2FormState';

export function FormTask2Step1AddEmployee() {
	const router = useRouter();
	const employeeId = router.query.employeeId;
	const { formState, setFormState, typeSearchParm } = useGlobalForm();

	const employeeList = formState.task2?.step1?.employeeList || [];

	console.log('FormTask2Step1AddEmployee', { formState });

	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const storedEmployee = employeeList.find((emp) => emp?.email === employeeId);

	console.log({ storedEmployee, employeeId });

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Task2Step1EmployeeSchema>({
		defaultValues: storedEmployee,
		resolver: zodResolver(task2Step1EmployeeSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const [isSaving, setIsSaving] = useState(false);

	const step1Path = `/app/licences-and-permits/apply/mobile-food-vendor-permit/form/task-2/step-1?type=${typeSearchParm}`;

	const onSubmit: SubmitHandler<Task2Step1EmployeeSchema> = (data) => {
		console.log('onSubmit', { data });
		setFocusedError(false);
		setIsSaving(true);
		// Using a `setTimeout` to replicate a call to a back-end API
		setTimeout(() => {
			setIsSaving(false);
			// bring in lodash set() (warning: lodash set() mutates so need to handle that or look for an alternative)
			setFormState({
				...formState,
				task2: {
					...formState.task2,
					step1: {
						...formState.task2?.step1,
						employeeList: [...employeeList, data],
					},
				},
			});
			router.push(step1Path);
		}, 1500);
	};

	function onDiscardChangesClick() {
		router.push(step1Path);
	}

	const onError: SubmitErrorHandler<Task2Step1EmployeeSchema> = () => {
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

	const titleRef = useRef<HTMLHeadingElement>(null);

	// Focus the title when the user navigates to this page
	// This usually happens in `FormContainer` component but we can't use that component here
	useEffect(() => {
		titleRef.current?.focus();
	}, []);

	const errorList = Object.entries(errors);

	return (
		<Columns>
			<Column columnSpan={{ xs: 12, md: 8 }}>
				<Stack gap={3} alignItems="flex-start">
					<DirectionLink direction="left" href={step1Path}>
						Back
					</DirectionLink>
					<Stack gap={1.5}>
						<H1 ref={titleRef} tabIndex={-1} focus>
							Add employee
						</H1>
						<Text as="p" fontSize="md" color="muted">
							Provide your employee’s name and email.
						</Text>
						<FormRequiredFieldsMessage />
					</Stack>
					<Stack gap={1.5} width="100%">
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
											{errorList?.map(([key, value]) => (
												<ListItem key={key}>
													<TextLink href={`#${key}`} onClick={scrollToField}>
														{Array.isArray(value)
															? value[0].message
															: value.message}
													</TextLink>
												</ListItem>
											))}
										</UnorderedList>
									</PageAlert>
								)}
								<TextInput
									label="Given name/s"
									autoComplete="given-name"
									{...register('firstName')}
									id="firstName"
									invalid={Boolean(errors?.firstName?.message)}
									message={errors?.firstName?.message}
									maxWidth="xl"
									required
								/>
								<TextInput
									label="Family name"
									autoComplete="family-name"
									{...register('lastName')}
									id="lastName"
									invalid={Boolean(errors?.lastName?.message)}
									message={errors?.lastName?.message}
									maxWidth="xl"
									required
								/>
								<TextInput
									label="Email"
									type="email"
									autoComplete="email"
									{...register('email')}
									id="email"
									invalid={Boolean(errors?.email?.message)}
									message={errors?.email?.message}
									maxWidth="xl"
									hint="An invite to link this business to their yourGov account will be sent to this address"
									required
								/>
							</FormStack>
							<Callout
								tone="info"
								title="Employees will be invited to link this business to their yourGov account"
								variant="compact"
							>
								<Text as="p">
									Business owners can grant permission to manage permits and
									licences to employees who accept the email invitation. Linking
									is optional and employees can choose to link or unlink a
									business at any time.
								</Text>
							</Callout>
							<Divider />
							<ButtonGroup>
								<Button type="submit" loading={isSaving}>
									Add employee
								</Button>
								<Button variant="tertiary" onClick={onDiscardChangesClick}>
									Cancel
								</Button>
							</ButtonGroup>
						</Stack>
					</Stack>
				</Stack>
			</Column>
		</Columns>
	);
}
