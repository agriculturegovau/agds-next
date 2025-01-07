import { isValidElement, ReactNode } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { H1 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { FormRequiredFieldsMessage } from './FormRequiredFieldsMessage';

export type PageTitleProps = {
	pretext?: ReactNode;
	title: ReactNode;
	introduction?: ReactNode;
	callToAction?: ReactNode;
	hasAllFieldsRequiredMessage?: boolean;
};

export const PageTitle = ({
	pretext,
	title,
	introduction,
	callToAction,
	hasAllFieldsRequiredMessage,
}: PageTitleProps) => (
	<Stack gap={1.5}>
		<Stack>
			{pretext ? (
				<Text
					color="muted"
					fontSize="sm"
					fontWeight="bold"
					lineHeight="heading"
				>
					{pretext}
				</Text>
			) : null}
			{isValidElement(title) ? title : <H1>{title}</H1>}
		</Stack>
		{introduction ? (
			<Text as="p" color="muted" fontSize="md">
				{introduction}
			</Text>
		) : null}
		{callToAction}
		{hasAllFieldsRequiredMessage && <FormRequiredFieldsMessage />}
	</Stack>
);
