import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { DatePicker } from '@ag.ds-next/react/date-picker';
import { Stack } from '@ag.ds-next/react/stack';
import { FormRequiredFieldsMessage } from '../FormRequiredFieldsMessage';
import { useFormExampleMultiStep } from './FormExampleMultiStep';
import { FormExampleMultiStepActions } from './FormExampleMultiStepActions';
import { FormExampleMultiStepContainer } from './FormExampleMultiStepContainer';

const formSchema = yup
	.object({
		date: yup.date().required('Select a date'),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormExampleMultiStep2 = () => {
	const { next, stepFormState } = useFormExampleMultiStep();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		defaultValues: stepFormState,
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		next(data);
	};

	return (
		<FormExampleMultiStepContainer
			callToAction={<FormRequiredFieldsMessage />}
			introduction="The introductory paragraph provides context about this page of the form. Use a short paragraph to reduce cognitive load."
			title="Select date (H1)"
		>
			<Stack
				as="form"
				gap={3}
				noValidate
				onSubmit={handleSubmit(onSubmit, console.log)}
			>
				<Controller
					control={control}
					name="date"
					render={({ field: { ref, ...field } }) => (
						<DatePicker
							{...field}
							id="date"
							inputRef={ref}
							invalid={Boolean(errors.date?.message)}
							label="Select a date"
							maxWidth="xl"
							message={errors.date?.message}
							required
						/>
					)}
				/>
				<FormExampleMultiStepActions />
			</Stack>
		</FormExampleMultiStepContainer>
	);
};
