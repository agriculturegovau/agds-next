import { PropsWithChildren, ReactNode } from 'react';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { Stack } from '@ag.ds-next/react/stack';
import { FormContainer } from '../FormContainer';
import { useGlobalForm } from '../GlobalFormProvider';
import { CannotStartAlert } from '../CannotStartAlert';

type FormTask1ContainerProps = PropsWithChildren<{
	formTitle: string;
	formIntroduction: string;
	formCallToAction?: ReactNode;
}>;

export function FormTask4Container({
	formTitle,
	formIntroduction,
	formCallToAction,
	children,
}: FormTask1ContainerProps) {
	const { checkIsTaskAvailable } = useGlobalForm();
	const isTaskAvailable = checkIsTaskAvailable('task4');

	return (
		<Columns>
			<Column columnSpan={{ xs: 12, md: 8 }}>
				<Stack gap={3} alignItems="flex-start">
					<DirectionLink
						direction="left"
						href="/app/licences-and-permits/apply/mobile-food-vendor-permit/form"
					>
						Back
					</DirectionLink>
					<FormContainer
						task={4}
						title={formTitle}
						introduction={formIntroduction}
						callToAction={formCallToAction}
						hideRequiredFieldsMessage
					>
						{isTaskAvailable ? children : <CannotStartAlert />}
					</FormContainer>
				</Stack>
			</Column>
		</Columns>
	);
}
