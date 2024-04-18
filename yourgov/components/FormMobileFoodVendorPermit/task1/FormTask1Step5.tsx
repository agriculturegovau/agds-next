import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useRef, useState } from 'react';
import {
	Controller,
	FieldError,
	SubmitHandler,
	useForm,
} from 'react-hook-form';
import { DateRangePicker } from '@ag.ds-next/react/date-range-picker';
import { useScrollToField } from '@ag.ds-next/react/field';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { ListItem, UnorderedList } from '@ag.ds-next/react/list';
import { PageAlert, PageAlertTitle } from '@ag.ds-next/react/page-alert';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { TimeInput } from '@ag.ds-next/react/time-input';
import { DeepPartial } from '../../../lib/types';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { ShallowErrors } from '../types';
import { parseDateField } from '../utils';
import { FormTask1Container } from './FormTask1Container';
import {
	Task1Step5FormSchema,
	task1Step5FormSchema,
} from './FormTask1FormState';
import { useFormTask1Context } from './FormTask1Provider';

function transformDefaultValues(step?: DeepPartial<Task1Step5FormSchema>) {
	const from = step?.tradingPeriod?.from as string | Date | undefined;
	const to = step?.tradingPeriod?.from as string | Date | undefined;
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
	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

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
		setFocusedError(false);
		!isSavingBeforeExiting && (await submitStep());
		setFormState({
			...formState,
			task1: {
				...formState.task1,
				step5: {
					...data,
					completed: !isSavingBeforeExiting,
					started: true,
				},
				started: true,
			},
		});
	};

	const onError = () => {
		setFocusedError(false);
	};

	// As our form schema contains nested objects, we are converting the errors from a nested object to a simple flat array
	const flatErrors = Object.entries(errors)
		.map(([key, value]) => {
			if ('message' in value)
				return { key, message: (value as FieldError).message };
			if ('from' in value) return { key, message: value.from?.message };
			if ('to' in value) return { key, message: value.to?.message };
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

	return (
		<FormTask1Container
			formTitle="Trading time"
			formIntroduction="What times would you like to operate?"
		>
			<Stack
				as="form"
				gap={3}
				onSubmit={handleSubmit(onSubmit, onError)}
				noValidate
			>
				<FormStack>
					{hasErrors && (
						<PageAlert
							ref={errorRef}
							tone="error"
							title={
								<PageAlertTitle as="h2">There is a problem</PageAlertTitle>
							}
							tabIndex={-1}
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
					<Controller
						control={control}
						name="tradingPeriod"
						render={({ field: { ref, value, onChange, ...field } }) => (
							<DateRangePicker
								legend="Period active"
								fromInputRef={ref}
								{...field}
								id="tradingPeriod"
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
					<Controller
						control={control}
						name="openingTime"
						render={({ field: { ref, ...field } }) => (
							<TimeInput
								label="Opening time"
								hint="For example, 9 am or 2:30 pm - enter 12 pm for midday"
								id="openingTime"
								{...field}
								invalid={Boolean(typeCorrectedErrors.openingTime?.message)}
								message={typeCorrectedErrors.openingTime?.message}
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
								hint="For example, 9 am or 2:30 pm - enter 12 pm for midday"
								id="closingTime"
								{...field}
								invalid={Boolean(typeCorrectedErrors.closingTime?.message)}
								message={typeCorrectedErrors.closingTime?.message}
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
