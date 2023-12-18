import { PropsWithChildren, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { ContentBleed } from '@ag.ds-next/react/content';
import {
	ProgressIndicator,
	ProgressIndicatorItemStatus,
} from '@ag.ds-next/react/progress-indicator';
import { Stack } from '@ag.ds-next/react/stack';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { useGlobalForm } from './GlobalFormProvider';
import { FormContainer } from './FormContainer';
import { task1FormSteps, useFormTask1Context } from './FormTask1Provider';

type FormTask1ContainerProps = PropsWithChildren<{
	isSideFlow?: boolean;
	backHref?: string;
	formTitle: string;
	formIntroduction: string;
	formCallToAction?: ReactNode;
}>;

export function FormTask1Container({
	isSideFlow = false,
	backHref: backHrefProp,
	formTitle,
	formIntroduction,
	formCallToAction,
	children,
}: FormTask1ContainerProps) {
	const { pathname } = useRouter();
	const { formState, typeSearchParm } = useGlobalForm();
	const { backHref } = useFormTask1Context();

	function getStepStatus(stepIndex: number): ProgressIndicatorItemStatus {
		const step = task1FormSteps[stepIndex];
		if (step.href === pathname) return 'doing';
		if (formState.task1?.[step.formStateKey]?.completed) return 'done';
		return 'todo';
	}

	return (
		<Columns>
			{!isSideFlow && (
				<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
					<ContentBleed visible={{ md: false }}>
						<ProgressIndicator
							items={task1FormSteps.map(({ label, href }, index) => ({
								label,
								href: href + `?type=${typeSearchParm}`,
								status: getStepStatus(index),
							}))}
						/>
					</ContentBleed>
				</Column>
			)}
			<Column
				columnSpan={{ xs: 12, md: 8 }}
				columnStart={isSideFlow ? undefined : { lg: 5 }}
			>
				<Stack gap={3} alignItems="flex-start">
					<DirectionLink direction="left" href={backHrefProp ?? backHref}>
						Back
					</DirectionLink>
					<FormContainer
						task={1}
						title={formTitle}
						introduction={formIntroduction}
						callToAction={formCallToAction}
					>
						{children}
					</FormContainer>
				</Stack>
			</Column>
		</Columns>
	);
}
