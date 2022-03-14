import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@ag.ds-next/button';
import { FormStack } from '@ag.ds-next/form-stack';
import { TextInput } from '@ag.ds-next/text-input';

const formSchema = yup
	.object({
		email: yup
			.string()
			.email('Invalid email address')
			.required('Enter your email address'),
		password: yup.string().required('Enter your password'),
	})
	.required();

type FormSchema = yup.InferType<typeof formSchema>;

export const FormExampleSignIn = () => {
	const {
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
				<TextInput
					label="Email address"
					type="email"
					{...register('email')}
					invalid={Boolean(errors.email?.message)}
					message={errors.email?.message}
					maxWidth="xl"
					required
				/>
				<TextInput
					label="Password"
					type="password"
					{...register('password')}
					invalid={Boolean(errors.password?.message)}
					message={errors.password?.message}
					maxWidth="xl"
					required
				/>
				<div>
					<Button type="submit">Sign in</Button>
				</div>
			</FormStack>
		</form>
	);
};
