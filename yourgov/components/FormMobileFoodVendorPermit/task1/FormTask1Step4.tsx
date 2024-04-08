import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useRef, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { DatePicker } from '@ag.ds-next/react/date-picker';
import { useScrollToField } from '@ag.ds-next/react/field';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { ListItem, UnorderedList } from '@ag.ds-next/react/list';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { TextInput } from '@ag.ds-next/react/text-input';
import { TextLink } from '@ag.ds-next/react/text-link';
import { DeepPartial } from '../../../lib/types';
import { FormRequiredFieldsMessage } from '../../FormRequiredFieldsMessage';
import { useGlobalForm } from '../GlobalFormProvider';
import { StepActions } from '../StepActions';
import { parseDateField } from '../utils';
import { FormTask1Container } from './FormTask1Container';
import {
	Task1Step4FormSchema,
	task1Step4FormSchema,
} from './FormTask1FormState';
import { useFormTask1Context } from './FormTask1Provider';

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
	const { formState, setFormState } = useGlobalForm();
	const { submitStep } = useFormTask1Context();

	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Task1Step4FormSchema>({
		defaultValues: transformDefaultValues(formState.task1?.step4),
		resolver: zodResolver(task1Step4FormSchema),
		mode: 'onBlur',
	});

	const onSubmit: SubmitHandler<Task1Step4FormSchema> = async (data) => {
		setFocusedError(false);
		await submitStep();
		setFormState({
			...formState,
			task1: { ...formState.task1, step4: { ...data, completed: true } },
		});
	};

	const onError = () => {
		setFocusedError(false);
	};

	// As our form schema contains nested objects, we are converting the errors from a nested object to a simple flat array
	const flatErrors = Object.entries(errors)
		.map(([key, value]) => {
			if ('message' in value) return { key, message: value.message };
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
			formTitle="Vehicle registration"
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
								maxWidth="xl"
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
