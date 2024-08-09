import { PropsWithChildren, ReactNode } from 'react';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { Stack } from '@ag.ds-next/react/stack';
import { DirectionLink } from '@ag.ds-next/react/direction-link';
import { FormContainer } from '../FormContainer';

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
					>
						{children}
					</FormContainer>
				</Stack>
			</Column>
		</Columns>
	);
}
