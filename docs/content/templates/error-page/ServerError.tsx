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
					<h1>Sorry, there is a problem with the service</h1>
					<p>Please try again later.</p>
				</Prose>
				<Callout title="Need help?">
					<Prose>
						<ul>
							<li>
								Call <a href="tel:1800 571 125">1800 571 125</a>, Monday to
								Friday, 9 am to 5 pm AEST
							</li>
							<li>
								Email{' '}
								<a href="exportservive@agriculture.gov.au">
									exportservive@agriculture.gov.au
								</a>
							</li>
						</ul>
					</Prose>
				</Callout>
				<Text color="muted">Error code: 500</Text>
			</Stack>
		</PageContent>
	);
};
