import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { DocumentTitle } from '../components/DocumentTitle';
import { SiteLayout } from '../components/SiteLayout';

export default function NotFoundPage() {
	return (
		<>
			<DocumentTitle title="Error 404" />
			<SiteLayout template={{ name: '404', slug: '404' }}>
				<PageContent>
					<Prose>
						<h1>Page not found</h1>
						<p>If you typed the web address, check it is correct.</p>
						<p>
							If you pasted the web address, check you copied the entire
							address.
						</p>
						<p>
							If the address is correct and you believe this page should exist,
							please contact support.
						</p>
					</Prose>
				</PageContent>
			</SiteLayout>
		</>
	);
}
