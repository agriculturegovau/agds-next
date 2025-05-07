import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box } from '@ag.ds-next/react/box';
import { Stack } from '@ag.ds-next/react/stack';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { TextInput } from '@ag.ds-next/react/text-input';
import { H2 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { UnorderedList, ListItem } from '@ag.ds-next/react/list';
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
	const headingDetailsRef = useRef<HTMLHeadingElement>(null);
	const headingFormRef = useRef<HTMLHeadingElement>(null);
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
			introduction="Provide the address details for where pet will be housed."
			title="Address details"
		>
			<Stack alignItems="flex-start" gap={3}>
				{isFormVisibile ? (
					<Stack gap={1.5}>
						<H2 focusRingFor="keyboard" ref={headingFormRef} tabIndex={-1}>
							Update address details
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
									{...register('streetAddress')}
									autoComplete="street-address"
									autoFocus
									id="streetAddress"
									invalid={Boolean(errors.streetAddress?.message)}
									label="Street address"
									maxWidth="xl"
									message={errors.streetAddress?.message}
									required
								/>
								<TextInput
									{...register('suburbTownCity')}
									autoComplete="address-level2"
									id="suburbTownCity"
									invalid={Boolean(errors.suburbTownCity?.message)}
									label="Suburb, town or city"
									maxWidth="xl"
									message={errors.suburbTownCity?.message}
									required
								/>
								<Select
									{...register('state')}
									id="state"
									invalid={Boolean(errors.state?.message)}
									label="State or territory"
									maxWidth="md"
									message={errors.state?.message}
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
									placeholder="Select"
									required
								/>
								<TextInput
									{...register('postcode')}
									autoComplete="postal-code"
									id="postcode"
									inputMode="numeric"
									invalid={Boolean(errors.postcode?.message)}
									label="Postcode"
									maxWidth="sm"
									message={errors.postcode?.message}
									pattern="[0-9]*"
									required
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
							<Button
								onClick={() => {
									toggleFormVisibilty();
									setHasOpenedForm(true);
								}}
								variant="text"
							>
								Change address
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
