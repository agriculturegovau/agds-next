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
import { FormTask1Container } from './FormTask1Container';
import { useFormTask1Context } from './FormTask1Provider';
import {
	task1Step5FormSchema,
	type Task1Step5FormSchema,
} from './FormTask1FormState';

function transformDefaultValues(step?: DeepPartial<Task1Step5FormSchema>) {
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

export function FormTask1Step5() {
	const { formState, setFormState, isSavingBeforeExiting } = useGlobalForm();
	const { submitStep } = useFormTask1Context();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<Task1Step5FormSchema>({
		defaultValues: transformDefaultValues(formState.task1?.step5),
		resolver: isSavingBeforeExiting
			? undefined
			: zodResolver(task1Step5FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const typeCorrectedErrors = errors as ShallowErrors<Task1Step5FormSchema>;

	const onSubmit: SubmitHandler<Task1Step5FormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		await submitStep();
		setFormState({
			...formState,
			task1: {
				...formState.task1,
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
		<FormTask1Container
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
		</FormTask1Container>
	);
}
