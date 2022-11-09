import { isValidElement, ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';
import { H1 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';

export type FormStepTitleProps = {
	sectionTitle?: string;
	pageTitle: ReactNode;
	introduction?: ReactNode;
	callToAction?: ReactNode;
};

// Based on PageTitle, but with a different heading levels
export const FormStepTitle = ({
	sectionTitle,
	pageTitle,
	introduction,
	callToAction,
}: FormStepTitleProps) => (
	<Stack gap={1.5}>
		<Stack>
			<Text
				as="h1"
				fontSize="sm"
				color="muted"
				fontWeight="bold"
				lineHeight="heading"
			>
				{sectionTitle}
			</Text>
			{isValidElement(pageTitle) ? pageTitle : <H1 as="h2">{pageTitle}</H1>}
		</Stack>
		{introduction ? (
			<Text as="p" fontSize="md" color="muted">
				{introduction}
			</Text>
		) : null}
		{callToAction}
	</Stack>
);
