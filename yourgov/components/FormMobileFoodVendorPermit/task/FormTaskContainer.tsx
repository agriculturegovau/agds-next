import { PropsWithChildren, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { ContentBleed } from '@ag.ds-next/react/content';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import {
	ProgressIndicator,
	ProgressIndicatorItemStatus,
} from '@ag.ds-next/react/progress-indicator';
import { Stack } from '@ag.ds-next/react/stack';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormContainer } from '../FormContainer';
import { taskFormSteps, useFormTaskContext } from './FormTaskProvider';

type FormTaskContainerProps = PropsWithChildren<{
	formTitle: string;
	formIntroduction: string;
	formCallToAction?: ReactNode;
	hideRequiredFieldsMessage?: boolean;
	shouldFocusTitle?: boolean;
}>;

export function FormTaskContainer({
	formTitle,
	formIntroduction,
	formCallToAction,
	children,
	hideRequiredFieldsMessage,
	shouldFocusTitle = true,
}: FormTaskContainerProps) {
	const { pathname } = useRouter();
	const { formState, startTask } = useGlobalForm();
	const { backHref, canConfirmAndSubmit } = useFormTaskContext();

	function getStepStatus(stepIndex: number): ProgressIndicatorItemStatus {
		const step = taskFormSteps[stepIndex];
		const stateStep = formState.task?.[step.formStateKey];
		// Current step is always in progress when the URL matches
		if (step.href === pathname) return 'started';
		// After submitting each step, the `completed` key is set to `true`
		if (stateStep?.completed) return 'done';
		// The user has save and exited
		if (stateStep?.started) return 'started';
		// The final step (confirm and submit) can only be viewed when all previous steps are complete
		if (step.formStateKey === 'step7' && !canConfirmAndSubmit) return 'blocked';
		// Otherwise, the step still needs to be done
		return 'todo';
	}

	// Ensure the task is marked as started when visiting any of the task 1 pages
	useEffect(() => {
		startTask('task');
	}, [startTask]);

	return (
		<Columns>
			<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
				<ContentBleed visible={{ md: false }}>
					<ProgressIndicator
						activePath={pathname}
						items={taskFormSteps.map(({ label, href }, index) => ({
							label,
							href,
							status: getStepStatus(index),
						}))}
					/>
				</ContentBleed>
			</Column>
			<Column columnSpan={{ xs: 12, md: 8 }} columnStart={{ lg: 5 }}>
				<Stack gap={3} alignItems="flex-start">
					<DirectionLink direction="left" href={backHref}>
						Back
					</DirectionLink>
					<FormContainer
						title={formTitle}
						introduction={formIntroduction}
						callToAction={formCallToAction}
						hideRequiredFieldsMessage={hideRequiredFieldsMessage}
						shouldFocusTitle={shouldFocusTitle}
					>
						{children}
					</FormContainer>
				</Stack>
			</Column>
		</Columns>
	);
}
