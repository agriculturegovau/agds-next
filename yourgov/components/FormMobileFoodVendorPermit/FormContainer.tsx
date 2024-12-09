import { PropsWithChildren, ReactNode, useEffect, useRef } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { FormStepTitle } from '../FormStepTitle';
import { useGlobalForm } from './GlobalFormProvider';

export type FormContainerProps = PropsWithChildren<{
	callToAction?: ReactNode;
	hideRequiredFieldsMessage?: boolean;
	introduction?: string;
	shouldFocusTitle?: boolean;
	title: string;
}>;

export function FormContainer({
	callToAction,
	children,
	hideRequiredFieldsMessage,
	introduction,
	shouldFocusTitle = true,
	title,
}: FormContainerProps) {
	const { formTitle } = useGlobalForm();
	const titleRef = useRef<HTMLHeadingElement>(null);

	// Focus the title of the current step as the user navigates between form steps
	useEffect(() => {
		if (shouldFocusTitle) {
			titleRef.current?.focus();
		}
	}, [shouldFocusTitle]);

	return (
		<Stack gap={3} width="100%">
			<FormStepTitle
				titleRef={titleRef}
				formTitle={formTitle}
				stepTitle={title}
				introduction={introduction}
				callToAction={callToAction}
				hideRequiredFieldsMessage={hideRequiredFieldsMessage}
			/>
			{children}
		</Stack>
	);
}
