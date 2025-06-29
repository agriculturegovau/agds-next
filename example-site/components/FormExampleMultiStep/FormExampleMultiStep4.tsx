import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import format from 'date-fns/format';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { Checkbox } from '@ag.ds-next/react/checkbox';
import { ControlGroup } from '@ag.ds-next/react/control-group';
import { H2 } from '@ag.ds-next/react/heading';
import { Button } from '@ag.ds-next/react/button';
import {
	SummaryList,
	SummaryListItem,
	SummaryListItemDescription,
	SummaryListItemTerm,
} from '@ag.ds-next/react/summary-list';
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
			introduction="The introductory paragraph provides context about this page of the form. Use a short paragraph to reduce cognitive load."
			title="Review and submit (H1)"
		>
			{/** Summary: Step 0 */}
			<Stack alignItems="flex-start" gap={1.5}>
				<H2>{FORM_STEPS[0].label}</H2>
				<SummaryList>
					<SummaryListItem>
						<SummaryListItemTerm>Fieldset question?</SummaryListItemTerm>
						<SummaryListItemDescription>
							{formState[0]?.example}
						</SummaryListItemDescription>
					</SummaryListItem>
				</SummaryList>
				<Button onClick={() => goToStep(0)} variant="text">
					Change
				</Button>
			</Stack>
			{/** Summary: Step 1 */}
			<Stack alignItems="flex-start" gap={1.5}>
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
				<Button onClick={() => goToStep(1)} variant="text">
					Change
				</Button>
			</Stack>
			{/** Summary: Step 2 */}
			<Stack alignItems="flex-start" gap={1.5}>
				<H2>{FORM_STEPS[2].label}</H2>
				<SummaryList>
					<SummaryListItem>
						<SummaryListItemTerm>Select a date</SummaryListItemTerm>
						<SummaryListItemDescription>
							{formState[2]?.date
								? format(formState[2]?.date, 'dd/MM/yyyy')
								: null}
						</SummaryListItemDescription>
					</SummaryListItem>
				</SummaryList>
				<Button onClick={() => goToStep(2)} variant="text">
					Change
				</Button>
			</Stack>
			{/** Summary: Step 3 */}
			<Stack alignItems="flex-start" gap={1.5}>
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
					{formState[3]?.conditionalField && (
						<SummaryListItem>
							<SummaryListItemTerm>Nested field</SummaryListItemTerm>
							<SummaryListItemDescription>
								{formState[3]?.conditionalField}
							</SummaryListItemDescription>
						</SummaryListItem>
					)}
				</SummaryList>
				<Button onClick={() => goToStep(3)} variant="text">
					Change
				</Button>
			</Stack>
			{/** Declaration form */}
			<Stack as="form" gap={3} noValidate onSubmit={handleSubmit(onSubmit)}>
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
						block
						invalid={Boolean(errors.declaration?.message)}
						label="Declaration agreement"
						message={errors.declaration?.message}
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
