import { ReactNode, useEffect, useRef } from 'react';
import { H1 } from '@ag.ds-next/heading';
import { Stack } from '@ag.ds-next/box';
import { PageAlert } from '@ag.ds-next/page-alert';
import { Prose } from '@ag.ds-next/prose';
import { Text } from '@ag.ds-next/text';
import { PageTitle } from '../PageTitle';
import { useFormExampleMultiStep } from './FormExampleMultiStep';

export const FormExampleMultiStepContainer = ({
	children,
	title,
	introduction,
}: {
	children: ReactNode;
	title: string;
	introduction: string;
}) => {
	const titleRef = useRef<HTMLHeadingElement>(null);
	const { hasCompletedPreviousSteps, currentStep } = useFormExampleMultiStep();

	// Focus the title of the current step as the user navigates between form steps
	useEffect(() => {
		titleRef.current?.focus();
	}, [currentStep]);

	return (
		<Stack gap={3}>
			<PageTitle
				pretext="Title of multi-page form"
				title={
					<H1 ref={titleRef} tabIndex={-1} focus>
						{title}
					</H1>
				}
				introduction={introduction}
				callToAction={
					hasCompletedPreviousSteps ? (
						<Text fontSize="xs" color="muted">
							All fields are required unless marked optional.
						</Text>
					) : null
				}
			/>
			{hasCompletedPreviousSteps ? (
				children
			) : (
				<PageAlert
					tone="warning"
					title="This section of the form is not ready to be completed"
				>
					<Prose>
						<p>
							Before starting this part of the form, you will need to go back
							and complete all of the previous sections.
						</p>
					</Prose>
				</PageAlert>
			)}
		</Stack>
	);
};
