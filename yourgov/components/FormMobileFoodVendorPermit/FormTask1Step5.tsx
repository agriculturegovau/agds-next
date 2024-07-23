import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { UnorderedList, ListItem } from '@ag.ds-next/react/list';
import { Stack } from '@ag.ds-next/react/stack';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { PageAlert, PageAlertTitle } from '@ag.ds-next/react/page-alert';
import { useScrollToField } from '@ag.ds-next/react/field';
import { DateRangePicker } from '@ag.ds-next/react/date-range-picker';
import {
	isValidTime,
	TimeInput,
	TimeValue,
} from '@ag.ds-next/react/time-input';
import { DeepPartial } from '../../lib/types';
import { FormRequiredFieldsMessage } from '../FormRequiredFieldsMessage';
import { FormActions } from './FormActions';
import { FormTask1Container } from './FormTask1Container';
import { useGlobalForm } from './GlobalFormProvider';
import { useFormTask1Context } from './FormTask1Provider';
import { parseDateField } from './utils';
import {
	task1Step5FormSchema,
	Task1Step5FormSchema,
} from './FormTask1FormState';

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
	const { formState, setFormState } = useGlobalForm();
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
		resolver: yupResolver(task1Step5FormSchema),
	});

	const onSubmit: SubmitHandler<Task1Step5FormSchema> = async (data) => {
		setFocusedError(false);
		await submitStep();
		setFormState({
			...formState,
			task1: { ...formState.task1, step5: { ...data, completed: true } },
		});
	};

	const onError = () => {
		setFocusedError(false);
	};

	// As our form schema contains nested objects, we are converting the errors from a nested object to a simple flat array
	const flatErrors = Object.entries(errors)
		.map(([key, value]) => {
			if ('message' in value) return { key, message: value.message };
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
			formCallToAction={<FormRequiredFieldsMessage />}
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
						render={({ field: { ref, onChange, ...field } }) => {
							const value = field.value as unknown as TimeValue;
							const invalid = !!value && !isValidTime(value.value);

							return (
								<TimeInput
									hint="For example, 9 am or 2:30 pm - enter 12 pm for midday"
									label="Opening time"
									id="openingTime"
									invalid={invalid}
									message={errors.openingTime?.message}
									required
									{...field}
									value={value}
									onChange={(value) => onChange({ target: { value } })}
								/>
							);
						}}
					/>

					<Controller
						control={control}
						name="closingTime"
						render={({ field: { ref, onChange, ...field } }) => {
							const value = field.value as unknown as TimeValue;
							const invalid = !!value && !isValidTime(value.value);

							return (
								<TimeInput
									hint="For example, 9 am or 2:30 pm - enter 12 pm for midday"
									label="Closing time"
									id="closingTime"
									invalid={invalid}
									message={errors.closingTime?.message}
									required
									{...field}
									value={value}
									onChange={(value) => onChange({ target: { value } })}
								/>
							);
						}}
					/>
				</FormStack>
				<FormActions />
			</Stack>
		</FormTask1Container>
	);
}
