import { useEffect, useRef, useState } from 'react';
import {
	useForm,
	SubmitHandler,
	SubmitErrorHandler,
	Controller,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import format from 'date-fns/format';
import { Box } from '@ag.ds-next/react/box';
import { Stack } from '@ag.ds-next/react/stack';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { TextInput } from '@ag.ds-next/react/text-input';
import { DatePicker } from '@ag.ds-next/react/date-picker';
import { H2 } from '@ag.ds-next/react/heading';
import { Prose } from '@ag.ds-next/react/prose';
import { Text } from '@ag.ds-next/react/text';
import { ListItem, UnorderedList } from '@ag.ds-next/react/list';
import { TextLink } from '@ag.ds-next/react/text-link';
import { Details } from '@ag.ds-next/react/details';
import { useScrollToField } from '@ag.ds-next/react/field';
import { useToggleState } from '@ag.ds-next/react/core';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';
import { FormRequiredFieldsMessage } from '../FormRequiredFieldsMessage';
import { FormRegisterPetPersonalDetailsContainer } from './FormRegisterPetPersonalDetailsContainer';
import { FormRegisterPetPersonalDetailsActions } from './FormRegisterPetPersonalDetailsActions';
import { useFormRegisterPetPersonalDetails } from './FormRegisterPetPersonalDetails';

export const formSchema = yup
	.object({
		firstName: yup.string().required('Enter your first name'),
		lastName: yup.string().required('Enter your first name'),
		email: yup
			.string()
			.email('Enter a valid email')
			.required('Enter your email'),
		dob: yup.date().required('Enter your date of birth'),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormRegisterPetPersonalDetailsStep0 = () => {
	const [isFormVisibile, toggleFormVisibilty] = useToggleState(false, true);
	const { next, stepFormState } = useFormRegisterPetPersonalDetails();
	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const headingDetailsRef = useRef<HTMLHeadingElement>(null);
	const headingFormRef = useRef<HTMLHeadingElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		control,
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormSchema>({
		defaultValues: stepFormState,
		resolver: yupResolver(formSchema),
	});

	const [hasOpenedForm, setHasOpenedForm] = useState(false);
	const [hasClosedForm, setHasClosedForm] = useState(false);
	const [localFormState, setLocalFormState] = useState(stepFormState);
	const [isSaving, setIsSaving] = useState(false);

	const onSave: SubmitHandler<FormSchema> = (data) => {
		setFocusedError(false);
		setIsSaving(true);
		setLocalFormState(data);
		// Using a `setTimeout` to replicate a call to a back-end API
		setTimeout(() => {
			setIsSaving(false);
			toggleFormVisibilty();
			setHasClosedForm(true);
		}, 1500);
	};

	const onDiscardChangesClick = () => {
		reset();
		toggleFormVisibilty();
		setHasClosedForm(true);
	};

	useEffect(() => {
		if (!hasOpenedForm) return;
		headingFormRef.current?.focus();
		setHasOpenedForm(false);
	}, [hasOpenedForm]);

	useEffect(() => {
		if (!hasClosedForm) return;
		headingDetailsRef.current?.focus();
		setHasClosedForm(false);
	}, [hasClosedForm]);

	const onSubmit: SubmitHandler<FormSchema> = () => {
		next(localFormState);
	};

	const onError: SubmitErrorHandler<FormSchema> = () => {
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
		<FormRegisterPetPersonalDetailsContainer
			callToAction={
				<Details iconBefore label="How were my details prefilled?">
					<Prose>
						<p>
							We’re working hard to improve the way we do business with you.
							This includes making applications and registrations easier to use.
						</p>
						<p>
							If we already have some of the information you need to tell us,
							we’ll pre-fill it into your applications. This saves you entering
							all your details yourself.
						</p>
						<p>
							It’s important to check the pre-filled information in your report
							before you submit it.
						</p>
					</Prose>
				</Details>
			}
			introduction="Confirm if these prefilled details from your account are still correct."
			title="Personal details"
		>
			<Stack alignItems="flex-start" gap={3} width="100%">
				{isFormVisibile ? (
					<Stack gap={1.5} width="100%">
						<H2 focusRingFor="keyboard" ref={headingFormRef} tabIndex={-1}>
							Update personal details
						</H2>
						<FormRequiredFieldsMessage />
						<Stack
							as="form"
							gap={3}
							noValidate
							onSubmit={handleSubmit(onSave, onError)}
						>
							<FormStack>
								{hasErrors && (
									<PageAlert
										ref={errorRef}
										tabIndex={-1}
										title="There is a problem"
										tone="error"
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
									{...register('firstName')}
									autoComplete="given-name"
									autoFocus
									id="firstName"
									invalid={Boolean(errors.firstName?.message)}
									label="First name"
									maxWidth="xl"
									message={errors.firstName?.message}
									required
								/>
								<TextInput
									{...register('lastName')}
									autoComplete="family-name"
									id="lastName"
									invalid={Boolean(errors.lastName?.message)}
									label="Last name"
									maxWidth="xl"
									message={errors.lastName?.message}
									required
								/>
								<TextInput
									{...register('email')}
									autoComplete="email"
									id="email"
									invalid={Boolean(errors.email?.message)}
									label="Email"
									maxWidth="xl"
									message={errors.email?.message}
									required
									type="email"
								/>
								<Controller
									control={control}
									name="dob"
									render={({ field: { ref, ...field } }) => (
										<DatePicker
											{...field}
											id="dob"
											inputRef={ref}
											invalid={Boolean(errors.dob?.message)}
											label="Date of birth"
											maxWidth="xl"
											message={errors.dob?.message}
											required
										/>
									)}
								/>
							</FormStack>
							<ButtonGroup>
								<Button loading={isSaving} type="submit">
									Save changes
								</Button>
								<Button onClick={onDiscardChangesClick} variant="tertiary">
									Discard changes
								</Button>
							</ButtonGroup>
						</Stack>
					</Stack>
				) : (
					<>
						<Stack alignItems="flex-start" gap={1.5} width="100%">
							<H2 focusRingFor="keyboard" ref={headingDetailsRef} tabIndex={-1}>
								Check personal details
							</H2>
							<SummaryList>
								<SummaryListItem>
									<SummaryListItemTerm>First name</SummaryListItemTerm>
									<SummaryListItemDescription>
										{localFormState.firstName}
									</SummaryListItemDescription>
								</SummaryListItem>
								<SummaryListItem>
									<SummaryListItemTerm>Last name</SummaryListItemTerm>
									<SummaryListItemDescription>
										{localFormState.lastName}
									</SummaryListItemDescription>
								</SummaryListItem>
								<SummaryListItem>
									<SummaryListItemTerm>Email</SummaryListItemTerm>
									<SummaryListItemDescription>
										{localFormState.email}
									</SummaryListItemDescription>
								</SummaryListItem>
								<SummaryListItem>
									<SummaryListItemTerm>Date of birth</SummaryListItemTerm>
									<SummaryListItemDescription>
										{format(localFormState.dob, 'dd/MM/yyyy')}
									</SummaryListItemDescription>
								</SummaryListItem>
							</SummaryList>
							<Button
								onClick={() => {
									toggleFormVisibilty();
									setHasOpenedForm(true);
								}}
								variant="text"
							>
								Change personal details
							</Button>
						</Stack>
						<Box as="form" onSubmit={handleSubmit(onSubmit)} width="100%">
							<FormRegisterPetPersonalDetailsActions />
						</Box>
					</>
				)}
			</Stack>
		</FormRegisterPetPersonalDetailsContainer>
	);
};
