import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { UnorderedList, ListItem } from '@ag.ds-next/react/list';
import { Stack } from '@ag.ds-next/react/stack';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { TextInput } from '@ag.ds-next/react/text-input';
import { useScrollToField } from '@ag.ds-next/react/field';
import { DateRangePicker } from '@ag.ds-next/react/date-range-picker';
import { FormRequiredFieldsMessage } from '../FormRequiredFieldsMessage';
import { FormActions } from './FormActions';
// import { useFormBusinessDetails } from './FormBusinessDetails';
import { FormTask1Container } from './FormTask1Container';
import { FormContainer } from './FormContainer';

// `yup.date()` can sometimes give false positives with certain string values
// Fixes https://github.com/jquense/yup/issues/764
// Tests for this can be found in `packages/react/src/date-picker/test-utils.ts`
const yupDateField = yup
	.date()
	.transform((current, orig) => (typeof orig === 'string' ? orig : current))
	.typeError('Enter a valid date');

export const formSchema = yup
	.object({
		tradingPeriod: yup
			.object({
				from: yupDateField
					.required('Enter a valid date')
					// Ensures the start date is always after the end date
					.max(yup.ref('to'), 'Start date must be before the end date'),
				to: yupDateField
					.required('Enter a valid date')
					// Ensures the start date is always after the end date
					.min(yup.ref('from'), 'Start date must be before the end date'),
			})
			.required('Enter a valid date'),
		openingTime: yup.string().required('Start time is required'),
		closingTime: yup.string().required('End time is required'),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export function FormTask1Step5() {
	// const { next, stepFormState } = useFormBusinessDetails();
	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		defaultValues: {
			// ...stepFormState,
			tradingPeriod: { from: undefined, to: undefined },
		},
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		setFocusedError(false);
		// next(data);
	};

	const onError = () => {
		setFocusedError(false);
	};

	// As our form schema contains nested objects, we are the converting errors from a nested object to a simple flat array
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
		<FormTask1Container>
			<FormContainer
				title="Trading time"
				introduction="What times would you like to operate?"
				callToAction={<FormRequiredFieldsMessage />}
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
								title="There is a problem"
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
						<TextInput
							label="Opening time"
							hint="For example, 9 am or 2:30 pm - enter 12 pm for midday"
							id="openingTime"
							{...register('openingTime')}
							invalid={Boolean(errors.openingTime?.message)}
							message={errors.openingTime?.message}
							required
						/>
						<TextInput
							label="Closing time"
							hint="For example, 9 am or 2:30 pm - enter 12 pm for midday"
							id="closingTime"
							{...register('closingTime')}
							invalid={Boolean(errors.closingTime?.message)}
							message={errors.closingTime?.message}
							required
						/>
					</FormStack>
					<FormActions />
				</Stack>
			</FormContainer>
		</FormTask1Container>
	);
}
