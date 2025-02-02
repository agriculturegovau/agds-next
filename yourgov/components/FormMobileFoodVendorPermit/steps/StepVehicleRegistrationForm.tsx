import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DatePickerNext } from '@ag.ds-next/react/date-picker-next';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { TextInput } from '@ag.ds-next/react/text-input';
import { DeepPartial } from '../../../lib/types';
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

export function StepVehicleRegistrationForm() {
	const { formState, stepVehicleRegistrationSetState, isSavingBeforeExiting } =
		useGlobalForm();
	const { submitStep } = useFormContext();

	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
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

	const showErrorAlert = hasMultipleErrors(errors);

	return (
		<FormContainer
			formIntroduction="Add your vehicle registration details."
			formTitle={stepKeyToStepDataMap.stepVehicleRegistration.label}
		>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormStack>
					{showErrorAlert && <FormPageAlert errors={errors} />}
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
								invalid={Boolean(errors.registrationExpiry?.message)}
								label="Registration expiry date"
								message={errors.registrationExpiry?.message}
								required
							/>
						)}
					/>
				</FormStack>
			</Form>
		</FormContainer>
	);
}
