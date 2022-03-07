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
		day: yup.string().required('Enter day'),
		month: yup.string().required('Enter month'),
		year: yup.string().required('Enter year'),
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
			<Stack alignItems="flex-start" gap={1.5}>
				<Fieldset
					legend={<H1>What is your date of birth?</H1>}
					hint={
						<Text fontSize="md" color="muted">
							We will only use this to respond to your requests
						</Text>
					}
				>
					<Stack alignItems="flex-start" gap={1.5}>
						<TextInput
							label="Day"
							inputMode="numeric"
							maxWidth="md"
							required
							{...register('day')}
							invalid={Boolean(errors.day?.message)}
							message={errors.day?.message}
						/>
						<TextInput
							label="Month"
							inputMode="numeric"
							maxWidth="md"
							required
							{...register('month')}
							invalid={Boolean(errors.month?.message)}
							message={errors.month?.message}
						/>
						<TextInput
							label="Year"
							inputMode="numeric"
							maxWidth="md"
							required
							{...register('year')}
							invalid={Boolean(errors.year?.message)}
							message={errors.year?.message}
						/>
					</Stack>
				</Fieldset>
				<Divider />
				<Button type="submit">Continue</Button>
			</Stack>
		</form>
	);
};
