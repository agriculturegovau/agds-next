import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Stack } from '@ag.ds-next/react/stack';
import { DatePicker } from '@ag.ds-next/react/date-picker';
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
		mode: 'onBlur',
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		next(data);
	};

	return (
		<FormExampleMultiStepContainer
			title="Select date (H1)"
			introduction="The introductory paragraph provides context about this page of the form. Use a short paragraph to reduce cognitive load."
			callToAction={<FormRequiredFieldsMessage />}
		>
			<Stack
				as="form"
				gap={3}
				onSubmit={handleSubmit(onSubmit, console.log)}
				noValidate
			>
				<Controller
					control={control}
					name="date"
					render={({ field: { ref, ...field } }) => (
						<DatePicker
							inputRef={ref}
							label="Select a date"
							{...field}
							id="date"
							invalid={Boolean(errors.date?.message)}
							message={errors.date?.message}
							maxWidth="xl"
							required
						/>
					)}
				/>
				<FormExampleMultiStepActions />
			</Stack>
		</FormExampleMultiStepContainer>
	);
};
