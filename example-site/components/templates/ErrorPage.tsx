import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/react/box';
import { tokens } from '@ag.ds-next/react/core';
import { PageContent } from '@ag.ds-next/react/content';
import { H1 } from '@ag.ds-next/react/heading';
import { TextLink } from '@ag.ds-next/react/text-link';
import { Text } from '@ag.ds-next/react/text';

export const NotFound = () => {
	return (
		<ErrorPage title="Page not found" errorCode="404">
			<Text as="p" fontSize="md">
				Check the web address is correct or go back to the{' '}
				<TextLink href="/">Export Service</TextLink>.
			</Text>
		</ErrorPage>
	);
};

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
