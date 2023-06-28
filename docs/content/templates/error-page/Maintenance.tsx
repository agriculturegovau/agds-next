import { Callout } from '@ag.ds-next/react/callout';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { tokens } from '@ag.ds-next/react/core';

export const Maintenance = () => {
	return (
		<PageContent>
			<Stack gap={1.5} maxWidth={tokens.maxWidth.bodyText}>
				<Prose>
					<h1>We&apos;re updating the Export Service</h1>
					<p>
						While we&apos;re down for planned maintenance, you won&apos;t be
						able to access our services.
					</p>
					<p>Please check back soon.</p>
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
			</Stack>
		</PageContent>
	);
};
