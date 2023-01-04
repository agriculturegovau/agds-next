import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Stack } from '@ag.ds-next/react/box';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { TextInput } from '@ag.ds-next/react/text-input';
import { H2 } from '@ag.ds-next/react/heading';
import { Prose } from '@ag.ds-next/react/prose';
import { useScrollToField } from '@ag.ds-next/react/field';
import { useToggleState } from '@ag.ds-next/react/core';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Select } from '@ag.ds-next/react/select';
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
		streetAddress: yup.string().required('Enter your address'),
		suburbTownCity: yup.string().required('Enter your suburb'),
		state: yup.string().required('Enter your state'),
		postcode: yup
			.string()
			.length(4, 'Invalid postcode')
			.required('Enter your postcode'),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormRegisterPetPersonalDetailsStep1 = () => {
	const [isFormVisibile, toggleFormVisibilty] = useToggleState(false, true);
	const { next, stepFormState } = useFormRegisterPetPersonalDetails();
	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormSchema>({
		defaultValues: stepFormState,
		resolver: yupResolver(formSchema),
	});

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
		if (!hasClosedForm) return;
		headingRef.current?.focus();
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
			title="Address details"
			introduction="Provide the address details for where pet will be housed."
		>
			<Stack gap={3} alignItems="flex-start">
				{isFormVisibile ? (
					<Stack gap={1.5}>
						<H2>Update address details</H2>
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
									label="Street address"
									autoComplete="street-address"
									{...register('streetAddress')}
									id="streetAddress"
									invalid={Boolean(errors.streetAddress?.message)}
									message={errors.streetAddress?.message}
									maxWidth="xl"
									autoFocus
									required
								/>
								<TextInput
									label="Suburb, town or city"
									autoComplete="address-level2"
									{...register('suburbTownCity')}
									id="suburbTownCity"
									invalid={Boolean(errors.suburbTownCity?.message)}
									message={errors.suburbTownCity?.message}
									maxWidth="xl"
									required
								/>
								<Select
									label="State or territory"
									{...register('state')}
									id="state"
									placeholder="Select"
									options={[
										{ label: 'NSW', value: 'nsw' },
										{ label: 'QLD', value: 'qld' },
										{ label: 'ACT', value: 'act' },
										{ label: 'VIC', value: 'vic' },
										{ label: 'TAS', value: 'tas' },
										{ label: 'NT', value: 'nt' },
										{ label: 'SA', value: 'sa' },
										{ label: 'WA', value: 'wa' },
									]}
									invalid={Boolean(errors.state?.message)}
									message={errors.state?.message}
									maxWidth="md"
									required
								/>
								<TextInput
									label="Postcode"
									inputMode="numeric"
									pattern="[0-9]*"
									autoComplete="postal-code"
									{...register('postcode')}
									id="postcode"
									invalid={Boolean(errors.postcode?.message)}
									message={errors.postcode?.message}
									maxWidth="sm"
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
					<>
						<Stack gap={1.5} alignItems="flex-start" width="100%">
							<H2 ref={headingRef} tabIndex={-1} focus>
								Check address details
							</H2>
							<SummaryList>
								<SummaryListItem>
									<SummaryListItemTerm>Street address</SummaryListItemTerm>
									<SummaryListItemDescription>
										{localFormState.streetAddress}
									</SummaryListItemDescription>
								</SummaryListItem>
								<SummaryListItem>
									<SummaryListItemTerm>
										Suburb, town or city
									</SummaryListItemTerm>
									<SummaryListItemDescription>
										{localFormState.suburbTownCity}
									</SummaryListItemDescription>
								</SummaryListItem>
								<SummaryListItem>
									<SummaryListItemTerm>State</SummaryListItemTerm>
									<SummaryListItemDescription>
										{localFormState.state}
									</SummaryListItemDescription>
								</SummaryListItem>
								<SummaryListItem>
									<SummaryListItemTerm>Post code</SummaryListItemTerm>
									<SummaryListItemDescription>
										{localFormState.postcode}
									</SummaryListItemDescription>
								</SummaryListItem>
							</SummaryList>
							<Button variant="text" onClick={() => toggleFormVisibilty()}>
								Change address
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
