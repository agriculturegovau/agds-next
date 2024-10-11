import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { Stack } from '@ag.ds-next/react/stack';
import { Fieldset } from '@ag.ds-next/react/fieldset';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { H2 } from '@ag.ds-next/react/heading';
import { Select } from '@ag.ds-next/react/select';
import { TextInput } from '@ag.ds-next/react/text-input';
import { FormPageAlert } from '../FormPageAlert';
import { hasMultipleErrors } from '../utils';
import { StepActions } from '../StepActions';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormTaskContainer } from './FormTaskContainer';
import { useFormTaskContext } from './FormTaskProvider';
import {
	taskStep3FormSchema,
	type TaskStep3FormSchema,
} from './FormTaskFormState';

export function FormTaskStep3() {
	const { formState, setFormState, isSavingBeforeExiting } = useGlobalForm();
	const { submitStep } = useFormTaskContext();

	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TaskStep3FormSchema>({
		defaultValues: formState.task?.step3,
		resolver: isSavingBeforeExiting
			? undefined
			: zodResolver(taskStep3FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const onSubmit: SubmitHandler<TaskStep3FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		setFormState({
			...formState,
			task: {
				...formState.task,
				step3: {
					...data,
					completed: !isSavingBeforeExiting,
					started: true,
				},
			},
		});
	};

	const showErrorAlert = hasMultipleErrors(errors);

	const isPostalAddressSameAsBusinessAddress = watch(
		'isPostalAddressSameAsBusinessAddress'
	);

	return (
		<FormTaskContainer
			formTitle="Business address"
			formIntroduction="Add your business address."
		>
			<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)} noValidate>
				{showErrorAlert && <FormPageAlert errors={errors} />}
				<FormStack>
					<Fieldset legend={<H2>Business address</H2>}>
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
								maxWidth="lg"
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
								maxWidth="sm"
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
										maxWidth="lg"
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
										maxWidth="sm"
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
		</FormTaskContainer>
	);
}
