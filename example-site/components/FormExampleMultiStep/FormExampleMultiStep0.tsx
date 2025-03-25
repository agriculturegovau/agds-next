import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { Radio } from '@ag.ds-next/react/radio';
import { Stack } from '@ag.ds-next/react/stack';
import { FormRequiredFieldsMessage } from '../FormRequiredFieldsMessage';
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
			callToAction={<FormRequiredFieldsMessage />}
			introduction="The introductory paragraph provides context about this page of the form. Use a short paragraph to reduce cognitive load."
			title="Conditional fork title (H1)"
		>
			<Stack as="form" gap={3} noValidate onSubmit={handleSubmit(onSubmit)}>
				<ControlGroup
					block
					hint="Hint text"
					invalid={Boolean(errors.example?.message)}
					label="Fieldset question?"
					message={errors.example?.message}
					required
				>
					<Radio
						{...register('example')}
						invalid={Boolean(errors.example?.message)}
						value="A"
					>
						Radio label A
					</Radio>
					<Radio
						{...register('example')}
						invalid={Boolean(errors.example?.message)}
						value="B"
					>
						Radio label B
					</Radio>
					<Radio
						{...register('example')}
						invalid={Boolean(errors.example?.message)}
						value="C"
					>
						Radio label C
					</Radio>
				</ControlGroup>
				<FormExampleMultiStepActions />
			</Stack>
		</FormExampleMultiStepContainer>
	);
};
