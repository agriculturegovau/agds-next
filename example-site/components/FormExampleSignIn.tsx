import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@ag.ds-next/button';
import { Stack } from '@ag.ds-next/box';
import { TextInput } from '@ag.ds-next/text-input';

// Simple example based off https://react-hook-form.com/get-started

type ExampleFormInputs = {
	email: string;
	password: string;
};

export const FormExampleSignIn = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ExampleFormInputs>();

	const onSubmit: SubmitHandler<ExampleFormInputs> = (data) => {
		console.log(data);
	};

	return (
		<Stack as="form" onSubmit={handleSubmit(onSubmit)} gap={2}>
			<TextInput
				label="Email"
				type="email"
				{...register('email', { required: 'Email is required' })}
				invalid={Boolean(errors.email?.message)}
				message={errors.email?.message}
				maxWidth="xl"
				required
			/>
			<TextInput
				label="Password"
				type="password"
				{...register('password', { required: 'Password is required' })}
				invalid={Boolean(errors.email?.message)}
				message={errors.email?.message}
				maxWidth="xl"
				required
			/>
			<div>
				<Button type="submit">Sign in</Button>
			</div>
		</Stack>
	);
};
