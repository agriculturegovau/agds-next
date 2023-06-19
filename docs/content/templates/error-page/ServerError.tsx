import { Callout } from '@ag.ds-next/react/callout';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { tokens } from '@ag.ds-next/react/core';

export const ServerError = () => {
	return (
		<PageContent>
			<Stack gap={1.5} maxWidth={tokens.maxWidth.bodyText}>
				<Prose>
					<h1>Something's not right</h1>
					<p>
						There is a problem with the Export Service. We're working to fix it.
						Please try again later.
					</p>
					<p>You may be able to access other parts of the Export Service.</p>
				</Prose>
				<Callout title="Need help?">
					<Prose>
						<p>
							Call <strong>000 000 000</strong> (9am to 5pm AEST Monday to
							Friday)
							<br />
							Email{' '}
							<a href="mailto:emailaccount@agriculture.gov.au">
								emailaccount@agriculture.gov.au
							</a>
						</p>
					</Prose>
				</Callout>
				<Text color="muted">Error code: 500</Text>
			</Stack>
		</PageContent>
	);
};
