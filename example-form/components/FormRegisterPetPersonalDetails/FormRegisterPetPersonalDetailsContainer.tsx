import { ReactNode, useEffect, useRef } from 'react';
import { Stack, PageAlert, H1, Text } from '@ag.ds-next/react';
import { PageTitle } from '../PageTitle';
import { useFormRegisterPetPersonalDetails } from './FormRegisterPetPersonalDetails';

export const FormRegisterPetPersonalDetailsContainer = ({
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
	const { hasCompletedPreviousStep, currentStep } =
		useFormRegisterPetPersonalDetails();

	// Focus the title of the current step as the user navigates between form steps
	useEffect(() => {
		titleRef.current?.focus();
	}, [currentStep]);

	return (
		<Stack gap={3} width="100%">
			<PageTitle
				pretext="Your personal details"
				title={
					<H1 ref={titleRef} tabIndex={-1} focus>
						{title}
					</H1>
				}
				introduction={introduction}
				callToAction={callToAction}
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
