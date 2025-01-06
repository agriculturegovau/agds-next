import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DatePicker } from '@ag.ds-next/react/date-picker';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { Stack } from '@ag.ds-next/react/stack';
import { TextInput } from '@ag.ds-next/react/text-input';
import { DeepPartial } from '../../../lib/types';
import { FormPageAlert } from '../FormPageAlert';
import { hasMultipleErrors, parseDateField } from '../utils';
import { StepActions } from '../StepActions';
import { useGlobalForm } from '../GlobalFormProvider';
import { useFormContext } from './FormProvider';
import { FormContainer } from './FormContainer';
import { step4FormSchema, Step4FormSchema } from './FormState';

function transformDefaultValues(step?: DeepPartial<Step4FormSchema>) {
	const registrationExpiry = step?.registrationExpiry;
	return {
		...step,
		registrationExpiry: parseDateField(registrationExpiry),
	};
}

export function FormStep4() {
	const { formState, step4SetState, isSavingBeforeExiting } = useGlobalForm();
	const { submitStep } = useFormContext();

	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Step4FormSchema>({
		defaultValues: transformDefaultValues(formState.steps?.step4),
		resolver: isSavingBeforeExiting ? undefined : zodResolver(step4FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const onSubmit: SubmitHandler<Step4FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		step4SetState({
			...data,
			completed: !isSavingBeforeExiting,
			started: true,
		});
	};

	const showErrorAlert = hasMultipleErrors(errors);

	return (
		<FormContainer
			formIntroduction="Add your vehicle registration details."
			formTitle="Vehicle registration"
		>
			<Stack as="form" gap={3} noValidate onSubmit={handleSubmit(onSubmit)}>
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
							<DatePicker
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
				<StepActions />
			</Stack>
		</FormContainer>
	);
}
