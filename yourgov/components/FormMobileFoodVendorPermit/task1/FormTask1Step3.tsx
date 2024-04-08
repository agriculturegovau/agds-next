import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { useScrollToField } from '@ag.ds-next/react/field';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { ListItem, UnorderedList } from '@ag.ds-next/react/list';
import { PageAlert, PageAlertTitle } from '@ag.ds-next/react/page-alert';
import { Select } from '@ag.ds-next/react/select';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { TextInput } from '@ag.ds-next/react/text-input';
import { TextLink } from '@ag.ds-next/react/text-link';
import { FormRequiredFieldsMessage } from '../../FormRequiredFieldsMessage';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { FormTask1Container } from './FormTask1Container';
import {
	Task1Step3FormSchema,
	task1Step3FormSchema,
} from './FormTask1FormState';
import { useFormTask1Context } from './FormTask1Provider';

export function FormTask1Step3() {
	const { formState, setFormState } = useGlobalForm();
	const { submitStep } = useFormTask1Context();

	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Task1Step3FormSchema>({
		defaultValues: formState.task1?.step3,
		resolver: zodResolver(task1Step3FormSchema),
		mode: 'onBlur',
	});

	const onSubmit: SubmitHandler<Task1Step3FormSchema> = async (data) => {
		setFocusedError(false);
		await submitStep();
		setFormState({
			...formState,
			task1: { ...formState.task1, step3: { ...data, completed: true } },
		});
	};

	const onError = () => {
		setFocusedError(false);
	};

	// As our form schema contains nested objects, we are converting the errors from a nested object to a simple flat array
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
		'isPostalAddressSameAsStreetAddress'
	);

	return (
		<FormTask1Container
			formTitle="Business address"
			formIntroduction="Add your business address."
			formCallToAction={<FormRequiredFieldsMessage />}
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
						title={<PageAlertTitle as="h2">There is a problem</PageAlertTitle>}
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
				<StepActions />
			</Stack>
		</FormTask1Container>
	);
}
