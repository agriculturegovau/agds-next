import { PropsWithChildren, ReactNode, useEffect } from 'react';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { Stack } from '@ag.ds-next/react/stack';
import { FormContainer } from '../FormContainer';
import { NotAvailableAlert } from '../task4/FormTask4Step1';
import { useGlobalForm } from '../GlobalFormProvider';
import { useFormTask3Context } from './FormTask3Provider';

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
	const { startTask, checkIsTaskAvailable } = useGlobalForm();
	const { backHref } = useFormTask3Context();

	const isTaskAvailable = checkIsTaskAvailable('task3');

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
						{isTaskAvailable ? children : <NotAvailableAlert />}
					</FormContainer>
				</Stack>
			</Column>
		</Columns>
	);
}
