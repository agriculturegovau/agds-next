import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Stack, ControlGroup, Radio } from '@ag.ds-next/react';
import { useFormExampleMultiStep } from './FormExampleMultiStep';
import { FormExampleMultiStepActions } from './FormExampleMultiStepActions';
import { FormExampleMultiStepContainer } from './FormExampleMultiStepContainer';

const formSchema = yup
	.object({
		example: yup
			.string()
			.typeError('Select an option')
			.required('Select an option'),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormExampleMultiStep0 = () => {
	const { next, stepFormState } = useFormExampleMultiStep();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		defaultValues: stepFormState,
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		next(data);
	};

	return (
		<FormExampleMultiStepContainer
			title="Conditional fork title (H1)"
			introduction="The introductory paragraph provides context about this page of the form. Use a short paragraph to reduce cognitive load."
		>
			<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)} noValidate>
				<ControlGroup
					label="Fieldset question?"
					hint="Hint text"
					invalid={Boolean(errors.example?.message)}
					message={errors.example?.message}
					required
					block
				>
					<Radio
						{...register('example')}
						value="A"
						invalid={Boolean(errors.example?.message)}
					>
						Radio label A
					</Radio>
					<Radio
						{...register('example')}
						value="B"
						invalid={Boolean(errors.example?.message)}
					>
						Radio label B
					</Radio>
					<Radio
						{...register('example')}
						value="C"
						invalid={Boolean(errors.example?.message)}
					>
						Radio label C
					</Radio>
				</ControlGroup>
				<FormExampleMultiStepActions />
			</Stack>
		</FormExampleMultiStepContainer>
	);
};
