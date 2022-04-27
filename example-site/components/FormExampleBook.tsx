import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@ag.ds-next/button';
import { FormStack } from '@ag.ds-next/form-stack';
import { TextInput } from '@ag.ds-next/text-input';
import { DatePicker } from '@ag.ds-next/date-picker';
import { FileUpload } from '@ag.ds-next/file-upload';

const formSchema = yup
	.object({
		fullName: yup.string().required('Enter your name'),
		date: yup.date().required('Select a date'),
		photo: yup.mixed().required('Photo is required'),
	})
	.required();

type FormSchema = yup.InferType<typeof formSchema>;

export const FormExampleBook = () => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormStack>
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
				<TextInput
					label="Full name"
					{...register('fullName')}
					invalid={Boolean(errors.fullName?.message)}
					message={errors.fullName?.message}
					maxWidth="xl"
					required
				/>

				<Controller
					control={control}
					name="photo"
					render={({
						field: { onChange, name },
						fieldState: { invalid, error },
					}) => (
						<FileUpload
							label="License photo"
							hint="Formats accepted: .png, .jpg"
							accept={['image/jpeg', 'image/jpg', 'image/png']}
							onChange={onChange}
							name={name}
							invalid={invalid}
							message={error?.message}
							required
						/>
					)}
				/>

				<div>
					<Button type="submit">Request a booking</Button>
				</div>
			</FormStack>
		</form>
	);
};
