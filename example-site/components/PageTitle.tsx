import { isValidElement, ReactNode } from 'react';
import { Stack } from '@ag.ds-next/react/box';
import { H1 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';

export type PageTitleProps = {
	pretext?: ReactNode;
	title: ReactNode;
	introduction?: ReactNode;
	callToAction?: ReactNode;
};

export const PageTitle = ({
	pretext,
	title,
	introduction,
	callToAction,
}: PageTitleProps) => (
	<Stack gap={1.5}>
		<Stack>
			{pretext ? (
				<Text
					fontSize="sm"
					color="muted"
					fontWeight="bold"
					lineHeight="heading"
				>
					{pretext}
				</Text>
			) : null}
			{isValidElement(title) ? title : <H1>{title}</H1>}
		</Stack>
		{introduction ? (
			<Text as="p" fontSize="md" color="muted">
				{introduction}
			</Text>
		) : null}
		{callToAction}
	</Stack>
);
