import { ReactNode, useEffect, useRef } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { NotAvailableAlert } from '../FormMobileFoodVendorPermit/FormTask4Step1';
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
				titleRef={titleRef}
				formTitle="Your personal details"
				stepTitle={title}
				introduction={introduction}
				callToAction={callToAction}
			/>
			{hasCompletedPreviousStep ? children : <NotAvailableAlert />}
		</Stack>
	);
};
