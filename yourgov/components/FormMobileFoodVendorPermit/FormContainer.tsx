import { PropsWithChildren, ReactNode, useEffect, useRef } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { FormStepTitle } from '../FormStepTitle';
import { globalFormTasks } from './globalFormTasks';
import { useGlobalForm } from './GlobalFormProvider';

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
			/>
			{children}
		</Stack>
	);
}

console.log(1, globalFormTasks[1].label);

const FORM_TITLE_MAP = {
	1: globalFormTasks[0].label,
	2: globalFormTasks[1].label,
	3: globalFormTasks[2].label,
	4: globalFormTasks[3].label,
};
