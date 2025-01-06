import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Stack } from '@ag.ds-next/react/stack';
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
			callToAction={<FormRequiredFieldsMessage />}
			introduction="Select the date you would like this registration to start. The registration will be valid for a period of 12 months from the selected date."
			title="When do you want the registration to start?"
		>
			<Stack as="form" gap={3} noValidate onSubmit={handleSubmit(onSubmit)}>
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
				<FormRegisterPetDetailsActions />
			</Stack>
		</FormRegisterPetDetailsContainer>
	);
};
