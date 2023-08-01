import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import {
	useForm,
	SubmitHandler,
	SubmitErrorHandler,
	Controller,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { DatePicker } from '@ag.ds-next/react/date-picker';
import { DateRangePicker } from '@ag.ds-next/react/date-range-picker';
import { Divider } from '@ag.ds-next/react/divider';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { H1, H2, H3 } from '@ag.ds-next/react/heading';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { PageContent } from '@ag.ds-next/react/content';
import { UnorderedList, ListItem } from '@ag.ds-next/react/list';
import { Select } from '@ag.ds-next/react/select';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { TextInput } from '@ag.ds-next/react/text-input';
import { useScrollToField } from '@ag.ds-next/react/field';

// `yup.date()` can sometimes give false positives with certain string values
// Fixes https://github.com/jquense/yup/issues/764
// Tests for this can be found in `packages/react/src/date-picker/test-utils.ts`
const yupDateField = yup
	.date()
	.transform((current, orig) => (typeof orig === 'string' ? orig : current))
	.typeError('Enter a valid date');

const formSchema = yup
	.object({
		// business details
		abn: yup.string().required('Enter your ABN'),
		acn: yup.string().required('Enter your ACN'),
		businessName: yup.string().required('Enter your business name'),
		registrationDate: yupDateField,
		// entity details
		entityName: yup.string().required('Enter your entity name'),
		entityNumber: yup.string().required('Enter your entity number'),
		periodActive: yup
			.object({
				from: yupDateField
					.required('Enter a valid date')
					// Ensures the start date is always after the end date
					.max(yup.ref('to'), 'Start date must be before the end date'),
				to: yupDateField
					.required('Enter a valid date')
					// Ensures the start date is always after the end date
					.min(yup.ref('from'), 'Start date must be before the end date'),
			})
			.required('Enter a valid date'),
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

type FormSchema = yup.InferType<typeof formSchema>;

const SinglePageForm = () => {
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const errorPageAlertRef = useRef<HTMLDivElement>(null);
	const [hasFocusedErrorRef, setHasFocusedErrorRef] = useState(false);

	const scrollToField = useScrollToField();

	const {
		register,
		control,
		handleSubmit,
		watch,
		trigger,
		formState: { errors, isSubmitted },
	} = useForm<FormSchema>({
		defaultValues: {
			periodActive: { from: undefined, to: undefined },
		},
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		setIsSubmitting(true);
		console.log(data);
		setTimeout(() => {
			setIsSubmitting(false);
			router.push('single-page-form-success');
		}, 2000);
	};

	const onError: SubmitErrorHandler<FormSchema> = (errors, event) => {
		console.log(errors, event);
		setHasFocusedErrorRef(false);
	};

	// Only show the page alert if there is more than 1 error
	const hasErrors = Object.keys(errors).length > 1;

	useEffect(() => {
		if (!(hasErrors || hasFocusedErrorRef)) return;
		errorPageAlertRef.current?.focus();
		setHasFocusedErrorRef(true);
	}, [hasFocusedErrorRef, hasErrors]);

	const isPostalAddressSameAsStreetAddress = watch(
		'isPostalAddressSameAsStreetAddress',
		false
	);

	useEffect(() => {
		if (isSubmitted) trigger();
	}, [isPostalAddressSameAsStreetAddress, trigger, isSubmitted]);

	// As our form schema contains nested objects, we are the converting errors from a nested object to a simple flat array
	const flatErrors = Object.entries(errors)
		.map(([key, value]) => {
			if ('message' in value) return { key, message: value.message };
			if ('from' in value) return { key, message: value.from?.message };
			if ('to' in value) return { key, message: value.to?.message };
		})
		.filter((item): item is { key: string; message: string } =>
			Boolean(item?.message)
		);

	return (
		<form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
			<Stack gap={3}>
				{hasErrors && (
					<PageAlert
						ref={errorPageAlertRef}
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
				<Fieldset
					legend={<H2>Business details (H2)</H2>}
					hint="Supporting information for provide details subheading - sm/default"
				>
					<FormStack>
						<TextInput
							label="Australian Business Number (ABN)"
							{...register('abn')}
							id="abn"
							invalid={Boolean(errors.abn?.message)}
							message={errors.abn?.message}
							required
							inputMode="numeric"
							pattern="[0-9]*"
						/>
						<TextInput
							label="Australian Company Number (ACN)"
							{...register('acn')}
							id="acn"
							invalid={Boolean(errors.acn?.message)}
							message={errors.acn?.message}
							required
							inputMode="numeric"
							pattern="[0-9]*"
						/>
						<TextInput
							label="Business name"
							{...register('businessName')}
							id="businessName"
							invalid={Boolean(errors.businessName?.message)}
							message={errors.businessName?.message}
							required
							maxWidth="xl"
						/>
						<Controller
							control={control}
							name="registrationDate"
							render={({ field: { ref, ...field } }) => (
								<DatePicker
									inputRef={ref}
									label="Registration date"
									{...field}
									onInputChange={field.onChange}
									id="registrationDate"
									invalid={Boolean(errors.registrationDate?.message)}
									message={errors.registrationDate?.message}
								/>
							)}
						/>
					</FormStack>
				</Fieldset>
				<Divider />
				<Fieldset
					legend={<H2>Provide entity details (H2)</H2>}
					hint="Supporting information for provide details subheading - sm/default"
				>
					<FormStack>
						<TextInput
							label="Entity name"
							{...register('entityName')}
							id="entityName"
							invalid={Boolean(errors.entityName?.message)}
							message={errors.entityName?.message}
							required
						/>
						<TextInput
							label="Entity number"
							{...register('entityNumber')}
							id="entityNumber"
							invalid={Boolean(errors.entityNumber?.message)}
							message={errors.entityNumber?.message}
							required
							inputMode="numeric"
							pattern="[0-9]*"
						/>
						<Controller
							control={control}
							name="periodActive"
							render={({ field: { ref, value, onChange, ...field } }) => (
								<DateRangePicker
									legend="Period active"
									fromInputRef={ref}
									{...field}
									id="periodActive"
									value={value}
									onChange={onChange}
									onFromInputChange={(from) => onChange({ ...value, from })}
									onToInputChange={(to) => onChange({ ...value, to })}
									fromInvalid={Boolean(errors.periodActive?.from?.message)}
									toInvalid={Boolean(errors.periodActive?.to?.message)}
									message={
										errors.periodActive?.from?.message ||
										errors.periodActive?.to?.message
									}
									required
								/>
							)}
						/>
					</FormStack>
				</Fieldset>
				<Fieldset legend={<H3>Street address (H3)</H3>}>
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
				<Fieldset legend={<H3>Postal address (H3)</H3>}>
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
				<Divider />
				<ButtonGroup>
					<Button type="submit" loading={isSubmitting}>
						Submit form
					</Button>
					<Button type="button" variant="secondary">
						Cancel
					</Button>
				</ButtonGroup>
			</Stack>
		</form>
	);
};

export const SinglePageFormPage = () => {
	return (
		<PageContent>
			<Columns>
				<Column columnSpan={{ xs: 12, md: 8 }}>
					<Stack gap={3}>
						<Breadcrumbs
							links={[
								{ href: '#', label: 'Home' },
								{ href: '#', label: 'Parent' },
								{ href: '#', label: 'Child' },
								{ label: 'Current page' },
							]}
						/>
						<Stack gap={1.5}>
							<H1>Single-page form (multi-question) xxl/display (H1)</H1>
							<Text as="p" fontSize="md" color="muted">
								Introductory paragraph providing context for this single page of
								the multi-step form. All questions on page must be related -
								md/default (P)
							</Text>
						</Stack>
						<Text fontSize="xs" color="muted">
							All fields are required unless marked optional.
						</Text>
						<SinglePageForm />
					</Stack>
				</Column>
			</Columns>
		</PageContent>
	);
};
