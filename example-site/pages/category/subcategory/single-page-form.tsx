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
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { UnorderedList, ListItem } from '@ag.ds-next/react/list';
import { Stack } from '@ag.ds-next/react/stack';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { Select } from '@ag.ds-next/react/select';
import { H2, H3 } from '@ag.ds-next/react/heading';
import { TextInput } from '@ag.ds-next/react/text-input';
import { TextLink } from '@ag.ds-next/react/text-link';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { useScrollToField } from '@ag.ds-next/react/field';
import { PageContent } from '@ag.ds-next/react/content';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { DatePicker } from '@ag.ds-next/react/date-picker';
import { DateRangePicker } from '@ag.ds-next/react/date-range-picker';
import { Text } from '@ag.ds-next/react/text';
import { Divider } from '@ag.ds-next/react/divider';
import { SiteLayout } from '../../../components/SiteLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { PageTitle } from '../../../components/PageTitle';

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
					// Ensures the start date is always before the end date
					.max(yup.ref('to'), 'Start date must be before the end date'),
				to: yupDateField
					.required('Enter a valid date')
					// Ensures the end date is always after the start date
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

	// As our form schema contains nested objects, we are converting the errors from a nested object to a simple flat array
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
		<form noValidate onSubmit={handleSubmit(onSubmit, onError)}>
			<Stack gap={3}>
				{hasErrors && (
					<PageAlert
						ref={errorPageAlertRef}
						tabIndex={-1}
						title="There is a problem"
						tone="error"
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
					hint="Supporting information for provide details subheading - sm/default"
					legend={<H2>Business details (H2)</H2>}
				>
					<FormStack>
						<TextInput
							{...register('abn')}
							id="abn"
							inputMode="numeric"
							invalid={Boolean(errors.abn?.message)}
							label="Australian Business Number (ABN)"
							message={errors.abn?.message}
							pattern="[0-9]*"
							required
						/>
						<TextInput
							{...register('acn')}
							id="acn"
							inputMode="numeric"
							invalid={Boolean(errors.acn?.message)}
							label="Australian Company Number (ACN)"
							message={errors.acn?.message}
							pattern="[0-9]*"
							required
						/>
						<TextInput
							{...register('businessName')}
							id="businessName"
							invalid={Boolean(errors.businessName?.message)}
							label="Business name"
							maxWidth="xl"
							message={errors.businessName?.message}
							required
						/>
						<Controller
							control={control}
							name="registrationDate"
							render={({ field: { ref, ...field } }) => (
								<DatePicker
									{...field}
									id="registrationDate"
									inputRef={ref}
									invalid={Boolean(errors.registrationDate?.message)}
									label="Registration date"
									message={errors.registrationDate?.message}
								/>
							)}
						/>
					</FormStack>
				</Fieldset>
				<Divider />
				<Fieldset
					hint="Supporting information for provide details subheading - sm/default"
					legend={<H2>Provide entity details (H2)</H2>}
				>
					<FormStack>
						<TextInput
							{...register('entityName')}
							id="entityName"
							invalid={Boolean(errors.entityName?.message)}
							label="Entity name"
							message={errors.entityName?.message}
							required
						/>
						<TextInput
							{...register('entityNumber')}
							id="entityNumber"
							inputMode="numeric"
							invalid={Boolean(errors.entityNumber?.message)}
							label="Entity number"
							message={errors.entityNumber?.message}
							pattern="[0-9]*"
							required
						/>
						<Controller
							control={control}
							name="periodActive"
							render={({ field: { ref, value, onChange, ...field } }) => (
								<DateRangePicker
									{...field}
									fromInputRef={ref}
									fromInvalid={Boolean(errors.periodActive?.from?.message)}
									id="periodActive"
									legend="Period active"
									message={
										errors.periodActive?.from?.message ||
										errors.periodActive?.to?.message
									}
									onChange={onChange}
									required
									toInvalid={Boolean(errors.periodActive?.to?.message)}
									value={value}
								/>
							)}
						/>
					</FormStack>
				</Fieldset>
				<Fieldset legend={<H3>Street address (H3)</H3>}>
					<FormStack>
						<TextInput
							{...register('streetAddress')}
							id="streetAddress"
							invalid={Boolean(errors.streetAddress?.message)}
							label="Street address"
							maxWidth="xl"
							message={errors.streetAddress?.message}
							required
						/>
						<TextInput
							{...register('suburbTownCity')}
							id="suburbTownCity"
							invalid={Boolean(errors.suburbTownCity?.message)}
							label="Suburb, town or city"
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
									{...register('postalAddress')}
									id="postalAddress"
									invalid={Boolean(errors.postalAddress?.message)}
									label="Postal address"
									maxWidth="xl"
									message={errors.postalAddress?.message}
									required
								/>
								<TextInput
									{...register('postalSuburbTownCity')}
									id="postalSuburbTownCity"
									invalid={Boolean(errors.postalSuburbTownCity?.message)}
									label="Suburb, town or city"
									message={errors.postalSuburbTownCity?.message}
									required
								/>
								<Select
									{...register('postalState')}
									id="postalState"
									invalid={Boolean(errors.postalState?.message)}
									label="State or territory"
									maxWidth="md"
									message={errors.postalState?.message}
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
									{...register('postalPostcode')}
									id="postalPostcode"
									inputMode="numeric"
									invalid={Boolean(errors.postalPostcode?.message)}
									label="Postcode"
									maxWidth="sm"
									message={errors.postalPostcode?.message}
									pattern="[0-9]*"
									required
								/>
							</FormStack>
						)}
					</FormStack>
				</Fieldset>
				<Divider />
				<ButtonGroup>
					<Button loading={isSubmitting} type="submit">
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

export default function SinglePageFormPage() {
	return (
		<>
			<DocumentTitle title="Single-page form example" />
			<SiteLayout
				template={{ name: 'Single-page form', slug: 'single-page-form' }}
			>
				<PageContent>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 8 }}>
							<Stack gap={3}>
								<Breadcrumbs
									links={[
										{ href: '/', label: 'Home' },
										{ href: '/category', label: 'Category 1' },
										{
											href: '/category/subcategory',
											label: 'Subcategory page',
										},
										{ label: 'Single-page form' },
									]}
								/>
								<PageTitle
									introduction="Introductory paragraph providing context for this single
									page of the multi-step form. All questions on page must be
									related - md/default (P)"
									title="Single-page form (multi-question) xxl/display (H1)"
								/>
								<Text color="muted" fontSize="xs">
									All fields are required unless marked optional.
								</Text>
								<SinglePageForm />
							</Stack>
						</Column>
					</Columns>
				</PageContent>
			</SiteLayout>
		</>
	);
}
