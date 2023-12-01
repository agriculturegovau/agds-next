import { Fragment, useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@ag.ds-next/react/stack';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { TextInput } from '@ag.ds-next/react/text-input';
import { H2 } from '@ag.ds-next/react/heading';
import { Prose } from '@ag.ds-next/react/prose';
import { Text } from '@ag.ds-next/react/text';
import { ListItem, UnorderedList } from '@ag.ds-next/react/list';
import { TextLink } from '@ag.ds-next/react/text-link';
import { Details } from '@ag.ds-next/react/details';
import { useScrollToField } from '@ag.ds-next/react/field';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';
import { FormRequiredFieldsMessage } from '../FormRequiredFieldsMessage';
import { useGlobalForm } from './GlobalFormProvider';
import { FormActions } from './FormActions';
import { FormTask1Container } from './FormTask1Container';
import { useFormTask1Context } from './FormTask1Provider';
import {
	task1Step1FormSchema,
	Task1Step1FormSchema,
	task1Step1Part2FormSchema,
	Task1Step1Part2FormSchema,
} from './FormTask1FormState';

export function FormTask1Step1() {
	const { isSideFlow, setIsSideFlow, formState } = useGlobalForm();

	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const defaultValues = formState.task1?.step1;

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Task1Step1FormSchema>({
		defaultValues: defaultValues,
		resolver: yupResolver(task1Step1FormSchema),
	});

	const [hasClosedForm, setHasClosedForm] = useState(false);
	const [localFormState, setLocalFormState] = useState(defaultValues);
	const [isSaving, setIsSaving] = useState(false);

	const onSave: SubmitHandler<Task1Step1FormSchema> = (data) => {
		setFocusedError(false);
		setIsSaving(true);
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		setLocalFormState(data);
		// Using a `setTimeout` to replicate a call to a back-end API
		setTimeout(() => {
			setIsSaving(false);
			setIsSideFlow(false);
			setHasClosedForm(true);
		}, 1500);
	};

	function onDiscardChangesClick() {
		reset();
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

	const onError: SubmitErrorHandler<Task1Step1FormSchema> = () => {
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

	return (
		<FormTask1Container
			formTitle="Owner details"
			formIntroduction="Confirm your name and contact details."
			formCallToAction={isSideFlow ? <FormRequiredFieldsMessage /> : undefined}
		>
			<Stack gap={3} alignItems="flex-start" width="100%">
				{isSideFlow ? (
					<Stack gap={1.5} width="100%">
						<H2>Update personal details</H2>
						<FormRequiredFieldsMessage />
						<Stack
							as="form"
							gap={3}
							onSubmit={handleSubmit(onSave, onError)}
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
									label="First name"
									autoComplete="given-name"
									{...register('firstName')}
									id="firstName"
									invalid={Boolean(errors.firstName?.message)}
									message={errors.firstName?.message}
									maxWidth="xl"
									autoFocus
									required
								/>
								<TextInput
									label="Last name"
									autoComplete="family-name"
									{...register('lastName')}
									id="lastName"
									invalid={Boolean(errors.lastName?.message)}
									message={errors.lastName?.message}
									maxWidth="xl"
									required
								/>
								<TextInput
									label="Email"
									type="email"
									autoComplete="email"
									{...register('email')}
									id="email"
									invalid={Boolean(errors.email?.message)}
									message={errors.email?.message}
									maxWidth="xl"
									required
								/>
							</FormStack>
							<ButtonGroup>
								<Button type="submit" loading={isSaving}>
									Save changes
								</Button>
								<Button variant="tertiary" onClick={onDiscardChangesClick}>
									Discard changes
								</Button>
							</ButtonGroup>
						</Stack>
					</Stack>
				) : (
					<Fragment>
						<Stack gap={1.5} alignItems="flex-start" width="100%">
							<H2 ref={headingRef} tabIndex={-1} focus>
								Confirm business owner details
							</H2>
							<Details label="How were my details prefilled?" iconBefore>
								<Prose>
									<p>
										We’re working hard to improve the way we do business with
										you. This includes making applications and registrations
										easier to use.
									</p>
									<p>
										If we already have some of the information you need to tell
										us, we’ll pre-fill it into your applications. This saves you
										entering all your details yourself.
									</p>
									<p>
										It’s important to check the pre-filled information in your
										report before you submit it.
									</p>
								</Prose>
							</Details>
							<SummaryList>
								<SummaryListItem>
									<SummaryListItemTerm>First name</SummaryListItemTerm>
									<SummaryListItemDescription>
										{localFormState?.firstName}
									</SummaryListItemDescription>
								</SummaryListItem>
								<SummaryListItem>
									<SummaryListItemTerm>Last name</SummaryListItemTerm>
									<SummaryListItemDescription>
										{localFormState?.lastName}
									</SummaryListItemDescription>
								</SummaryListItem>
								<SummaryListItem>
									<SummaryListItemTerm>Email</SummaryListItemTerm>
									<SummaryListItemDescription>
										{localFormState?.email}
									</SummaryListItemDescription>
								</SummaryListItem>
							</SummaryList>
							<Button variant="text" onClick={changeDetails}>
								Change details
							</Button>
						</Stack>
						<AdditionalDetailsForm />
					</Fragment>
				)}
			</Stack>
		</FormTask1Container>
	);
}

function AdditionalDetailsForm() {
	const { formState, setFormState } = useGlobalForm();
	const { submitStep } = useFormTask1Context();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Task1Step1Part2FormSchema>({
		defaultValues: {
			contactPhoneNumber: formState.task1?.step1?.contactPhoneNumber,
		},
		resolver: yupResolver(task1Step1Part2FormSchema),
	});

	const onSubmit: SubmitHandler<Task1Step1Part2FormSchema> = async (data) => {
		await submitStep();
		setFormState({
			...formState,
			task1: {
				...formState.task1,
				step1: { ...formState.task1?.step1, ...data, completed: true },
			},
		});
	};

	return (
		<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)} noValidate>
			<Stack gap={1.5}>
				<H2>Additional details</H2>
				<TextInput
					label="Contact phone number"
					hint="Any Australian mobile or landline, for example 0444111222 or 02 9988 7766"
					id="contactPhoneNumber"
					{...register('contactPhoneNumber')}
					invalid={Boolean(errors.contactPhoneNumber?.message)}
					message={errors.contactPhoneNumber?.message}
					required
				/>
			</Stack>
			<FormActions />
		</Stack>
	);
}
