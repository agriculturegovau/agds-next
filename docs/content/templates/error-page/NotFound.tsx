import { Prose } from '@ag.ds-next/react/prose';
import { PageContent } from '@ag.ds-next/react/content';
import { SiteLayout } from '../__shared/SiteLayout';

export const NotFound = () => {
	return (
		<SiteLayout>
			<PageContent>
				<Prose>
					<h1>Page not found</h1>
					<p>If you typed the web address, check it is correct.</p>
					<p>
						If you pasted the web address, check you copied the entire address.
					</p>
					<p>
						If the address is correct and you believe this page should exist,
						please <a href="#">contact support</a>.
					</p>
				</Prose>
			</PageContent>
		</SiteLayout>
	);
};
