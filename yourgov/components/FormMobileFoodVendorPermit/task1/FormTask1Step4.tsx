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
import { useFormTask1Context } from './FormTask1Provider';
import { FormTask1Container } from './FormTask1Container';
import {
	Task1Step4FormSchema,
	task1Step4FormSchema,
} from './FormTask1FormState';

function transformDefaultValues(step?: DeepPartial<Task1Step4FormSchema>) {
	const registrationExpiry = step?.registrationExpiry as
		| string
		| Date
		| undefined;
	return {
		...step,
		registrationExpiry: parseDateField(registrationExpiry),
	};
}

export function FormTask1Step4() {
	const { formState, setFormState, isSavingBeforeExiting } = useGlobalForm();
	const { submitStep } = useFormTask1Context();

	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Task1Step4FormSchema>({
		defaultValues: transformDefaultValues(formState.task1?.step4),
		resolver: isSavingBeforeExiting
			? undefined
			: zodResolver(task1Step4FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const onSubmit: SubmitHandler<Task1Step4FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		setFormState({
			...formState,
			task1: {
				...formState.task1,
				step4: {
					...data,
					completed: !isSavingBeforeExiting,
					started: true,
				},
			},
		});
	};

	const showErrorAlert = hasMultipleErrors(errors);

	return (
		<FormTask1Container
			formTitle="Vehicle registration"
			formIntroduction="Add your vehicle registration details."
		>
			<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)} noValidate>
				<FormStack>
					{showErrorAlert && <FormPageAlert errors={errors} />}
					<TextInput
						label="Vehicle registration number"
						hint="Enter a plate number, maximum 6 characters. For example ABC123."
						id="registrationNumber"
						{...register('registrationNumber')}
						invalid={Boolean(errors.registrationNumber?.message)}
						message={errors.registrationNumber?.message}
						required
					/>
					<Controller
						control={control}
						name="registrationExpiry"
						render={({ field: { ref, ...field } }) => (
							<DatePicker
								inputRef={ref}
								label="Vehicle registration expiry"
								{...field}
								id="registrationExpiry"
								invalid={Boolean(errors.registrationExpiry?.message)}
								message={errors.registrationExpiry?.message}
								required
							/>
						)}
					/>
				</FormStack>
				<StepActions />
			</Stack>
		</FormTask1Container>
	);
}
