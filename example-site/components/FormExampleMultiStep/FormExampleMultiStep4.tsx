import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormStack } from '@ag.ds-next/form-stack';
import { Prose } from '@ag.ds-next/prose';
import { Stack } from '@ag.ds-next/box';
import { Checkbox, ControlGroup } from '@ag.ds-next/control-input';
import { H2 } from '@ag.ds-next/heading';
import { Button } from '@ag.ds-next/button';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/summary-list';
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
			title="Confirm and submit (H1)"
			introduction="The introductory paragraph provides context about this page of the form. Use a short paragraph to reduce cognitive load."
		>
			{/** Summary: Step 0 */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>{FORM_STEPS[0].label}</H2>
				<SummaryList>
					<SummaryListItem>
						<SummaryListItemTerm>Fieldset question?</SummaryListItemTerm>
						<SummaryListItemDescription>
							{formState[0]?.example}
						</SummaryListItemDescription>
					</SummaryListItem>
				</SummaryList>
				<Button variant="text" onClick={() => goToStep(0)}>
					Change
				</Button>
			</Stack>
			{/** Summary: Step 1 */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>{FORM_STEPS[1].label}</H2>
				<SummaryList>
					<SummaryListItem>
						<SummaryListItemTerm>Describe actions taken</SummaryListItemTerm>
						<SummaryListItemDescription>
							{formState[1]?.description}
						</SummaryListItemDescription>
					</SummaryListItem>
					<SummaryListItem>
						<SummaryListItemTerm>Uploaded file</SummaryListItemTerm>
						<SummaryListItemDescription>
							{formState[1]?.files.map(({ name }) => name).join(', ')}
						</SummaryListItemDescription>
					</SummaryListItem>
				</SummaryList>
				<Button variant="text" onClick={() => goToStep(1)}>
					Change
				</Button>
			</Stack>
			{/** Summary: Step 2 */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>{FORM_STEPS[2].label}</H2>
				<SummaryList>
					<SummaryListItem>
						<SummaryListItemTerm>Select a date</SummaryListItemTerm>
						<SummaryListItemDescription>
							{formState[2]?.date.toLocaleDateString()}
						</SummaryListItemDescription>
					</SummaryListItem>
				</SummaryList>
				<Button variant="text" onClick={() => goToStep(2)}>
					Change
				</Button>
			</Stack>
			{/** Summary: Step 3 */}
			<Stack gap={1.5} alignItems="flex-start">
				<H2>{FORM_STEPS[3].label}</H2>
				<SummaryList>
					<SummaryListItem>
						<SummaryListItemTerm>
							Checkbox fieldset question?
						</SummaryListItemTerm>
						<SummaryListItemDescription>
							{formState[3]?.checkbox?.join(', ')}
						</SummaryListItemDescription>
					</SummaryListItem>
					<SummaryListItem>
						<SummaryListItemTerm>Nested field</SummaryListItemTerm>
						<SummaryListItemDescription>
							{formState[3]?.conditionalField}
						</SummaryListItemDescription>
					</SummaryListItem>
				</SummaryList>
				<Button variant="text" onClick={() => goToStep(3)}>
					Change
				</Button>
			</Stack>
			{/** Declaration form */}
			<Stack as="form" gap={3} onSubmit={handleSubmit(onSubmit)} noValidate>
				<FormStack>
					<Prose>
						<h2>Declaration</h2>
						<p>I declare that:</p>
						<ul>
							<li>
								The information I have provided on behalf of the applicant is
								true and accurate
							</li>
							<li>I have read and understood the terms and conditions</li>
						</ul>
					</Prose>
					<ControlGroup
						label="Declaration agreement"
						invalid={Boolean(errors.declaration?.message)}
						message={errors.declaration?.message}
						block
						required
					>
						<Checkbox
							{...register('declaration')}
							invalid={Boolean(errors.declaration?.message)}
						>
							I confirm that I have read and agree with the above declaration
						</Checkbox>
					</ControlGroup>
				</FormStack>
				<FormExampleMultiStepActions />
			</Stack>
		</FormExampleMultiStepContainer>
	);
};
