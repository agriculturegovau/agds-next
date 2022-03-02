import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@ag.ds-next/button';
import { Checkbox, ControlGroup, Radio } from '@ag.ds-next/control-input';
import { Flex, Stack } from '@ag.ds-next/box';
import { Fieldset } from '@ag.ds-next/fieldset';
import { Select } from '@ag.ds-next/select';
import { Textarea } from '@ag.ds-next/textarea';
import { TextInput } from '@ag.ds-next/text-input';
import { TextLink } from '@ag.ds-next/text';
import { Body } from '@ag.ds-next/body';
import { Divider } from './Divider';

// Simple example based off https://react-hook-form.com/get-started

type ExampleFormInputs = {
	fullName: string;
	streetAddress: string;
	state: string;
	postcode: string;
	email: string;
	mobile: string;
	notificationPreference: string;
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
		<Stack as="form" onSubmit={handleSubmit(onSubmit)} gap={3}>
			<Fieldset label="Personal details">
				<TextInput
					label="Full name"
					{...register('fullName', { required: 'Full name is required' })}
					invalid={Boolean(errors.fullName?.message)}
					message={errors.fullName?.message}
					maxWidth="xl"
					required
				/>
				<TextInput
					label="Street address"
					{...register('streetAddress', {
						required: 'Street address is required',
					})}
					invalid={Boolean(errors.streetAddress?.message)}
					message={errors.streetAddress?.message}
					maxWidth="xl"
					required
				/>
				<Select
					label="State"
					{...register('state', {
						required: 'State is required',
					})}
					placeholder="Please select"
					options={[
						{ label: 'QLD', value: 'qld' },
						{ label: 'NSW', value: 'nsw' },
						{ label: 'VIC', value: 'vic' },
					]}
					invalid={Boolean(errors.state?.message)}
					message={errors.state?.message}
					maxWidth="xl"
					required
				/>
				<TextInput
					label="Postcode"
					{...register('postcode', {
						required: 'Postcode is required',
					})}
					invalid={Boolean(errors.postcode?.message)}
					message={errors.postcode?.message}
					maxWidth="sm"
					required
				/>
			</Fieldset>
			<Divider />
			<Fieldset label="Contact details">
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
					label="Mobile"
					type="tel"
					hint="We use this to send you SMS notifications"
					{...register('mobile', { required: 'Mobile is required' })}
					invalid={Boolean(errors.mobile?.message)}
					message={errors.mobile?.message}
					maxWidth="md"
				/>
			</Fieldset>
			<Divider />
			<Fieldset label="Notification preferences">
				<ControlGroup
					label="How would you like to be notified?"
					invalid={Boolean(errors.notificationPreference?.message)}
					message={errors.notificationPreference?.message}
					required
					block
				>
					<Radio
						{...register('notificationPreference', {
							required: 'Type of feedback is required',
						})}
					>
						Email
					</Radio>
					<Radio
						{...register('notificationPreference', {
							required: 'Type of feedback is required',
						})}
					>
						SMS
					</Radio>
					<Radio
						{...register('notificationPreference', {
							required: 'Type of feedback is required',
						})}
					>
						Post
					</Radio>
				</ControlGroup>
			</Fieldset>
			<Divider />
			<Flex gap={1}>
				<Button type="submit">Submit</Button>
				<Button type="button" variant="secondary">
					Cancel
				</Button>
			</Flex>
		</Stack>
	);
};
