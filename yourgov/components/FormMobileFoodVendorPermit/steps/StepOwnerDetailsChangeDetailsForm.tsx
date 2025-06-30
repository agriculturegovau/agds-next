import { type SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
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
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';
import { FormRequiredFieldsMessage } from '../../FormRequiredFieldsMessage';
import { FormPageAlert } from '../FormPageAlert';
import { hasMultipleErrors } from '../utils';
import { useGlobalForm } from '../GlobalFormProvider';
import {
	stepOwnerDetailsFormSchema,
	type StepOwnerDetailsFormSchema,
} from './FormState';
import { useFormContext } from './FormProvider';
import { stepKeyToStepDataMap, stepsData } from './stepsData';

export function StepOwnerDetailsChangeDetailsForm() {
	const router = useRouter();
	const {
		formState,
		stepOwnerDetailsGetState,
		stepOwnerDetailsReviewEditGetState,
		stepOwnerDetailsSetState,
		stepOwnerDetailsReviewEditSetState,
	} = useGlobalForm();

	const editingStep = useIsEditingFromReviewStep();

	const reviewEditState = stepOwnerDetailsReviewEditGetState();
	const stepState =
		editingStep?.match && reviewEditState?.edited
			? stepOwnerDetailsReviewEditGetState()
			: stepOwnerDetailsGetState();

	const stateSetter = editingStep?.match
		? stepOwnerDetailsReviewEditSetState
		: stepOwnerDetailsSetState;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<StepOwnerDetailsFormSchema>({
		defaultValues: stepState,
		resolver: zodResolver(stepOwnerDetailsFormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const [isSaving, setIsSaving] = useState(false);

	const stepOwnerDetailsPath =
		stepKeyToStepDataMap.stepOwnerDetails[
			editingStep?.match ? 'changeHref' : 'href'
		];

	const onSubmit: SubmitHandler<StepOwnerDetailsFormSchema> = (data) => {
		setIsSaving(true);
		// Using a `setTimeout` to replicate a call to a back-end API
		setTimeout(() => {
			setIsSaving(false);
			stateSetter({
				...data,
				edited: editingStep?.match ? true : undefined,
			});
			router.push(`${stepOwnerDetailsPath}?success=true`);
		}, 1500);
	};

	function onCancelClick() {
		router.push(stepOwnerDetailsPath);
	}

	const showErrorAlert = hasMultipleErrors(errors);

	const titleRef = useRef<HTMLHeadingElement>(null);

	// Focus the title when the user navigates to this page
	// This usually happens in `FormContainer` component but we can't use that component here
	// FIXME: Supposedly because of Progress Indicator? I think we can workaround that?
	useEffect(() => {
		titleRef.current?.focus();
	}, []);

	const { asPath, pathname } = useRouter();
	const { canConfirmAndSubmit } = useFormContext();

	function getStepStatus(stepIndex: number): ProgressIndicatorItemStatus {
		const step = stepsData[stepIndex];
		// Current step is always in progress when the URL matches
		if (step.href === pathname.replace('/change-details', '')) return 'started';
		// After submitting each step, the `completed` key is set to `true`
		if (formState.steps?.[step.formStateKey]?.completed) return 'done';
		// The final step (review and submit) can only be viewed when all previous steps are complete
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
					<DirectionLink direction="left" href={stepOwnerDetailsPath}>
						Back
					</DirectionLink>
					<Stack gap={1.5}>
						<H1 focusRingFor="keyboard" ref={titleRef} tabIndex={-1}>
							Change business owner details
						</H1>
						<Text as="p" color="muted" fontSize="md">
							Change your name and contact details.
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
								{showErrorAlert && <FormPageAlert errors={errors} />}
								<TextInput
									{...register('firstName')}
									autoComplete="given-name"
									id="firstName"
									invalid={Boolean(errors.firstName?.message)}
									label="First name"
									maxWidth="lg"
									message={errors.firstName?.message}
									required
								/>
								<TextInput
									{...register('lastName')}
									autoComplete="family-name"
									id="lastName"
									invalid={Boolean(errors.lastName?.message)}
									label="Last name"
									maxWidth="lg"
									message={errors.lastName?.message}
									required
								/>
								<TextInput
									{...register('email')}
									autoComplete="email"
									id="email"
									invalid={Boolean(errors.email?.message)}
									label="Email address"
									maxWidth="xl"
									message={errors.email?.message}
									required
									type="email"
								/>
								<TextInput
									{...register('mobileNumber')}
									autoComplete="tel"
									id="mobileNumber"
									invalid={Boolean(errors.mobileNumber?.message)}
									label="Mobile number"
									maxWidth="xl"
									message={errors.mobileNumber?.message}
									required
									type="tel"
								/>
							</FormStack>
							<Divider />
							<ButtonGroup>
								<Button loading={isSaving} type="submit">
									Save changes
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
