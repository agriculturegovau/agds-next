import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Stack } from '@ag.ds-next/box';
import { DatePicker } from '@ag.ds-next/date-picker';
import { useFormExampleMultiStep } from './FormRegisterPetDetails';
import { FormRegisterPetDetailsActions } from './FormRegisterPetDetailsActions';
import { FormRegisterPetDetailsContainer } from './FormRegisterPetDetailsContainer';

const formSchema = yup
	.object({
		date: yup.date().required('Select a date'),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormRegisterPetDetailsStep3 = () => {
	const { next, stepFormState } = useFormExampleMultiStep();

	const { control, handleSubmit } = useForm<FormSchema>({
		defaultValues: stepFormState,
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		next(data);
	};

	return (
		<FormRegisterPetDetailsContainer
			title="When do you want the registration to start?"
			introduction="Select the date you would like this registration to start. The registration will be valid for a period of 12 months form the selected date."
		>
			<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)} noValidate>
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
				<FormRegisterPetDetailsActions />
			</Stack>
		</FormRegisterPetDetailsContainer>
	);
};
