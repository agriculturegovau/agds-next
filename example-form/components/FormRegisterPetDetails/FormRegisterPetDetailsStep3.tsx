import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Stack } from '@ag.ds-next/react/box';
import { DatePicker } from '@ag.ds-next/react/date-picker';
import { FormRequiredFieldsMessage } from '../FormRequiredFieldsMessage';
import { useFormRegisterPetDetails } from './FormRegisterPetDetails';
import { FormRegisterPetDetailsActions } from './FormRegisterPetDetailsActions';
import { FormRegisterPetDetailsContainer } from './FormRegisterPetDetailsContainer';

export const formSchema = yup
	.object({
		date: yup.date().required('Select a date'),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormRegisterPetDetailsStep3 = () => {
	const { next, stepFormState } = useFormRegisterPetDetails();

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
		<FormRegisterPetDetailsContainer
			title="When do you want the registration to start?"
			introduction="Select the date you would like this registration to start. The registration will be valid for a period of 12 months from the selected date."
			callToAction={<FormRequiredFieldsMessage />}
		>
			<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)} noValidate>
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
				<FormRegisterPetDetailsActions />
			</Stack>
		</FormRegisterPetDetailsContainer>
	);
};
