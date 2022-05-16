import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormStack } from '@ag.ds-next/form-stack';
import { useFormExampleMultiStepProdiver } from './FormExampleMultiStep';
import { Body } from '@ag.ds-next/body';
import { PageAlert } from '@ag.ds-next/page-alert';
import { useScrollToField } from '@ag.ds-next/field';
import { useEffect, useRef, useState } from 'react';
import { Checkbox, ControlGroup } from '@ag.ds-next/control-input';
import { FormExampleMultiStepContainer } from './FormExampleMultiStepContainer';
import { FormExampleMultiStepActions } from './FormExampleMultiStepActions';
import { TextInput } from '@ag.ds-next/text-input';

const formSchema = yup
	.object({
		checkboxA: yup.boolean(),
		checkboxB: yup.boolean(),
		checkboxC: yup.boolean(),
		checkboxD: yup.boolean(),
		nestedField: yup.string(),
	})
	.required();

type FormSchema = yup.InferType<typeof formSchema>;

export const formExampleMultiStep3ValuesMap: Record<keyof FormSchema, string> =
	{
		checkboxA: 'Fieldset question?',
		checkboxB: 'Fieldset question?',
		checkboxC: 'Fieldset question?',
		checkboxD: 'Fieldset question?',
		nestedField: 'Fieldset qeuestion',
	};

export const FormExampleMultiStep3 = () => {
	const { next, formState } = useFormExampleMultiStepProdiver();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const scrollToField = useScrollToField();

	const {
		watch,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		defaultValues: formState,
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		// setFocusedError(false);
		console.log({ data });
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

	const watchShowAge = watch('checkboxB');

	return (
		<FormExampleMultiStepContainer
			title="Conditional reveal title (H1)"
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
							autofocus
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
						label="Checkbox fieldset question?"
						hint="Provide a hint here"
						// invalid={Boolean(errors.example?.message)}
						// message={errors.example?.message}
						id="example"
						block
					>
						<Checkbox
							{...register('checkboxA')}
							invalid={Boolean(errors.checkboxA?.message)}
						>
							Checkbox label
						</Checkbox>
						<Checkbox
							{...register('checkboxB')}
							invalid={Boolean(errors.checkboxB?.message)}
						>
							Checkbox label
						</Checkbox>
						{watchShowAge ? (
							<TextInput
								label="Nested field"
								invalid={Boolean(errors.nestedField?.message)}
							/>
						) : null}
						<Checkbox
							{...register('checkboxC')}
							invalid={Boolean(errors.checkboxC?.message)}
						>
							Checkbox label
						</Checkbox>
						<Checkbox
							{...register('checkboxD')}
							invalid={Boolean(errors.checkboxD?.message)}
						>
							Checkbox label
						</Checkbox>
						{/* <Radio
							{...register('example')}
							value="B"
							invalid={Boolean(errors.example?.message)}
						>
							Radio label
						</Radio>
						<Radio
							{...register('example')}
							value="C"
							invalid={Boolean(errors.example?.message)}
						>
							Radio label
						</Radio> */}
					</ControlGroup>
					<FormExampleMultiStepActions />
				</FormStack>
			</form>
		</FormExampleMultiStepContainer>
	);
};
