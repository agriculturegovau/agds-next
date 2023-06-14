import { Callout } from '@ag.ds-next/react/callout';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { Text } from '@ag.ds-next/react/text';
import { DocumentTitle } from '../components/DocumentTitle';
import { SiteLayout } from '../components/SiteLayout';

export default function NotFoundPage() {
	return (
		<>
			<DocumentTitle title="Page not found" />
			<SiteLayout template={{ name: 'Error page', slug: 'error-page' }}>
				<PageContent>
					<Stack gap={1.5}>
						<Prose>
							<h1>Page not found</h1>
							<p>
								Check the web address is correct or go back to the{' '}
								<a href="#">Export Service</a>.
							</p>
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
						<Text color="muted">Error code: 404</Text>
					</Stack>
				</PageContent>
			</SiteLayout>
		</>
	);
}
