import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Stack } from '@ag.ds-next/box';
import { Button } from '@ag.ds-next/button';
import { FormStack } from '@ag.ds-next/form-stack';
import { TextInput } from '@ag.ds-next/text-input';
import { H2 } from '@ag.ds-next/heading';
import { Prose } from '@ag.ds-next/prose';
import { useScrollToField } from '@ag.ds-next/field';
import { useToggleState } from '@ag.ds-next/core';
import { PageAlert } from '@ag.ds-next/page-alert';
import { Select } from '@ag.ds-next/select';
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

const formSchema = yup
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
	const [focusedError, setFocusedError] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		defaultValues: stepFormState,
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		setFocusedError(false);
		next(data);
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
							<FormRegisterPetPersonalDetailsActions />
						</Stack>
					</Stack>
				) : (
					<>
						<Stack gap={1.5} alignItems="flex-start" width="100%">
							<H2>Check address details</H2>
							<DefinitionList>
								<DefinitionListItem>
									<DefinitionTerm>Street address</DefinitionTerm>
									<DefinitionDescription>
										{stepFormState.streetAddress}
									</DefinitionDescription>
								</DefinitionListItem>
								<DefinitionListItem>
									<DefinitionTerm>Suburb, town or city</DefinitionTerm>
									<DefinitionDescription>
										{stepFormState.suburbTownCity}
									</DefinitionDescription>
								</DefinitionListItem>
								<DefinitionListItem>
									<DefinitionTerm>State</DefinitionTerm>
									<DefinitionDescription>
										{stepFormState.state}
									</DefinitionDescription>
								</DefinitionListItem>
								<DefinitionListItem>
									<DefinitionTerm>Post code</DefinitionTerm>
									<DefinitionDescription>
										{stepFormState.postcode}
									</DefinitionDescription>
								</DefinitionListItem>
							</DefinitionList>
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
