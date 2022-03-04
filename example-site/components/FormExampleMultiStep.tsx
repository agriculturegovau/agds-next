import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@ag.ds-next/button';
import { Divider } from '../components/Divider';
import { Fieldset } from '@ag.ds-next/fieldset';
import { Stack } from '@ag.ds-next/box';
import { H1 } from '@ag.ds-next/heading';
import { TextInput } from '@ag.ds-next/text-input';
import { Text } from '@ag.ds-next/text';

const formSchema = yup
	.object({
		fullName: yup.string().required('Enter your name'),
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
		<Stack
			as="form"
			alignItems="flex-start"
			gap={1.5}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Fieldset
				legend={<H1>Personal details</H1>}
				hint={
					<Text fontSize="md" color="muted">
						We will only use this to respond to your requests
					</Text>
				}
			>
				<TextInput
					label="Full name"
					{...register('fullName')}
					invalid={Boolean(errors.fullName?.message)}
					message={errors.fullName?.message}
					maxWidth="xl"
					required
				/>
			</Fieldset>
			<Divider />
			<Button type="submit">Continue</Button>
		</Stack>
	);
};
