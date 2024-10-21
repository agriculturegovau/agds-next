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
import { FormRequiredFieldsMessage } from '../../FormRequiredFieldsMessage';
import { FormPageAlert } from '../FormPageAlert';
import { hasMultipleErrors } from '../utils';
import { useGlobalForm } from '../GlobalFormProvider';
import { step7FormSchema, type Step7FormSchema } from './FormState';
import { taskFormSteps, useFormContext } from './FormProvider';

export function FormStep7AddEmployee() {
	const router = useRouter();
	const { formState, step7GetState, step7SetState } = useGlobalForm();
	const uuid = useRef(crypto.randomUUID());

	const {
		register,
		handleSubmit,
		formState: { errors = {} },
	} = useForm<Step7FormSchema>({
		resolver: zodResolver(step7FormSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur',
	});

	const [isSaving, setIsSaving] = useState(false);

	const step7Path = taskFormSteps[6].href;

	const onSubmit: SubmitHandler<Step7FormSchema> = (data) => {
		setIsSaving(true);
		// Using a `setTimeout` to replicate a call to a back-end API
		setTimeout(() => {
			setIsSaving(false);
			step7SetState({
				employee: [...(step7GetState()?.employee || []), data.employee],
				completed: false,
				started: true,
			});
			router.push(`${step7Path}?success=${uuid.current}`);
		}, 1500);
	};

	function onCancelClick() {
		router.push(step7Path);
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
	const { canConfirmAndSubmit } = useFormContext();

	function getStepStatus(stepIndex: number): ProgressIndicatorItemStatus {
		const step = taskFormSteps[stepIndex];
		// Current step is always in progress when the URL matches
		if (step.href === pathname.replace('/add-employee', '')) return 'started';
		// After submitting each step, the `completed` key is set to `true`
		if (formState.task?.[step.formStateKey]?.completed) return 'done';
		// The final step (confirm and submit) can only be viewed when all previous steps are complete
		if (step.formStateKey === 'step10' && !canConfirmAndSubmit)
			return 'blocked';
		// Otherwise, the step still needs to be done
		return 'todo';
	}

	return (
		<Columns>
			<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
				<ProgressIndicator
					activePath={`${
						taskFormSteps[6].items && taskFormSteps[6].items[0]?.href
					}`}
					items={taskFormSteps.map(({ label, href, items }, index) => ({
						label,
						href,
						status: getStepStatus(index),
						items: index === 6 ? items : undefined,
					}))}
				/>
			</Column>
			<Column columnSpan={{ xs: 12, md: 8 }} columnStart={{ lg: 5 }}>
				<Stack gap={3} alignItems="flex-start">
					<DirectionLink direction="left" href={step7Path}>
						Back
					</DirectionLink>
					<Stack gap={1.5}>
						<H1 ref={titleRef} tabIndex={-1} focusRingFor="keyboard">
							Add employee
						</H1>
						<Text as="p" fontSize="md" color="muted">
							Provide your employee’s name and email.
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
								{showErrorAlert && errors?.employee && (
									<FormPageAlert errors={errors?.employee} />
								)}
								<input
									{...register('employee.id')}
									id="employee.id"
									type="hidden"
									value={uuid.current}
									required
								/>
								<TextInput
									label="First name"
									autoComplete="given-name"
									{...register('employee.firstName')}
									id="employee.firstName"
									invalid={Boolean(errors?.employee?.firstName?.message)}
									message={errors?.employee?.firstName?.message}
									maxWidth="lg"
									required
								/>
								<TextInput
									label="Last name"
									autoComplete="family-name"
									{...register('employee.lastName')}
									id="employee.lastName"
									invalid={Boolean(errors?.employee?.lastName?.message)}
									message={errors?.employee?.lastName?.message}
									maxWidth="lg"
									required
								/>
								<TextInput
									label="Email address"
									type="email"
									autoComplete="email"
									{...register('employee.email')}
									id="employee.email"
									invalid={Boolean(errors?.employee?.email?.message)}
									message={errors?.employee?.email?.message}
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
