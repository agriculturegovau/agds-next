import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormStack } from '@ag.ds-next/form-stack';
import { useFormExampleMultiStep } from './FormExampleMultiStep';
import { Body } from '@ag.ds-next/body';
import { PageAlert } from '@ag.ds-next/page-alert';
import { useScrollToField } from '@ag.ds-next/field';
import { useEffect, useRef, useState } from 'react';
import { ControlGroup, Radio } from '@ag.ds-next/control-input';
import { FormExampleMultiStepContainer } from './FormExampleMultiStepContainer';
import { FormExampleMultiStepActions } from './FormExampleMultiStepActions';

const formSchema = yup
	.object({
		example: yup
			.string()
			.typeError('Select an option')
			.required('Select an option'),
	})
	.required();

type FormSchema = yup.InferType<typeof formSchema>;

export const formExampleMultiStep0ValuesMap: Record<keyof FormSchema, string> =
	{
		example: 'Fieldset question?',
	};

export const FormExampleMultiStep0 = () => {
	const { next, stepFormState } = useFormExampleMultiStep();
	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		defaultValues: stepFormState,
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		setFocusedError(false);
		next(data);
	};

	const onError = () => {
		setFocusedError(false);
	};

	const hasErrors = Boolean(Object.keys(errors).length);

	useEffect(() => {
		if (hasErrors && !focusedError) {
			errorRef.current?.focus();
			setFocusedError(true);
		}
	}, [hasErrors, focusedError, errors]);

	return (
		<FormExampleMultiStepContainer
			title="Conditional fork title (H1)"
			subTitle="The introductory paragraph provides context about this page of the form. Use a short paragraph to reduce cognitive load."
		>
			<form onSubmit={handleSubmit(onSubmit, onError)}>
				<FormStack>
					{hasErrors && (
						<PageAlert
							ref={errorRef}
							tone="error"
							title="There is a problem"
							tabIndex={-1}
						>
							<Body>
								<p>Please correct the following fields and try again</p>
								<ul>
									{Object.entries(errors).map(([key, value]) => (
										<li key={key}>
											<a href={`#${key}`} onClick={scrollToField}>
												{value.message}
											</a>
										</li>
									))}
								</ul>
							</Body>
						</PageAlert>
					)}
					<ControlGroup
						label="Fieldset question?"
						hint="Hint test"
						id="example"
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
				</FormStack>
			</form>
		</FormExampleMultiStepContainer>
	);
};
