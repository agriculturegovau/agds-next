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
import {
	useGetRawPath,
	useIsEditingFromReviewStep,
} from '../../../lib/useIsEditingFromReviewStep';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormContainer as GlobalFormContainer } from '../FormContainer';
import { useFormContext } from './FormProvider';
import { stepsData } from './stepsData';

type FormContainerProps = PropsWithChildren<{
	formTitle: string;
	formIntroduction: string;
	formCallToAction?: ReactNode;
	hideRequiredFieldsMessage?: boolean;
	shouldFocusTitle?: boolean;
}>;

export function FormContainer({
	formTitle,
	formIntroduction,
	formCallToAction,
	children,
	hideRequiredFieldsMessage,
	shouldFocusTitle = true,
}: FormContainerProps) {
	const { pathname } = useRouter();
	const { formState, startApplication } = useGlobalForm();
	const { backHref, backLabel, canConfirmAndSubmit } = useFormContext();
	const editingStep = useIsEditingFromReviewStep();
	const rawPath = useGetRawPath();

	function getStepStatus(stepIndex: number): ProgressIndicatorItemStatus {
		const step = stepsData[stepIndex];
		const stateStep = formState.steps?.[step.formStateKey];
		// Current step is always in progress when the URL matches
		if (step.href === pathname) return 'started';
		// After submitting each step, the `completed` key is set to `true`
		if (stateStep?.completed) return 'done';
		// The user has save and exited
		if (stateStep?.started) return 'started';
		// The final step (review and submit) can only be viewed when all previous steps are complete
		if (step.formStateKey === 'stepReviewAndSubmit' && !canConfirmAndSubmit)
			return 'blocked';
		// Review and submit is started when editing a step from that page
		if (editingStep) return 'started';
		// Otherwise, the step still needs to be done
		return 'todo';
	}

	useEffect(() => {
		startApplication();
	}, [startApplication]);

	return (
		<Columns>
			<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
				<ContentBleed visible={{ md: false }}>
					<ProgressIndicator
						activePath={rawPath}
						items={stepsData.map(({ label, href }, index) => ({
							href,
							label,
							status: getStepStatus(index),
							items:
								index === stepsData.length - 1 &&
								rawPath === editingStep?.match?.changeHref
									? [
											{
												href: editingStep?.match?.changeHref,
												label: editingStep?.match?.changeLabel,
											},
									  ]
									: undefined,
						}))}
					/>
				</ContentBleed>
			</Column>
			<Column columnSpan={{ xs: 12, md: 8 }} columnStart={{ lg: 5 }}>
				<Stack alignItems="flex-start" gap={3}>
					<DirectionLink direction="left" href={backHref}>
						{backLabel}
					</DirectionLink>
					<GlobalFormContainer
						callToAction={formCallToAction}
						hideRequiredFieldsMessage={hideRequiredFieldsMessage}
						introduction={formIntroduction}
						shouldFocusTitle={shouldFocusTitle}
						title={formTitle}
					>
						{children}
					</GlobalFormContainer>
				</Stack>
			</Column>
		</Columns>
	);
}
