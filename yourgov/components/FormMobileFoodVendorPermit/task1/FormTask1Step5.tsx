import { useEffect, useRef, useState } from 'react';
import {
	Controller,
	SubmitHandler,
	type FieldError,
	useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DateRangePicker } from '@ag.ds-next/react/date-range-picker';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { PageAlert, PageAlertTitle } from '@ag.ds-next/react/page-alert';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { TimeInput } from '@ag.ds-next/react/time-input';
import { UnorderedList, ListItem } from '@ag.ds-next/react/list';
import { useScrollToField } from '@ag.ds-next/react/field';
import { DeepPartial } from '../../../lib/types';
import { checkHasMultipleErrors, parseDateField } from '../utils';
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
		if (isSavingBeforeExiting) {
			return;
		}
		setFocusedError(false);
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

	const hasErrors = checkHasMultipleErrors(errors);

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
								hint="For example, 5 pm or 10:30 pm - enter 12 am for midnight"
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
