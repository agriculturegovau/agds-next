import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { ConditionalReveal } from '@ag.ds-next/react/conditional-reveal';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { useScrollToField } from '@ag.ds-next/react/field';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { ListItem, UnorderedList } from '@ag.ds-next/react/list';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { TextInput } from '@ag.ds-next/react/text-input';
import { TextLink } from '@ag.ds-next/react/text-link';
import { FormRequiredFieldsMessage } from '../FormRequiredFieldsMessage';
import { useFormExampleMultiStep } from './FormExampleMultiStep';
import { FormExampleMultiStepActions } from './FormExampleMultiStepActions';
import { FormExampleMultiStepContainer } from './FormExampleMultiStepContainer';

const checkboxErrorString = 'Please check at least one option';
const formSchema = yup
	.object({
		checkbox: yup
			.array()
			.typeError(checkboxErrorString)
			.of(yup.string())
			.min(1, checkboxErrorString),
		conditionalField: yup.string().when('checkbox', (value, schema) => {
			if (Array.isArray(value) && value.includes('B')) {
				return schema.required('Nested field is required');
			}
			return schema;
		}),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormExampleMultiStep3 = () => {
	const { next, stepFormState } = useFormExampleMultiStep();
	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		watch,
		register,
		handleSubmit,
		trigger,
		formState: { errors, isSubmitted },
	} = useForm<FormSchema>({
		reValidateMode: 'onChange',
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

	// Only show the page alert if there is more than 1 error
	const hasErrors = Object.keys(errors).length > 1;

	useEffect(() => {
		if (hasErrors && !focusedError) {
			errorRef.current?.focus();
			setFocusedError(true);
		}
	}, [hasErrors, focusedError, errors]);

	const checkboxWatch = watch('checkbox');
	const showConditionalField =
		Array.isArray(checkboxWatch) && checkboxWatch.includes('B');

	useEffect(() => {
		if (isSubmitted) trigger();
	}, [trigger, isSubmitted, showConditionalField]);

	return (
		<FormExampleMultiStepContainer
			callToAction={<FormRequiredFieldsMessage />}
			introduction="The introductory paragraph provides context about this page of the form. Use a short paragraph to reduce cognitive load."
			title="Conditional reveal title (H1)"
		>
			<Stack
				as="form"
				gap={3}
				noValidate
				onSubmit={handleSubmit(onSubmit, onError)}
			>
				<FormStack>
					{hasErrors && (
						<PageAlert
							ref={errorRef}
							tabIndex={-1}
							title="There is a problem"
							tone="error"
						>
							<Text as="p">
								Please correct the following fields and try again
							</Text>
							<UnorderedList>
								{Object.entries(errors).map(([key, value]) => (
									<ListItem key={key}>
										<TextLink href={`#${key}`} onClick={scrollToField}>
											{Array.isArray(value) ? value[0].message : value.message}
										</TextLink>
									</ListItem>
								))}
							</UnorderedList>
						</PageAlert>
					)}
					<ControlGroup
						block
						hint="Provide a hint here"
						id="checkbox"
						invalid={Boolean(errors.checkbox)}
						label="Checkbox fieldset question?"
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-ignore
						message={errors?.checkbox?.message}
						required
					>
						<Checkbox {...register('checkbox')} value="A">
							Checkbox label A
						</Checkbox>
						<Checkbox {...register('checkbox')} value="B">
							Checkbox label B
						</Checkbox>
						<Checkbox {...register('checkbox')} value="C">
							Checkbox label C
						</Checkbox>
						<Checkbox {...register('checkbox')} value="D">
							Checkbox label D
						</Checkbox>
					</ControlGroup>

					<ConditionalReveal visible={showConditionalField}>
						<TextInput
							{...register('conditionalField')}
							hint="Hint text"
							id="conditionalField"
							invalid={Boolean(errors.conditionalField?.message)}
							label="Nested field"
							message={errors.conditionalField?.message}
							required
						/>
					</ConditionalReveal>
				</FormStack>
				<FormExampleMultiStepActions />
			</Stack>
		</FormExampleMultiStepContainer>
	);
};
