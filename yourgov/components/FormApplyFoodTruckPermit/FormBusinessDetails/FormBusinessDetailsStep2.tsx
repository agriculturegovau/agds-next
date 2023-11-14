import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { UnorderedList, ListItem } from '@ag.ds-next/react/list';
import { Stack } from '@ag.ds-next/react/stack';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { Select } from '@ag.ds-next/react/select';
import { TextInput } from '@ag.ds-next/react/text-input';
import { TextLink } from '@ag.ds-next/react/text-link';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { useScrollToField } from '@ag.ds-next/react/field';
import { Text } from '@ag.ds-next/react/text';
import { FormRequiredFieldsMessage } from '../../FormRequiredFieldsMessage';
import { useFormBusinessDetails } from './FormBusinessDetails';
import { FormBusinessDetailsActions } from './FormBusinessDetailsActions';
import { FormBusinessDetailsContainer } from './FormBusinessDetailsContainer';

export const formSchema = yup
	.object({
		// street address
		streetAddress: yup.string().required('Enter your street address'),
		suburbTownCity: yup.string().required('Enter your suburb, town or city'),
		state: yup.string().required('Enter your state'),
		postcode: yup.string().required('Enter your postcode'),
		// postal address
		isPostalAddressSameAsStreetAddress: yup.boolean(),
		postalAddress: yup.string().when('isPostalAddressSameAsStreetAddress', {
			is: false,
			then: yup.string().required('Enter your postal address'),
		}),
		postalSuburbTownCity: yup
			.string()
			.when('isPostalAddressSameAsStreetAddress', {
				is: false,
				then: yup.string().required('Enter your suburb, town or city'),
			}),
		postalState: yup.string().when('isPostalAddressSameAsStreetAddress', {
			is: false,
			then: yup.string().required('Enter your state'),
		}),
		postalPostcode: yup.string().when('isPostalAddressSameAsStreetAddress', {
			is: false,
			then: yup.string().required('Enter your postcode'),
		}),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormBusinessDetailsStep2 = () => {
	const { next, stepFormState } = useFormBusinessDetails();
	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		defaultValues: {
			isPostalAddressSameAsStreetAddress: true,
			...stepFormState,
		},
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		setFocusedError(false);
		next(data);
	};

	const onError = () => {
		setFocusedError(false);
	};

	// As our form schema contains nested objects, we are the converting errors from a nested object to a simple flat array
	const flatErrors = Object.entries(errors)
		.map(([key, value]) => {
			if ('message' in value) return { key, message: value.message };
		})
		.filter((item): item is { key: string; message: string } =>
			Boolean(item?.message)
		);

	// Only show the page alert if there is more than 1 error
	const hasErrors = Object.keys(errors).length > 1;

	useEffect(() => {
		if (hasErrors && !focusedError) {
			errorRef.current?.focus();
			setFocusedError(true);
		}
	}, [hasErrors, focusedError, errors]);

	const isPostalAddressSameAsStreetAddress = watch(
		'isPostalAddressSameAsStreetAddress',
		false
	);

	console.log({ isPostalAddressSameAsStreetAddress });

	return (
		<FormBusinessDetailsContainer
			title="Business address"
			introduction="Add your business address."
			callToAction={<FormRequiredFieldsMessage />}
		>
			<Stack
				as="form"
				gap={3}
				onSubmit={handleSubmit(onSubmit, onError)}
				noValidate
			>
				{hasErrors && (
					<PageAlert
						ref={errorRef}
						tabIndex={-1}
						tone="error"
						title="There is a problem"
					>
						<Text as="p">
							Please correct the following fields and try again
						</Text>
						<UnorderedList>
							{flatErrors.map((error) => (
								<ListItem key={error.key}>
									<TextLink href={`#${error.key}`} onClick={scrollToField}>
										{error.message}
									</TextLink>
								</ListItem>
							))}
						</UnorderedList>
					</PageAlert>
				)}
				<FormStack>
					<Fieldset legend="Street address">
						<FormStack>
							<TextInput
								label="Street address"
								{...register('streetAddress')}
								id="streetAddress"
								invalid={Boolean(errors.streetAddress?.message)}
								message={errors.streetAddress?.message}
								required
								maxWidth="xl"
							/>
							<TextInput
								label="Suburb, town or city"
								{...register('suburbTownCity')}
								id="suburbTownCity"
								invalid={Boolean(errors.suburbTownCity?.message)}
								message={errors.suburbTownCity?.message}
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
								required
								maxWidth="md"
							/>
							<TextInput
								label="Postcode"
								{...register('postcode')}
								id="postcode"
								invalid={Boolean(errors.postcode?.message)}
								message={errors.postcode?.message}
								maxWidth="sm"
								inputMode="numeric"
								pattern="[0-9]*"
								required
							/>
						</FormStack>
					</Fieldset>
					<Fieldset legend="Postal address">
						<FormStack>
							<Checkbox
								{...register('isPostalAddressSameAsStreetAddress')}
								id="isPostalAddressSameAsStreetAddress"
							>
								Same as street address
							</Checkbox>
							{!isPostalAddressSameAsStreetAddress && (
								<FormStack>
									<TextInput
										label="Postal address"
										{...register('postalAddress')}
										id="postalAddress"
										invalid={Boolean(errors.postalAddress?.message)}
										message={errors.postalAddress?.message}
										required
										maxWidth="xl"
									/>
									<TextInput
										label="Suburb, town or city"
										{...register('postalSuburbTownCity')}
										id="postalSuburbTownCity"
										invalid={Boolean(errors.postalSuburbTownCity?.message)}
										message={errors.postalSuburbTownCity?.message}
										required
									/>
									<Select
										label="State or territory"
										{...register('postalState')}
										id="postalState"
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
										invalid={Boolean(errors.postalState?.message)}
										message={errors.postalState?.message}
										required
										maxWidth="md"
									/>
									<TextInput
										label="Postcode"
										{...register('postalPostcode')}
										id="postalPostcode"
										invalid={Boolean(errors.postalPostcode?.message)}
										message={errors.postalPostcode?.message}
										maxWidth="sm"
										required
										inputMode="numeric"
										pattern="[0-9]*"
									/>
								</FormStack>
							)}
						</FormStack>
					</Fieldset>
				</FormStack>
				<FormBusinessDetailsActions />
			</Stack>
		</FormBusinessDetailsContainer>
	);
};
