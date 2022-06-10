import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormStack } from '@ag.ds-next/form-stack';
import { VisuallyHidden } from '@ag.ds-next/a11y';
import { Body } from '@ag.ds-next/body';
import { Stack } from '@ag.ds-next/box';
import { PageAlert } from '@ag.ds-next/page-alert';
import { useScrollToField } from '@ag.ds-next/field';
import { Checkbox } from '@ag.ds-next/control-input';
import { H2 } from '@ag.ds-next/heading';
import { BaseButton } from '@ag.ds-next/button';
import { TextLink } from '@ag.ds-next/text-link';
import {
	DefinitionList,
	DefinitionListItem,
	DefinitionDescription,
	DefinitionTerm,
} from '../DefinitionList';
import { FORM_STEPS, useFormExampleMultiStep } from './FormExampleMultiStep';
import { FormExampleMultiStepContainer } from './FormExampleMultiStepContainer';
import { FormExampleMultiStepActions } from './FormExampleMultiStepActions';

const formSchema = yup
	.object({
		declaration: yup
			.boolean()
			.oneOf([true], 'You must read and agree with the declaration'),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormExampleMultiStep4 = () => {
	const { next, stepFormState, formState, goToStep } =
		useFormExampleMultiStep();
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

	const onError: SubmitErrorHandler<FormSchema> = () => {
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
			title="Confirm and submit (H1)"
			introduction="The introductory paragraph provides context about this page of the form. Use a short paragraph to reduce cognitive load."
		>
			{/** Summary: Step 0 */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>{FORM_STEPS[0].label}</H2>
				<TextLink as={BaseButton} onClick={() => goToStep(0)}>
					Change
				</TextLink>
				<DefinitionList>
					<DefinitionListItem>
						<DefinitionTerm>
							<VisuallyHidden>{'Question '}</VisuallyHidden>
							Fieldset question?
						</DefinitionTerm>
						<DefinitionDescription>
							<VisuallyHidden>{'Answer '}</VisuallyHidden>
							{formState[0]?.example}
						</DefinitionDescription>
					</DefinitionListItem>
				</DefinitionList>
			</Stack>
			{/** Summary: Step 1 */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>{FORM_STEPS[1].label}</H2>
				<TextLink as={BaseButton} onClick={() => goToStep(1)}>
					Change
				</TextLink>
				<DefinitionList>
					<DefinitionListItem>
						<DefinitionTerm>
							<VisuallyHidden>{'Question '}</VisuallyHidden>
							Describe actions taken
						</DefinitionTerm>
						<DefinitionDescription>
							<VisuallyHidden>{'Answer '}</VisuallyHidden>
							{formState[1]?.description}
						</DefinitionDescription>
					</DefinitionListItem>
					<DefinitionListItem>
						<DefinitionTerm>
							<VisuallyHidden>{'Question '}</VisuallyHidden>
							Uploaded file
						</DefinitionTerm>
						<DefinitionDescription>
							<VisuallyHidden>{'Answer '}</VisuallyHidden>
							{formState[1]?.file.map((file) => file.name).join(', ')}
						</DefinitionDescription>
					</DefinitionListItem>
				</DefinitionList>
			</Stack>
			{/** Summary: Step 2 */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>{FORM_STEPS[2].label}</H2>
				<TextLink as={BaseButton} onClick={() => goToStep(2)}>
					Change
				</TextLink>
				<DefinitionList>
					<DefinitionListItem>
						<DefinitionTerm>
							<VisuallyHidden>{'Question '}</VisuallyHidden>
							Select a date
						</DefinitionTerm>
						<DefinitionDescription>
							<VisuallyHidden>{'Answer '}</VisuallyHidden>
							{formState[2]?.date.toLocaleDateString()}
						</DefinitionDescription>
					</DefinitionListItem>
				</DefinitionList>
			</Stack>
			{/** Summary: Step 3 */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>{FORM_STEPS[3].label}</H2>
				<TextLink as={BaseButton} onClick={() => goToStep(3)}>
					Change
				</TextLink>
				<DefinitionList>
					<DefinitionListItem>
						<DefinitionTerm>
							<VisuallyHidden>{'Question '}</VisuallyHidden>
							Checkbox fieldset question?
						</DefinitionTerm>
						<DefinitionDescription>
							<VisuallyHidden>{'Answer '}</VisuallyHidden>
							{formState[3]?.checkbox?.join(', ')}
						</DefinitionDescription>
					</DefinitionListItem>
					<DefinitionListItem>
						<DefinitionTerm>
							<VisuallyHidden>{'Question '}</VisuallyHidden>
							Nested field
						</DefinitionTerm>
						<DefinitionDescription>
							<VisuallyHidden>{'Answer '}</VisuallyHidden>
							{formState[3]?.conditionalField}
						</DefinitionDescription>
					</DefinitionListItem>
				</DefinitionList>
			</Stack>
			{/** Declaration form */}
			<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit, onError)}>
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
					<Body>
						<h2>Declaration</h2>
						<p>I declare that:</p>
						<ul>
							<li>
								The information I have provided on behalf of the applicant is
								true and accurate
							</li>
							<li>I have read and understood the terms and conditions</li>
						</ul>
					</Body>
					<Checkbox
						{...register('declaration')}
						id="declaration"
						invalid={Boolean(errors.declaration?.message)}
					>
						I confirm that I have read and agree with the above declaration
						(required)
					</Checkbox>
				</FormStack>
				<FormExampleMultiStepActions />
			</Stack>
		</FormExampleMultiStepContainer>
	);
};
