import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/react/stack';
import { tokens } from '@ag.ds-next/react/core';
import { PageContent } from '@ag.ds-next/react/content';
import { H1 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';

export const ErrorPage = ({
	title,
	errorCode,
	children,
}: {
	title: string;
	errorCode: string;
	children: ReactNode;
}) => {
	return (
		<PageContent>
			<Stack gap={1.5} maxWidth={tokens.maxWidth.bodyText}>
				<H1>{title}</H1>
				{children}
				{errorCode && <Text>Error code: {errorCode}</Text>}
			</Stack>
		</PageContent>
	);
};
