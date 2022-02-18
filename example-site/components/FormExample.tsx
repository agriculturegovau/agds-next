import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@ag.ds-next/button';
import { Checkbox, ControlGroup, Radio } from '@ag.ds-next/control-input';
import { Stack } from '@ag.ds-next/box';
import { Textarea } from '@ag.ds-next/textarea';
import { TextInput } from '@ag.ds-next/text-input';
import { TextLink } from '@ag.ds-next/text';

// Simple example based off https://react-hook-form.com/get-started

type ExampleFormInputs = {
	name: string;
	email: string;
	feedbackType: string;
	message: string;
	agreeTcs: boolean;
};

export const FormExample = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ExampleFormInputs>({
		defaultValues: {
			feedbackType: 'compliment',
		},
	});

	const onSubmit: SubmitHandler<ExampleFormInputs> = (data) => {
		console.log(data);
	};

	return (
		<Stack as="form" onSubmit={handleSubmit(onSubmit)} gap={2}>
			<TextInput
				label="Full name"
				{...register('name', { required: 'Full name must not be empty' })}
				invalid={errors.name?.message ? true : undefined}
				message={errors.name?.message}
				maxWidth="xl"
			/>
			<TextInput
				type="email"
				label="Email"
				hint="We will only use this to respond to your request"
				{...register('email', { required: 'Email must not be empty' })}
				invalid={errors.email?.message ? true : undefined}
				message={errors.email?.message}
				maxWidth="xl"
			/>
			<ControlGroup title="Type of feedback" block>
				<Radio {...register('feedbackType')} value="compliment">
					Compliment
				</Radio>
				<Radio {...register('feedbackType')} value="suggestion">
					Suggestion
				</Radio>
				<Radio {...register('feedbackType')} value="complaint">
					Complaint
				</Radio>
			</ControlGroup>
			<Textarea
				label="How can we help you?"
				hint="Add some detail about your complaint, suggestion or compliment. Minimum 10 characters"
				{...register('message', {
					required: 'Message must not be empty',
					minLength: 10,
				})}
				invalid={errors.message?.message ? true : undefined}
				message={errors.message?.message}
				block
			/>
			<div>
				<Checkbox
					{...register('agreeTcs', { required: 'You must agree' })}
					invalid={errors.agreeTcs?.message ? true : undefined}
				>
					I agree to the <TextLink href="#">Terms and conditions</TextLink>
				</Checkbox>
			</div>
			<div>
				<Button type="submit">Send feedback</Button>
			</div>
		</Stack>
	);
};
