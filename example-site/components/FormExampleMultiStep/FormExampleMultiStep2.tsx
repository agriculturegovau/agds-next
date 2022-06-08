import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Stack } from '@ag.ds-next/box';
import { DatePicker } from '@ag.ds-next/date-picker';
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

	const { control, handleSubmit } = useForm<FormSchema>({
		defaultValues: stepFormState,
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		next(data);
	};

	return (
		<FormExampleMultiStepContainer
			title="Select date (H1)"
			introduction="The introductory paragraph provides context about this page of the form. Use a short paragraph to reduce cognitive load."
		>
			<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)}>
				<Controller
					control={control}
					name="date"
					render={({
						field: { onChange, onBlur, value, name },
						fieldState: { invalid, error },
					}) => (
						<DatePicker
							label="Select a date"
							value={value}
							onChange={onChange}
							onBlur={onBlur}
							name={name}
							invalid={invalid}
							message={error?.message}
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
