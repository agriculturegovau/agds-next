import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { tokens } from '@ag.ds-next/react/core';

export const NotFound = () => {
	return (
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
	);
};
