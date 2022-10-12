import { useEffect, useRef, useState } from 'react';
import {
	useForm,
	SubmitHandler,
	SubmitErrorHandler,
	Controller,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Stack } from '@ag.ds-next/box';
import { Button, ButtonGroup } from '@ag.ds-next/button';
import { FormStack } from '@ag.ds-next/form-stack';
import { TextInput } from '@ag.ds-next/text-input';
import { DatePicker } from '@ag.ds-next/date-picker';
import { H2 } from '@ag.ds-next/heading';
import { Prose } from '@ag.ds-next/prose';
import { Details } from '@ag.ds-next/details';
import { useScrollToField } from '@ag.ds-next/field';
import { useToggleState } from '@ag.ds-next/core';
import { PageAlert } from '@ag.ds-next/page-alert';
import {
	DefinitionDescription,
	DefinitionList,
	DefinitionListItem,
	DefinitionTerm,
} from '../DefinitionList';
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
	const headingRef = useRef<HTMLHeadingElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		control,
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm<FormSchema>({
		defaultValues: stepFormState,
		resolver: yupResolver(formSchema),
	});

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
		}, 1500);
	};

	useEffect(() => {
		if (isFormVisibile || !isSubmitSuccessful) return;
		headingRef.current?.focus();
	}, [headingRef, isFormVisibile, isSubmitSuccessful]);

	const onDiscardChangesClick = () => {
		reset();
		toggleFormVisibilty();
	};

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
			title="Personal details"
			introduction="Confirm if these prefilled details from your account are still correct."
			callToAction={
				<Details label="How were my details prefilled?" iconBefore>
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
		>
			<Stack gap={3} alignItems="flex-start" width="100%">
				{isFormVisibile ? (
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
										<Prose>
											<p>Please correct the following fields and try again</p>
											<ul>
												{Object.entries(errors).map(([key, value]) => (
													<li key={key}>
														<a href={`#${key}`} onClick={scrollToField}>
															{Array.isArray(value)
																? value[0].message
																: value.message}
														</a>
													</li>
												))}
											</ul>
										</Prose>
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
								<Controller
									control={control}
									name="dob"
									render={({ field: { ref, ...field } }) => (
										<DatePicker
											inputRef={ref}
											label="Date of birth"
											{...field}
											id="dob"
											invalid={Boolean(errors.dob?.message)}
											message={errors.dob?.message}
											maxWidth="xl"
											required
										/>
									)}
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
					<>
						<Stack gap={1.5} alignItems="flex-start" width="100%">
							<H2 ref={headingRef} tabIndex={-1} focus>
								Check personal details
							</H2>
							<DefinitionList>
								<DefinitionListItem>
									<DefinitionTerm>First name</DefinitionTerm>
									<DefinitionDescription>
										{localFormState.firstName}
									</DefinitionDescription>
								</DefinitionListItem>
								<DefinitionListItem>
									<DefinitionTerm>Last name</DefinitionTerm>
									<DefinitionDescription>
										{localFormState.lastName}
									</DefinitionDescription>
								</DefinitionListItem>
								<DefinitionListItem>
									<DefinitionTerm>Email</DefinitionTerm>
									<DefinitionDescription>
										{localFormState.email}
									</DefinitionDescription>
								</DefinitionListItem>
								<DefinitionListItem>
									<DefinitionTerm>Date of birth</DefinitionTerm>
									<DefinitionDescription>
										{localFormState.dob?.toLocaleDateString()}
									</DefinitionDescription>
								</DefinitionListItem>
							</DefinitionList>
							<Button variant="text" onClick={() => toggleFormVisibilty()}>
								Change personal details
							</Button>
						</Stack>
						<Box as="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
							<FormRegisterPetPersonalDetailsActions />
						</Box>
					</>
				)}
			</Stack>
		</FormRegisterPetPersonalDetailsContainer>
	);
};
