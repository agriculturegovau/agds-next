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
import { FormContainer as GlobalFormContainer } from '../FormContainer';
import { useIsEditingFromReviewStep } from '../../../lib/useIsEditingFromReviewStep';
import { formSteps, useFormContext } from './FormProvider';

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
	const { asPath, pathname } = useRouter();
	const { formState, startApplication } = useGlobalForm();
	const { backHref, canConfirmAndSubmit } = useFormContext();
	const isEditingFromReviewStep = useIsEditingFromReviewStep();

	function getStepStatus(stepIndex: number): ProgressIndicatorItemStatus {
		const step = formSteps[stepIndex];
		const stateStep = formState.steps?.[step.formStateKey];
		// Current step is always in progress when the URL matches
		if (step.href === pathname) return 'started';
		// After submitting each step, the `completed` key is set to `true`
		if (stateStep?.completed) return 'done';
		// The user has save and exited
		if (stateStep?.started) return 'started';
		// The final step (review and submit) can only be viewed when all previous steps are complete
		if (step.formStateKey === 'step10' && !canConfirmAndSubmit)
			return 'blocked';
		// Review and submit is started when editing a step from that page
		if (isEditingFromReviewStep) return 'started';
		// Otherwise, the step still needs to be done
		return 'todo';
	}

	useEffect(() => {
		startApplication();
	}, [startApplication]);

	const substepNumberFromReviewStep =
		(isEditingFromReviewStep && asPath.slice(asPath.lastIndexOf('-') + 1)) ||
		undefined;
	const substepData = formSteps.find(
		({ href }) =>
			substepNumberFromReviewStep && href.endsWith(substepNumberFromReviewStep)
	);

	return (
		<Columns>
			<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
				<ContentBleed visible={{ md: false }}>
					<ProgressIndicator
						activePath={asPath}
						items={formSteps.map(({ label, href }, index) => ({
							label,
							href,
							status: getStepStatus(index),
							items: isEditingFromReviewStep
								? [
										{
											label: substepData?.labelWhenChanging,
											href: `${formSteps.at(-1)
												?.href}/substep-${substepNumberFromReviewStep}`,
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
						Back
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
