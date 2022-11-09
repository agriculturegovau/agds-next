import { ReactNode, useEffect, useRef } from 'react';
import { Stack } from '@ag.ds-next/box';
import { PageAlert } from '@ag.ds-next/page-alert';
import { H1 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { FormStepTitle } from '../FormStepTitle';
import { useFormRegisterPetDetails } from './FormRegisterPetDetails';

export const FormRegisterPetDetailsContainer = ({
	children,
	title,
	introduction,
	callToAction,
}: {
	children: ReactNode;
	title: string;
	introduction: string;
	callToAction?: ReactNode;
}) => {
	const titleRef = useRef<HTMLHeadingElement>(null);
	const { hasCompletedPreviousStep, currentStep } = useFormRegisterPetDetails();

	// Focus the title of the current step as the user navigates between form steps
	useEffect(() => {
		titleRef.current?.focus();
	}, [currentStep]);

	return (
		<Stack gap={3} width="100%">
			<FormStepTitle
				sectionTitle="Your pet’s details"
				pageTitle={
					<H1 as="h2" ref={titleRef} tabIndex={-1} focus>
						{title}
					</H1>
				}
				introduction={introduction}
				callToAction={hasCompletedPreviousStep ? callToAction : undefined}
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
