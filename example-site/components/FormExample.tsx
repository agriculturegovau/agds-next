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
	} = useForm<ExampleFormInputs>();

	const onSubmit: SubmitHandler<ExampleFormInputs> = (data) => {
		console.log(data);
	};

	return (
		<Stack as="form" onSubmit={handleSubmit(onSubmit)} gap={2}>
			<TextInput
				label="Full name"
				{...register('name', { required: 'Full name is required' })}
				invalid={Boolean(errors.name?.message)}
				message={errors.name?.message}
				maxWidth="xl"
			/>
			<TextInput
				type="email"
				label="Email"
				hint="We will only use this to respond to your request"
				{...register('email', { required: 'Email is required' })}
				invalid={Boolean(errors.email?.message)}
				message={errors.email?.message}
				maxWidth="xl"
			/>
			<ControlGroup
				label="Type of feedback"
				invalid={Boolean(errors.feedbackType?.message)}
				message={errors.feedbackType?.message}
				required
				block
			>
				<Radio
					{...register('feedbackType', {
						required: 'Type of feedback is required',
					})}
				>
					Compliment
				</Radio>
				<Radio
					{...register('feedbackType', {
						required: 'Type of feedback is required',
					})}
				>
					Suggestion
				</Radio>
				<Radio
					{...register('feedbackType', {
						required: 'Type of feedback is required',
					})}
				>
					Complaint
				</Radio>
			</ControlGroup>
			<Textarea
				label="How can we help you?"
				hint="Add some detail about your complaint, suggestion or compliment. Minimum 10 characters"
				{...register('message', {
					required: 'Message is required',
					minLength: 10,
				})}
				invalid={Boolean(errors.message?.message)}
				message={errors.message?.message}
				block
			/>
			<Checkbox
				{...register('agreeTcs', {
					required: 'You must agree to our terms and conditions',
				})}
				invalid={Boolean(errors.agreeTcs?.message)}
			>
				By checking this box you agree to the{' '}
				<TextLink href="#">terms and conditions</TextLink>
			</Checkbox>
			<div>
				<Button type="submit">Send feedback</Button>
			</div>
		</Stack>
	);
};
