import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@ag.ds-next/button';
import { Divider } from '../components/Divider';
import { Fieldset } from '@ag.ds-next/fieldset';
import { Flex, Stack } from '@ag.ds-next/box';
import { H1 } from '@ag.ds-next/heading';
import { Select } from '@ag.ds-next/select';
import { TextInput } from '@ag.ds-next/text-input';

const formSchema = yup
	.object({
		fullName: yup.string().required('Enter your name'),
		streetAddress: yup.string().required('Enter your street address'),
		state: yup.string().required('Enter your street state'),
		postcode: yup.string().required('Enter your postcode'),
		email: yup
			.string()
			.email('Invalid email address')
			.required('Enter your email address'),
		mobile: yup.string().required('Enter your postcode'),
		notificationPreference: yup.string().required('Please select an option'),
	})
	.required();

type FormSchema = yup.InferType<typeof formSchema>;

export const FormExampleMultiStep = () => {
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
				<Fieldset
					legend="Personal details"
					legendAsPageHeading
					hint="Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an."
				>
					<Stack gap={1.5}>
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
					</Stack>
				</Fieldset>
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
