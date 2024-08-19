import { ReactNode, useEffect, useRef } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { CannotStartAlert } from '../FormMobileFoodVendorPermit/CannotStart';
import { FormStepTitle } from '../FormStepTitle';
import { useFormRegisterPetDetails } from './FormRegisterPetDetails';

export const FormRegisterPetDetailsContainer = ({
	children,
	title,
	introduction,
	callToAction,
	hideRequiredFieldsMessage,
}: {
	children: ReactNode;
	title: string;
	introduction: string;
	callToAction?: ReactNode;
	hideRequiredFieldsMessage?: boolean;
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
				titleRef={titleRef}
				formTitle="Your pet’s details"
				stepTitle={title}
				introduction={introduction}
				callToAction={hasCompletedPreviousStep ? callToAction : undefined}
				hideRequiredFieldsMessage={hideRequiredFieldsMessage}
			/>
			{hasCompletedPreviousStep ? children : <CannotStartAlert />}
		</Stack>
	);
};
