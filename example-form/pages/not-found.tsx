import { H1 } from '@ag.ds-next/heading';
import { Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { TextLink } from '@ag.ds-next/text-link';
import { tokens } from '@ag.ds-next/core';
import { PageContent } from '@ag.ds-next/content';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';

export default function NotFoundPage() {
	return (
		<>
			<DocumentTitle title="Page not found" />
			<AppLayout>
				<PageContent
					as="main"
					id="main-content"
					tabIndex={-1}
					css={{ '&:focus': { outline: 'none' } }}
				>
					<Stack gap={1.5} maxWidth={tokens.maxWidth.bodyText}>
						<H1>Oops! This page does not exist.</H1>
						<Text as="p" fontSize="md">
							You have reached a page which is not part of the testing process.
						</Text>
						<Text as="p">
							Please go back to the{' '}
							<TextLink href="/">yourGov home page</TextLink>.
						</Text>
					</Stack>
				</PageContent>
			</AppLayout>
		</>
	);
}
