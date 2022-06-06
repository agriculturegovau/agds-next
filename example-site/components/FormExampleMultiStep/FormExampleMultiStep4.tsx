import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormStack } from '@ag.ds-next/form-stack';
import { Body } from '@ag.ds-next/body';
import { PageAlert } from '@ag.ds-next/page-alert';
import { useScrollToField } from '@ag.ds-next/field';
import { Checkbox } from '@ag.ds-next/control-input';
import {
	Table,
	TableCaption,
	TableHead,
	TableHeader,
	TableBody,
	TableCell,
} from '@ag.ds-next/table';
import { Stack } from '@ag.ds-next/box';
import { FORM_STEPS, useFormExampleMultiStep } from './FormExampleMultiStep';
import { FormExampleMultiStepContainer } from './FormExampleMultiStepContainer';
import { FormExampleMultiStepActions } from './FormExampleMultiStepActions';
import { formExampleMultiStep0ValuesMap } from './FormExampleMultiStep0';
import { formExampleMultiStep1ValuesMap } from './FormExampleMultiStep1';
import { formExampleMultiStep2ValuesMap } from './FormExampleMultiStep2';
import { formExampleMultiStep3ValuesMap } from './FormExampleMultiStep3';
import { formatFieldValue } from './utils';

const MAPPERS = [
	formExampleMultiStep0ValuesMap,
	formExampleMultiStep1ValuesMap,
	formExampleMultiStep2ValuesMap,
	formExampleMultiStep3ValuesMap,
];

const formSchema = yup
	.object({
		declaration: yup
			.boolean()
			.oneOf([true], 'You must read and agree with the declaration'),
	})
	.required();

type FormSchema = yup.InferType<typeof formSchema>;

export const FormExampleMultiStep4 = () => {
	const { next, stepFormState, formState } = useFormExampleMultiStep();
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

	// Only show the page alert if there is more than 1 error
	const hasErrors = Object.keys(errors).length > 1;

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
			<FormStack>
				{FORM_STEPS.filter((_, idx) => idx !== FORM_STEPS.length - 1).map(
					(step, idx) => (
						<Table key={idx} striped>
							<TableCaption>{step.label}</TableCaption>
							<TableHead>
								<tr>
									<TableHeader scope="col" width="50%">
										Question
									</TableHeader>
									<TableHeader scope="col" width="50%">
										Answer
									</TableHeader>
								</tr>
							</TableHead>
							<TableBody>
								{Object.keys(MAPPERS[idx] || {}).map((key) => {
									const mapping = MAPPERS[idx];
									return (
										<tr key={key}>
											<TableCell>
												{key in mapping
													? mapping[key as keyof typeof mapping]
													: 'N/A'}
											</TableCell>
											<TableCell>
												{formatFieldValue(formState?.[idx]?.[key])}
											</TableCell>
										</tr>
									);
								})}
							</TableBody>
						</Table>
					)
				)}
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
			</FormStack>
		</FormExampleMultiStepContainer>
	);
};
