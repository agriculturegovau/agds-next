import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@ag.ds-next/button';
import { Checkbox } from '@ag.ds-next/control-input';
import { Flex, Stack } from '@ag.ds-next/box';
import { Fieldset } from '@ag.ds-next/fieldset';
import { FormStack } from '@ag.ds-next/form-stack';
import { Select } from '@ag.ds-next/select';
import { Textarea } from '@ag.ds-next/textarea';
import { TextInput } from '@ag.ds-next/text-input';
import { TextLink } from '@ag.ds-next/text';
import { Divider } from './Divider';

const formSchema = yup
	.object({
		fullName: yup.string().required('Enter your name'),
		streetAddress: yup.string().required('Enter your street address'),
		state: yup.string().required('Enter your state'),
		postcode: yup.string().required('Enter your postcode'),
		email: yup
			.string()
			.email('Invalid email address')
			.required('Enter your email address'),
		mobile: yup.string().required('Enter your postcode'),
		message: yup.string(),
		termsAndConditions: yup
			.boolean()
			.oneOf([true], 'You must agree to our terms and conditions'),
	})
	.required();

type FormSchema = yup.InferType<typeof formSchema>;

export const FormExampleSinglePage = () => {
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
			<Stack gap={3}>
				<Fieldset legend="Personal details">
					<FormStack>
						<TextInput
							label="Full name"
							{...register('fullName')}
							invalid={Boolean(errors.fullName?.message)}
							message={errors.fullName?.message}
							maxWidth="xl"
							required
						/>
						<TextInput
							label="Street address"
							{...register('streetAddress')}
							invalid={Boolean(errors.streetAddress?.message)}
							message={errors.streetAddress?.message}
							maxWidth="xl"
							required
						/>
						<Select
							label="State"
							{...register('state')}
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
							{...register('postcode')}
							invalid={Boolean(errors.postcode?.message)}
							message={errors.postcode?.message}
							maxWidth="sm"
							required
						/>
					</FormStack>
				</Fieldset>
				<Divider />
				<Fieldset legend="Contact details">
					<FormStack>
						<TextInput
							label="Email"
							type="email"
							{...register('email')}
							invalid={Boolean(errors.email?.message)}
							message={errors.email?.message}
							maxWidth="xl"
							required
						/>
						<TextInput
							label="Mobile"
							type="tel"
							hint="We use this to send you SMS notifications"
							{...register('mobile')}
							invalid={Boolean(errors.mobile?.message)}
							message={errors.mobile?.message}
							maxWidth="md"
						/>
					</FormStack>
				</Fieldset>
				<Divider />
				<FormStack>
					<Textarea
						label="Message"
						{...register('message')}
						invalid={Boolean(errors.message?.message)}
						message={errors.message?.message}
						maxWidth="xl"
					/>
					<Checkbox
						{...register('termsAndConditions')}
						invalid={Boolean(errors.termsAndConditions?.message)}
					>
						By checking this box you agree to our{' '}
						<TextLink href="#">terms and conditions</TextLink>.
					</Checkbox>
				</FormStack>
				<Divider />
				<Flex gap={1}>
					<Button type="submit">Submit</Button>
					<Button type="button" variant="secondary">
						Cancel
					</Button>
				</Flex>
			</Stack>
		</form>
	);
};
