import { useEffect, useRef, useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { Divider } from '@ag.ds-next/react/divider';
import { FormStack } from '@ag.ds-next/react/form-stack';
import { H1 } from '@ag.ds-next/react/heading';
import {
	ProgressIndicator,
	type ProgressIndicatorItemStatus,
} from '@ag.ds-next/react/progress-indicator';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { TextInput } from '@ag.ds-next/react/text-input';
import { randomUUID } from '../../../lib/randomUUID';
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';
import { FormRequiredFieldsMessage } from '../../FormRequiredFieldsMessage';
import { FormPageAlert } from '../FormPageAlert';
import { type ShallowErrors } from '../FormState';
import { hasMultipleErrors } from '../utils';
import { useGlobalForm } from '../GlobalFormProvider';
import {
	stepEmployeesFormSchema,
	type StepEmployeesFormSchema,
} from './FormState';
import { useFormContext } from './FormProvider';
import { stepKeyToStepDataMap, stepsData } from './stepsData';

export function StepEmployeesAddEmployeeForm() {
	const { asPath, pathname, ...router } = useRouter();
	const {
		formState,
		stepEmployeesGetState,
		stepEmployeesReviewEditGetState,
		stepEmployeesSetState,
		stepEmployeesReviewEditSetState,
	} = useGlobalForm();
	const uuid = useRef(randomUUID());

	const editingStep = useIsEditingFromReviewStep();

	const reviewEditState = stepEmployeesReviewEditGetState();
	let stepState = stepEmployeesGetState();

	stepState =
		editingStep?.match && reviewEditState?.edited
			? stepEmployeesReviewEditGetState()
			: stepEmployeesGetState();

	const stateSetter = editingStep?.match
		? stepEmployeesReviewEditSetState
		: stepEmployeesSetState;

	const {
		register,
		handleSubmit,
		formState: { errors = {} },
	} = useForm<StepEmployeesFormSchema>({
		resolver: zodResolver(stepEmployeesFormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const [isSaving, setIsSaving] = useState(false);

	const stepEmployeesPath =
		stepKeyToStepDataMap.stepEmployees[
			editingStep?.match ? 'changeHref' : 'href'
		];

	const onSubmit: SubmitHandler<StepEmployeesFormSchema> = (data) => {
		setIsSaving(true);
		// Using a `setTimeout` to replicate a call to a back-end API
		setTimeout(() => {
			setIsSaving(false);
			stateSetter({
				employee: [...(stepState?.employee || []), data.employee].sort(
					(a, b) => {
						if (!a?.firstName || !b?.firstName || !a?.lastName || !b.lastName)
							return -1;

						if (a.firstName.toLowerCase() < b.firstName.toLowerCase())
							return -1;
						if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;

						if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
						if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;

						return 0;
					}
				),
				completed: false,
				edited: editingStep?.match ? true : undefined,
			});
			router.push(`${stepEmployeesPath}?success=${uuid.current}`);
		}, 1500);
	};

	function onCancelClick() {
		router.push(stepEmployeesPath);
	}

	const typeCorrectedErrors =
		errors?.employee as ShallowErrors<StepEmployeesFormSchema>;

	const showErrorAlert = hasMultipleErrors(typeCorrectedErrors);

	const titleRef = useRef<HTMLHeadingElement>(null);

	// Focus the title when the user navigates to this page
	// This usually happens in `FormContainer` component but we can't use that component here
	// FIXME: Supposedly because of Progress Indicator? I think we can workaround that?
	useEffect(() => {
		titleRef.current?.focus();
	}, []);

	const { canConfirmAndSubmit } = useFormContext();

	function getStepStatus(stepIndex: number): ProgressIndicatorItemStatus {
		const step = stepsData[stepIndex];
		// Current step is always in progress when the URL matches
		if (step.href === pathname.replace('/change-details', '')) return 'started';
		// After submitting each step, the `completed` key is set to `true`
		if (formState.steps?.[step.formStateKey]?.completed) return 'done';
		// The final step (confirm and submit) can only be viewed when all previous steps are complete
		if (step.formStateKey === 'stepReviewAndSubmit' && !canConfirmAndSubmit)
			return 'blocked';
		// Review and submit is started when editing a step from that page
		if (editingStep) return 'started';
		// Otherwise, the step still needs to be done
		return 'todo';
	}

	return (
		<Columns>
			{!editingStep?.match && (
				<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
					<ProgressIndicator
						activePath={asPath}
						items={stepsData.map(({ label, href, ...rest }, index) => {
							return {
								label,
								href,
								status: getStepStatus(index),
								items:
									index === stepsData.length - 1 &&
									editingStep?.match.changeHref === asPath
										? [
												{
													href: editingStep.match.changeHref,
													label: editingStep.match.changeLabel,
												},
										  ]
										: rest?.items && asPath === rest.items[0].href
										? [
												{
													href: rest.items[0].href,
													label: rest.items[0].label,
												},
										  ]
										: undefined,
							};
						})}
					/>
				</Column>
			)}
			<Column
				columnSpan={{ xs: 12, md: 8 }}
				columnStart={editingStep?.match ? undefined : { lg: 5 }}
			>
				<Stack alignItems="flex-start" gap={3}>
					<DirectionLink direction="left" href={stepEmployeesPath}>
						Back
					</DirectionLink>
					<Stack gap={1.5}>
						<H1 focusRingFor="keyboard" ref={titleRef} tabIndex={-1}>
							Add employee
						</H1>
						<Text as="p" color="muted" fontSize="md">
							Provide your employee’s name and email.
						</Text>
						<FormRequiredFieldsMessage />
					</Stack>
					<Stack gap={1.5} width="100%">
						<Stack
							as="form"
							gap={3}
							noValidate
							onSubmit={handleSubmit(onSubmit)}
						>
							<FormStack>
								{showErrorAlert && (
									<FormPageAlert errors={typeCorrectedErrors} />
								)}
								<input
									{...register('employee.id')}
									id="id"
									required
									type="hidden"
									value={uuid.current}
								/>
								<TextInput
									{...register('employee.firstName')}
									autoComplete="given-name"
									id="firstName"
									invalid={Boolean(errors?.employee?.firstName?.message)}
									label="First name"
									maxWidth="lg"
									message={errors?.employee?.firstName?.message}
									required
								/>
								<TextInput
									{...register('employee.lastName')}
									autoComplete="family-name"
									id="lastName"
									invalid={Boolean(errors?.employee?.lastName?.message)}
									label="Last name"
									maxWidth="lg"
									message={errors?.employee?.lastName?.message}
									required
								/>
								<TextInput
									{...register('employee.email')}
									autoComplete="email"
									id="email"
									invalid={Boolean(errors?.employee?.email?.message)}
									label="Email address"
									maxWidth="xl"
									message={errors?.employee?.email?.message}
									required
									type="email"
								/>
							</FormStack>
							<Divider />
							<ButtonGroup>
								<Button loading={isSaving} type="submit">
									Add employee
								</Button>
								<Button onClick={onCancelClick} variant="tertiary">
									Cancel
								</Button>
							</ButtonGroup>
						</Stack>
					</Stack>
				</Stack>
			</Column>
		</Columns>
	);
}
