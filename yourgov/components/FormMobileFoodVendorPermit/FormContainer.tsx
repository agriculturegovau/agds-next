import { PropsWithChildren, ReactNode, useEffect, useRef } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
// import { PageAlert } from '@ag.ds-next/react/page-alert';
// import { Text } from '@ag.ds-next/react/text';
import { FormStepTitle } from '../FormStepTitle';
import { globalFormTasks } from './globalFormTasks';
import { useGlobalForm } from './GlobalFormProvider';
// import { useFormRegisterPetDetails } from './FormRegisterPetDetails';

export type FormContainerProps = PropsWithChildren<{
	task: 1 | 2 | 3 | 4;
	title: string;
	introduction: string;
	callToAction?: ReactNode;
}>;

export function FormContainer({
	children,
	task,
	title,
	introduction,
	callToAction,
}: FormContainerProps) {
	const { formTitle } = useGlobalForm();
	const titleRef = useRef<HTMLHeadingElement>(null);

	// Focus the title of the current step as the user navigates between form steps
	useEffect(() => {
		titleRef.current?.focus();
	}, []);

	return (
		<Stack gap={3} width="100%">
			<FormStepTitle
				titleRef={titleRef}
				formTitle={[formTitle, FORM_TITLE_MAP[task]].join(' - ')}
				stepTitle={title}
				introduction={introduction}
				callToAction={callToAction}
				// callToAction={hasCompletedPreviousStep ? callToAction : undefined} // FIXME
			/>
			{children}
			{/* {hasCompletedPreviousStep ? (
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
			)} */}
		</Stack>
	);
}

const FORM_TITLE_MAP = {
	1: globalFormTasks[0].label,
	2: globalFormTasks[1].label,
	3: globalFormTasks[2].label,
	4: globalFormTasks[3].label,
};
