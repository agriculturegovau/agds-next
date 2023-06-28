import { Callout } from '@ag.ds-next/react/callout';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { tokens } from '@ag.ds-next/react/core';

export const ThirdPartyOutage = () => {
	return (
		<PageContent>
			<Stack gap={1.5} maxWidth={tokens.maxWidth.bodyText}>
				<Prose>
					<h1>There&apos;s a problem with the Export Service</h1>
					<p>
						Digital Identity is currently experiencing an outage. You can&apos;t
						create an account or sign into the Export Service right now. Please
						try again later.
					</p>
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
				<Text color="muted">Error code: 503</Text>
			</Stack>
		</PageContent>
	);
};
