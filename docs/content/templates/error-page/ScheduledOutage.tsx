import { Callout } from '@ag.ds-next/react/callout';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';

export const ScheduledOutage = () => {
	return (
		<PageContent>
			<Stack gap={1.5}>
				<Prose>
					<h1>There&apos;s a problem with the Export Service</h1>
					<p>
						Relationship Autorisation Manager (RAM) is down for system
						maintenance from 11:30 pm, 15 October to 7pm, 16 October.
					</p>
					<p>
						During this time you can&apos;t create an account or sign into the
						Export Service. Please try again later.
					</p>
				</Prose>
				<Callout title="If you need help:">
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
				<Text color="muted">Error code: 503</Text>
			</Stack>
		</PageContent>
	);
};
