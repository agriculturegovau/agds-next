import { PropsWithChildren, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { ContentBleed } from '@ag.ds-next/react/content';
import {
	ProgressIndicator,
	ProgressIndicatorItemStatus,
} from '@ag.ds-next/react/progress-indicator';
import { Stack } from '@ag.ds-next/react/stack';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { useGlobalForm } from '../GlobalFormProvider';
import { FormContainer } from '../FormContainer';
import { task3FormSteps, useFormTask3Context } from './FormTask3Provider';

type FormTask3ContainerProps = PropsWithChildren<{
	formTitle: string;
	formIntroduction: string;
	formCallToAction?: ReactNode;
}>;

// After step 1 and 2 are completed, then review code and see if this can be deduped
export function FormTask3Container({
	formTitle,
	formIntroduction,
	formCallToAction,
	children,
}: FormTask3ContainerProps) {
	const { startTask } = useGlobalForm();
	const { backHref } = useFormTask3Context();

	// Ensure the task is marked as started when visiting any of the task 1 pages
	useEffect(() => {
		startTask('task3');
	}, [startTask]);

	return (
		<Columns>
			<Column columnSpan={{ xs: 12, md: 8 }}>
				<Stack gap={3} alignItems="flex-start">
					<DirectionLink direction="left" href={backHref}>
						Back
					</DirectionLink>
					<FormContainer
						task={3}
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
