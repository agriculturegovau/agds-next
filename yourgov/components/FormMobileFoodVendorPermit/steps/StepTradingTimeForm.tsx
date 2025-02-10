import { useMemo, useRef } from 'react';
import {
	Controller,
	SubmitHandler,
	type FieldErrors,
	useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	DateRangePickerNext,
	isValidDate,
} from '@ag.ds-next/react/date-range-picker-next';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { GroupedFields } from '@ag.ds-next/react/grouped-fields';
import { TimeInput } from '@ag.ds-next/react/time-input';
import { DeepPartial } from '../../../lib/types';
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';
import { FormPageAlert } from '../FormPageAlert';
import { type ShallowErrors } from '../FormState';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormContainer } from './FormContainer';
import { useFormContext } from './FormProvider';
import {
	stepTradingTimeFormSchema,
	type StepTradingTimeFormSchema,
} from './FormState';
import { Form } from './Form';
import { stepKeyToStepDataMap } from './stepsData';

function transformDefaultValues(step?: DeepPartial<StepTradingTimeFormSchema>) {
	const from = step?.tradingPeriod?.from;
	const to = step?.tradingPeriod?.to;
	return {
		...step,
		tradingPeriod: {
			from,
			to,
		},
	};
}

const isFromInvalid = (value: Date, otherDate: Date) => {
	return value ? !isValidDate(value, { toDate: otherDate }) : false;
};

const isToInvalid = (value: Date, otherDate: Date) => {
	return value ? !isValidDate(value, { fromDate: otherDate }) : false;
};

export function StepTradingTimeForm() {
	const { formState, stepTradingTimeSetState, isSavingBeforeExiting } =
		useGlobalForm();
	const { submitStep } = useFormContext();

	const editingStep = useIsEditingFromReviewStep();

	const tradingPeriodFromRef = useRef<HTMLInputElement>(null);
	const tradingPeriodToRef = useRef<HTMLInputElement>(null);

	const {
		control,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<StepTradingTimeFormSchema>({
		defaultValues: transformDefaultValues(formState.steps?.stepTradingTime),
		resolver: isSavingBeforeExiting
			? undefined
			: zodResolver(stepTradingTimeFormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const typeCorrectedErrors =
		errors as ShallowErrors<StepTradingTimeFormSchema>;

	const onError = (errors: FieldErrors) => {
		if (validErrors.length > 0) {
			setTimeout(() => {
				if (hasErrors.tradingPeriod.both) {
					tradingPeriodFromRef?.current?.focus();
				} else if (hasErrors.tradingPeriod.from) {
					tradingPeriodFromRef?.current?.focus();
				} else if (hasErrors.tradingPeriod.to) {
					tradingPeriodToRef?.current?.focus();
				} else if (errors?.openingTime?.ref?.focus) {
					errors.openingTime.ref?.focus();
				} else if (errors?.closingTime?.ref?.focus) {
					errors.closingTime.ref?.focus();
				}
			}, 0);
			return;
		}
	};

	const onSubmit: SubmitHandler<StepTradingTimeFormSchema> = async (data) => {
		if (isSavingBeforeExiting) {
			return;
		}
		if (validErrors.length > 0) {
			if (validErrors.length === 1) {
				setTimeout(() => {
					if (hasErrors.tradingPeriod.both) {
						tradingPeriodFromRef?.current?.focus();
					} else if (hasErrors.tradingPeriod.from) {
						tradingPeriodFromRef?.current?.focus();
					} else if (hasErrors.tradingPeriod.to) {
						tradingPeriodToRef?.current?.focus();
					}
				}, 0);
			}
			return;
		}

		await submitStep();
		stepTradingTimeSetState({
			...data,
			completed: !isSavingBeforeExiting,
			started: true,
		});
	};

	const tradingPeriod = watch('tradingPeriod');
	const fromInvalid = isFromInvalid(tradingPeriod.from, tradingPeriod.to);
	const toInvalid = isToInvalid(tradingPeriod.to, tradingPeriod.from);

	const hasErrors = useMemo(
		() => ({
			tradingPeriod: {
				both:
					(fromInvalid && toInvalid) ||
					(Boolean(errors.tradingPeriod?.from?.message) &&
						Boolean(errors.tradingPeriod?.to?.message)),
				from:
					(fromInvalid && !toInvalid) ||
					(!errors.tradingPeriod?.to?.message &&
						Boolean(errors.tradingPeriod?.from?.message)),
				to:
					(toInvalid && !toInvalid) ||
					(!errors.tradingPeriod?.from?.message &&
						Boolean(errors.tradingPeriod?.to?.message)),
			},
			hours: {
				both:
					Boolean(typeCorrectedErrors.openingTime?.message) &&
					Boolean(typeCorrectedErrors.closingTime?.message),
				from:
					Boolean(typeCorrectedErrors.openingTime?.message) &&
					!typeCorrectedErrors.closingTime?.message,
				to:
					!typeCorrectedErrors.openingTime?.message &&
					Boolean(typeCorrectedErrors.closingTime?.message),
			},
		}),
		[errors, fromInvalid, toInvalid, typeCorrectedErrors]
	);

	// FIXME: This should ideally be handled in zod
	const tradingPeriodError = hasErrors.tradingPeriod.both
		? 'Start date and End date is required'
		: hasErrors.tradingPeriod.from
		? 'Start date is required'
		: hasErrors.tradingPeriod.to
		? 'End date is required'
		: undefined;

	const validErrors = [
		hasErrors.tradingPeriod.both,
		hasErrors.tradingPeriod.from,
		hasErrors.tradingPeriod.to,
		hasErrors.hours.both,
		hasErrors.hours.from,
		hasErrors.hours.to,
	].filter(Boolean);

	const showErrorAlert = validErrors.length > 1;

	return (
		<FormContainer
			formIntroduction="What times would you like to operate?"
			formTitle={
				stepKeyToStepDataMap.stepTradingTime[
					editingStep?.match ? 'changeLabel' : 'label'
				]
			}
		>
			<Form onSubmit={handleSubmit(onSubmit, onError)}>
				<FormStack>
					{showErrorAlert && (
						<FormPageAlert
							errors={{
								'date-range-picker-tradingPeriod-from': {
									message:
										hasErrors.tradingPeriod.both || hasErrors.tradingPeriod.from
											? tradingPeriodError
											: undefined,
								},
								'date-range-picker-tradingPeriod-to': {
									message:
										!hasErrors.tradingPeriod.both && hasErrors.tradingPeriod.to
											? tradingPeriodError
											: undefined,
								},
								openingTime: {
									message: hasErrors.hours.both
										? 'Opening time and Closing time are required'
										: typeCorrectedErrors.openingTime?.message,
								},
								closingTime: {
									message: hasErrors.hours.to
										? typeCorrectedErrors.closingTime?.message
										: undefined,
								},
							}}
						/>
					)}
					<Controller
						control={control}
						name="tradingPeriod"
						render={({ field: { ref, value, onChange, ...field } }) => (
							<DateRangePickerNext
								{...field}
								fromInputRef={tradingPeriodFromRef}
								fromInvalid={
									hasErrors.tradingPeriod.both || hasErrors.tradingPeriod.from
								}
								id="tradingPeriod"
								legend="Trading period"
								message={tradingPeriodError}
								onChange={onChange}
								required
								toInputRef={tradingPeriodToRef}
								toInvalid={
									hasErrors.tradingPeriod.both || hasErrors.tradingPeriod.to
								}
								value={value}
							/>
						)}
					/>
					<GroupedFields
						field1Invalid={hasErrors.hours.both || hasErrors.hours.from}
						field2Invalid={hasErrors.hours.both || hasErrors.hours.to}
						hideOptionalLabel
						hint="Provide the time you will open and close. For example, 3:00 pm - enter 12 am for midnight"
						legend="Hours of operation"
						message={
							hasErrors.hours.both
								? 'Opening time and Closing time is required'
								: typeCorrectedErrors.openingTime?.message ||
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
											{...field}
											{...field1Props}
											autoComplete="on"
											id="openingTime"
											label="Opening time"
											ref={ref}
											required
										/>
									)}
								/>
								<Controller
									control={control}
									name="closingTime"
									render={({ field: { ref, ...field } }) => (
										<TimeInput
											{...field}
											{...field2Props}
											autoComplete="on"
											id="closingTime"
											label="Closing time"
											ref={ref}
											required
										/>
									)}
								/>
							</>
						)}
					</GroupedFields>
				</FormStack>
			</Form>
		</FormContainer>
	);
}
