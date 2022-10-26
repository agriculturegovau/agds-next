import { H1, Stack, Text, TextLink, PageContent } from '@ag.ds-next/react';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';

export default function NotFoundPage() {
	return (
		<>
			<DocumentTitle title="Error 404" />
			<AppLayout template={{ name: '404', slug: '404' }}>
				<PageContent as="main" id="main-content">
					<Stack gap={1.5}>
						<H1>Page not found</H1>
						<Text as="p" fontSize="md">
							Check the web address is correct or go back to the{' '}
							<TextLink href="/">Export Service</TextLink>.
						</Text>
						<Text>Error code: 404</Text>
					</Stack>
				</PageContent>
			</AppLayout>
		</>
	);
}
