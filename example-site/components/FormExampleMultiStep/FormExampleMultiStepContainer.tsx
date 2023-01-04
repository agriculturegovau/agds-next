import { ReactNode, useEffect, useRef } from 'react';
import { H1 } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/box';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Text } from '@ag.ds-next/react/text';
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
	const { hasCompletedPreviousStep, currentStep } = useFormExampleMultiStep();

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
					hasCompletedPreviousStep ? (
						<Text fontSize="xs" color="muted">
							All fields are required unless marked optional.
						</Text>
					) : null
				}
			/>
			{hasCompletedPreviousStep ? (
				children
			) : (
				<PageAlert
					tone="warning"
					title="This section of the form is not ready to be completed"
				>
					<Text as="p">
						Before starting this part of the form, you will need to go back and
						complete all of the previous sections.
					</Text>
				</PageAlert>
			)}
		</Stack>
	);
};
