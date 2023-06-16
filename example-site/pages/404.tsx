import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { tokens } from '@ag.ds-next/react/core';
import { DocumentTitle } from '../components/DocumentTitle';
import { SiteLayout } from '../components/SiteLayout';

export default function NotFoundPage() {
	return (
		<>
			<DocumentTitle title="Page not found" />
			<SiteLayout template={{ name: 'Error page', slug: 'error-page' }}>
				<PageContent>
					<Stack gap={1.5} maxWidth={tokens.maxWidth.bodyText}>
						<Prose>
							<h1>Page not found</h1>
							<p>
								Check the web address is correct or go back to the{' '}
								<a href="#">Export Service</a>.
							</p>
						</Prose>
						<Text color="muted">Error code: 404</Text>
					</Stack>
				</PageContent>
			</SiteLayout>
		</>
	);
}
