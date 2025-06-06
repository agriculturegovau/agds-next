import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	DatePickerNext,
	isValidDate,
} from '@ag.ds-next/react/date-picker-next';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { TextInput } from '@ag.ds-next/react/text-input';
import { DeepPartial } from '../../../lib/types';
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';
import { FormPageAlert } from '../FormPageAlert';
import { hasMultipleErrors, parseDateField } from '../utils';
import { useGlobalForm } from '../GlobalFormProvider';
import { useFormContext } from './FormProvider';
import { FormContainer } from './FormContainer';
import {
	stepVehicleRegistrationFormSchema,
	StepVehicleRegistrationFormSchema,
} from './FormState';
import { Form } from './Form';
import { stepKeyToStepDataMap } from './stepsData';

function transformDefaultValues(
	step?: DeepPartial<StepVehicleRegistrationFormSchema>
) {
	const registrationExpiry = step?.registrationExpiry;
	return {
		...step,
		registrationExpiry: parseDateField(registrationExpiry),
	};
}

const isInvalid = (value: Date) => {
	return value ? !isValidDate(value) : false;
};

export function StepVehicleRegistrationForm() {
	const { formState, stepVehicleRegistrationSetState, isSavingBeforeExiting } =
		useGlobalForm();
	const { submitStep } = useFormContext();

	const editingStep = useIsEditingFromReviewStep();

	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<StepVehicleRegistrationFormSchema>({
		defaultValues: transformDefaultValues(
			formState.steps?.stepVehicleRegistration
		),
		resolver: isSavingBeforeExiting
			? undefined
			: zodResolver(stepVehicleRegistrationFormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const onSubmit: SubmitHandler<StepVehicleRegistrationFormSchema> = async (
		data
	) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		stepVehicleRegistrationSetState({
			...data,
			completed: !isSavingBeforeExiting,
			started: true,
		});
	};

	const registrationExpiry = watch('registrationExpiry');
	const isExpiryInvalid = isInvalid(registrationExpiry);

	const adjustedErrors = {
		...errors,
		registrationExpiry: {
			...errors.registrationExpiry,
			// FIXME: This should be handled in zod
			message:
				errors.registrationExpiry?.message || isExpiryInvalid
					? 'Registration expiry date is required'
					: undefined,
		},
	};

	const showErrorAlert = hasMultipleErrors(adjustedErrors);

	return (
		<FormContainer
			formIntroduction="Add your vehicle registration details."
			formTitle={
				stepKeyToStepDataMap.stepVehicleRegistration[
					editingStep?.match ? 'changeLabel' : 'label'
				]
			}
		>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormStack>
					{showErrorAlert && <FormPageAlert errors={adjustedErrors} />}
					<TextInput
						{...register('registrationNumber')}
						autoComplete="on"
						hint="Enter a plate number, maximum 6 characters. For example ABC123."
						id="registrationNumber"
						invalid={Boolean(errors.registrationNumber?.message)}
						label="Vehicle registration number"
						message={errors.registrationNumber?.message}
						required
					/>
					<Controller
						control={control}
						name="registrationExpiry"
						render={({ field: { ref, ...field } }) => (
							<DatePickerNext
								{...field}
								id="registrationExpiry"
								inputRef={ref}
								invalid={Boolean(adjustedErrors.registrationExpiry?.message)}
								label="Registration expiry date"
								message={adjustedErrors.registrationExpiry?.message}
								required
							/>
						)}
					/>
				</FormStack>
			</Form>
		</FormContainer>
	);
}
