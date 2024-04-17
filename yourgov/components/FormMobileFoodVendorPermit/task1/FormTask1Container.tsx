import { useRouter } from 'next/router';
import { PropsWithChildren, ReactNode, useEffect } from 'react';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { ContentBleed } from '@ag.ds-next/react/content';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import {
	ProgressIndicator,
	ProgressIndicatorItemStatus,
} from '@ag.ds-next/react/progress-indicator';
import { Stack } from '@ag.ds-next/react/stack';
import { FormContainer } from '../FormContainer';
import { NotAvailableAlert } from '../FormTask4Step1';
import { useGlobalForm } from '../GlobalFormProvider';
import { task1FormSteps, useFormTask1Context } from './FormTask1Provider';

type FormTask1ContainerProps = PropsWithChildren<{
	formTitle: string;
	formIntroduction: string;
	formCallToAction?: ReactNode;
}>;

export function FormTask1Container({
	formTitle,
	formIntroduction,
	formCallToAction,
	children,
}: FormTask1ContainerProps) {
	const { pathname } = useRouter();
	const { formState, typeSearchParm, startTask, getTaskStatus } =
		useGlobalForm();
	const { backHref, canConfirmAndSubmit } = useFormTask1Context();

	const isTaskAvailable = getTaskStatus('task1') !== 'blocked';

	function getStepStatus(stepIndex: number): ProgressIndicatorItemStatus {
		const step = task1FormSteps[stepIndex];
		// Current step is always in progress when the URL matches
		if (step.href === pathname) return 'doing';
		// After submitting each step, the `completed` key is set to `true`
		if (formState.task1?.[step.formStateKey]?.completed) return 'done';
		// The final step (confirm and submit) can only be viewed when all previous steps are complete
		if (step.formStateKey === 'step7' && !canConfirmAndSubmit) return 'blocked';
		// Otherwise, the step still needs to be done
		return 'todo';
	}

	// Ensure the task is marked as started when visiting any of the task 1 pages
	useEffect(() => {
		startTask('task1');
	}, [startTask]);

	return (
		<Columns>
			<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
				<ContentBleed visible={{ md: false }}>
					<ProgressIndicator
						items={task1FormSteps.map(({ label, href }, index) => ({
							label,
							href: href + `?type=${typeSearchParm}`,
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
						task={1}
						title={formTitle}
						introduction={formIntroduction}
						callToAction={formCallToAction}
					>
						{isTaskAvailable ? children : <NotAvailableAlert />}
					</FormContainer>
				</Stack>
			</Column>
		</Columns>
	);
}
