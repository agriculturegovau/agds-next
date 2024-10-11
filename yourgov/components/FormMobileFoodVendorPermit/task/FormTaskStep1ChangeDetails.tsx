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
import { FormRequiredFieldsMessage } from '../../FormRequiredFieldsMessage';
import { FormPageAlert } from '../FormPageAlert';
import { hasMultipleErrors } from '../utils';
import { useGlobalForm } from '../GlobalFormProvider';
import {
	taskStep1FormSchema,
	type TaskStep1FormSchema,
} from './FormTaskFormState';
import { taskFormSteps, useFormTaskContext } from './FormTaskProvider';

export function FormTaskStep1ChangeDetails() {
	const router = useRouter();
	const { formState, setFormState } = useGlobalForm();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TaskStep1FormSchema>({
		defaultValues: formState.task?.step1,
		resolver: zodResolver(taskStep1FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const [isSaving, setIsSaving] = useState(false);

	const step1Path = taskFormSteps[0].href;

	const onSubmit: SubmitHandler<TaskStep1FormSchema> = (data) => {
		setIsSaving(true);
		// Using a `setTimeout` to replicate a call to a back-end API
		setTimeout(() => {
			setIsSaving(false);
			setFormState({
				...formState,
				task: { ...formState.task, step1: { ...data } },
			});
			router.push(`${step1Path}?success=true`);
		}, 1500);
	};

	function onCancelClick() {
		router.push(step1Path);
	}

	const showErrorAlert = hasMultipleErrors(errors);

	const titleRef = useRef<HTMLHeadingElement>(null);

	// Focus the title when the user navigates to this page
	// This usually happens in `FormContainer` component but we can't use that component here
	// FIXME: Supposedly because of Progress Indicator? I think we can workaround that?
	useEffect(() => {
		titleRef.current?.focus();
	}, []);

	const { pathname } = useRouter();
	const { canConfirmAndSubmit } = useFormTaskContext();

	function getStepStatus(stepIndex: number): ProgressIndicatorItemStatus {
		const step = taskFormSteps[stepIndex];
		// Current step is always in progress when the URL matches
		if (step.href === pathname.replace('/change-details', '')) return 'started';
		// After submitting each step, the `completed` key is set to `true`
		if (formState.task?.[step.formStateKey]?.completed) return 'done';
		// The final step (confirm and submit) can only be viewed when all previous steps are complete
		if (step.formStateKey === 'step7' && !canConfirmAndSubmit) return 'blocked';
		// Otherwise, the step still needs to be done
		return 'todo';
	}

	return (
		<Columns>
			<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
				<ProgressIndicator
					activePath={`${
						taskFormSteps[0].items && taskFormSteps[0].items[0]?.href
					}`}
					items={taskFormSteps.map(({ label, href, items }, index) => ({
						label,
						href,
						status: getStepStatus(index),
						items: index === 0 ? items : undefined,
					}))}
				/>
			</Column>
			<Column columnSpan={{ xs: 12, md: 8 }} columnStart={{ lg: 5 }}>
				<Stack gap={3} alignItems="flex-start">
					<DirectionLink direction="left" href={step1Path}>
						Back
					</DirectionLink>
					<Stack gap={1.5}>
						<H1 ref={titleRef} tabIndex={-1} focusRingFor="keyboard">
							Change business owner details
						</H1>
						<Text as="p" fontSize="md" color="muted">
							Change your name and contact details.
						</Text>
						<FormRequiredFieldsMessage />
					</Stack>
					<Stack gap={1.5} width="100%">
						<Stack
							as="form"
							gap={3}
							onSubmit={handleSubmit(onSubmit)}
							noValidate
						>
							<FormStack>
								{showErrorAlert && <FormPageAlert errors={errors} />}
								<TextInput
									label="First name"
									autoComplete="given-name"
									{...register('firstName')}
									id="firstName"
									invalid={Boolean(errors.firstName?.message)}
									message={errors.firstName?.message}
									maxWidth="lg"
									required
								/>
								<TextInput
									label="Last name"
									autoComplete="family-name"
									{...register('lastName')}
									id="lastName"
									invalid={Boolean(errors.lastName?.message)}
									message={errors.lastName?.message}
									maxWidth="lg"
									required
								/>
								<TextInput
									label="Email address"
									type="email"
									autoComplete="email"
									{...register('email')}
									id="email"
									invalid={Boolean(errors.email?.message)}
									message={errors.email?.message}
									maxWidth="xl"
									required
								/>
							</FormStack>
							<Divider />
							<ButtonGroup>
								<Button type="submit" loading={isSaving}>
									Save changes
								</Button>
								<Button variant="tertiary" onClick={onCancelClick}>
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
