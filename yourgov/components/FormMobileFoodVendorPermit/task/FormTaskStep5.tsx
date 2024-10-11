import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DateRangePicker } from '@ag.ds-next/react/date-range-picker';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { GroupedFields } from '@ag.ds-next/react/grouped-fields';
import { Stack } from '@ag.ds-next/react/stack';
import { TimeInput } from '@ag.ds-next/react/time-input';
import { DeepPartial } from '../../../lib/types';
import { FormPageAlert } from '../FormPageAlert';
import { hasMultipleErrors, parseDateField } from '../utils';
import { type ShallowErrors } from '../FormState';
import { StepActions } from '../StepActions';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormTaskContainer } from './FormTaskContainer';
import { useFormTaskContext } from './FormTaskProvider';
import {
	taskStep5FormSchema,
	type TaskStep5FormSchema,
} from './FormTaskFormState';

function transformDefaultValues(step?: DeepPartial<TaskStep5FormSchema>) {
	const from = step?.tradingPeriod?.from;
	const to = step?.tradingPeriod?.to;
	return {
		...step,
		tradingPeriod: {
			from: parseDateField(from),
			to: parseDateField(to),
		},
	};
}

export function FormTaskStep5() {
	const { formState, setFormState, isSavingBeforeExiting } = useGlobalForm();
	const { submitStep } = useFormTaskContext();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<TaskStep5FormSchema>({
		defaultValues: transformDefaultValues(formState.task?.step5),
		resolver: isSavingBeforeExiting
			? undefined
			: zodResolver(taskStep5FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const typeCorrectedErrors = errors as ShallowErrors<TaskStep5FormSchema>;

	const onSubmit: SubmitHandler<TaskStep5FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		setFormState({
			...formState,
			task: {
				...formState.task,
				step5: {
					...data,
					completed: !isSavingBeforeExiting,
					started: true,
				},
			},
		});
	};

	const showErrorAlert = hasMultipleErrors(errors);

	return (
		<FormTaskContainer
			formTitle="Trading time"
			formIntroduction="What times would you like to operate?"
		>
			<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)} noValidate>
				<FormStack>
					{showErrorAlert && <FormPageAlert errors={errors} />}
					<Controller
						control={control}
						name="tradingPeriod"
						render={({ field: { ref, value, onChange, ...field } }) => (
							<DateRangePicker
								fromInputRef={ref}
								{...field}
								id="tradingPeriod"
								legend="Trading period"
								value={value}
								onChange={onChange}
								onFromInputChange={(from) => onChange({ ...value, from })}
								onToInputChange={(to) => onChange({ ...value, to })}
								fromInvalid={Boolean(errors.tradingPeriod?.from?.message)}
								toInvalid={Boolean(errors.tradingPeriod?.to?.message)}
								message={
									errors.tradingPeriod?.from?.message ||
									errors.tradingPeriod?.to?.message
								}
								required
							/>
						)}
					/>
					<GroupedFields
						legend="Hours of operation"
						hideOptionalLabel
						hint="Provide the time you will open and close. For example, 3:00 pm - enter 12 am for midnight"
						field1Invalid={Boolean(typeCorrectedErrors.openingTime?.message)}
						field2Invalid={Boolean(typeCorrectedErrors.closingTime?.message)}
						message={
							typeCorrectedErrors.openingTime?.message ||
							typeCorrectedErrors.closingTime?.message
						}
					>
						{({ field1Props, field2Props }) => (
							<>
								<Controller
									control={control}
									name="openingTime"
									render={({ field: { ref, ...field } }) => (
										<TimeInput
											label="Opening time"
											id="openingTime"
											{...field}
											{...field1Props}
											required
										/>
									)}
								/>
								<Controller
									control={control}
									name="closingTime"
									render={({ field: { ref, ...field } }) => (
										<TimeInput
											label="Closing time"
											id="closingTime"
											{...field}
											{...field2Props}
											required
										/>
									)}
								/>
							</>
						)}
					</GroupedFields>
				</FormStack>
				<StepActions />
			</Stack>
		</FormTaskContainer>
	);
}
