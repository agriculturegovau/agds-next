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
						There's a problem with the Export Service. We're working to fix it.
						Please try again later.
					</p>
					<p>You may be able to access other parts of the Export Service.</p>
				</Prose>
				<Callout title="Need more help?">
					<Prose>
						<p>
							Call <strong>1800 571 125</strong>, Monday to Friday, 9am to 5pm
							AEST
							<br />
							Email{' '}
							<a href="mailto:exportservice@agriculture.gov.au">
								exportservice@agriculture.gov.au
							</a>
						</p>
					</Prose>
				</Callout>
				<Text color="muted">Error code: 500</Text>
			</Stack>
		</PageContent>
	);
};
