import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { H2 } from '@ag.ds-next/react/heading';
import { Select } from '@ag.ds-next/react/select';
import { TextInput } from '@ag.ds-next/react/text-input';
import { FormPageAlert } from '../FormPageAlert';
import { hasMultipleErrors } from '../utils';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormContainer } from './FormContainer';
import { formSteps, useFormContext } from './FormProvider';
import { step3FormSchema, type Step3FormSchema } from './FormState';
import { Form } from './Form';
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';

export function FormStep3() {
	const { formState, step3SetState, isSavingBeforeExiting } = useGlobalForm();
	const { submitStep } = useFormContext();

	const isEditingFromReviewStep = useIsEditingFromReviewStep();

	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Step3FormSchema>({
		defaultValues: formState.steps?.step3,
		resolver: isSavingBeforeExiting ? undefined : zodResolver(step3FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const onSubmit: SubmitHandler<Step3FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		step3SetState({
			...data,
			completed: !isSavingBeforeExiting,
			started: true,
		});
	};

	const showErrorAlert = hasMultipleErrors(errors);

	const isPostalAddressSameAsBusinessAddress = watch(
		'isPostalAddressSameAsBusinessAddress'
	);

	return (
		<FormContainer
			formIntroduction="Add your business address."
			formTitle={
				isEditingFromReviewStep
					? formSteps[2].labelWhenChanging
					: formSteps[2].label
			}
		>
			<Form onSubmit={handleSubmit(onSubmit)}>
				{showErrorAlert && <FormPageAlert errors={errors} />}
				<FormStack>
					<Fieldset legend={<H2>Business address</H2>}>
						<FormStack>
							<TextInput
								{...register('streetAddress')}
								autoComplete="on"
								id="streetAddress"
								invalid={Boolean(errors.streetAddress?.message)}
								label="Street address"
								maxWidth="xl"
								message={errors.streetAddress?.message}
								required
							/>
							<TextInput
								{...register('suburbTownCity')}
								autoComplete="on"
								id="suburbTownCity"
								invalid={Boolean(errors.suburbTownCity?.message)}
								label="Suburb, town or city"
								maxWidth="lg"
								message={errors.suburbTownCity?.message}
								required
							/>
							<Select
								{...register('state')}
								autoComplete="on"
								id="state"
								invalid={Boolean(errors.state?.message)}
								label="State or territory"
								maxWidth="sm"
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
								autoComplete="on"
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
				</FormStack>
				<FormStack>
					<Fieldset legend={<H2>Postal address</H2>}>
						<FormStack>
							<Checkbox
								{...register('isPostalAddressSameAsBusinessAddress')}
								id="isPostalAddressSameAsBusinessAddress"
							>
								Same as business address
							</Checkbox>
							{!isPostalAddressSameAsBusinessAddress && (
								<FormStack>
									<TextInput
										{...register('postalAddress')}
										autoComplete="on"
										id="postalAddress"
										invalid={Boolean(errors.postalAddress?.message)}
										label="Postal address"
										maxWidth="xl"
										message={errors.postalAddress?.message}
										required
									/>
									<TextInput
										{...register('postalSuburbTownCity')}
										autoComplete="on"
										id="postalSuburbTownCity"
										invalid={Boolean(errors.postalSuburbTownCity?.message)}
										label="Suburb, town or city"
										maxWidth="lg"
										message={errors.postalSuburbTownCity?.message}
										required
									/>
									<Select
										{...register('postalState')}
										autoComplete="on"
										id="postalState"
										invalid={Boolean(errors.postalState?.message)}
										label="State or territory"
										maxWidth="sm"
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
										autoComplete="on"
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
				</FormStack>
			</Form>
		</FormContainer>
	);
}
