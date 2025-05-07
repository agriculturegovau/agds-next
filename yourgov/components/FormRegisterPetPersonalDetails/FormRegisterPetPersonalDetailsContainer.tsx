import { ReactNode, useEffect, useRef } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { PageAlert } from '@ag.ds-next/react/page-alert';
import { Text } from '@ag.ds-next/react/text';
import { FormStepTitle } from '../FormStepTitle';
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
			<FormStepTitle
				callToAction={callToAction}
				formTitle="Your personal details"
				hideRequiredFieldsMessage
				introduction={introduction}
				stepTitle={title}
				titleRef={titleRef}
			/>
			{hasCompletedPreviousStep ? (
				children
			) : (
				<PageAlert
					title="This section of the form is not ready to be completed"
					tone="warning"
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
