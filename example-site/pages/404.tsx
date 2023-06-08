import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { SiteLayout } from '../components/SiteLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { ErrorPage } from '../components/templates/ErrorPage';

export default function NotFoundPage() {
	return (
		<>
			<DocumentTitle title="Error 404" />
			<SiteLayout template={{ name: 'Error page', slug: 'error-page' }}>
				<ErrorPage title="Page not found" errorCode="404">
					<Text as="p" fontSize="md">
						Check the web address is correct or go back to the{' '}
						<TextLink href="/">Export Service</TextLink>.
					</Text>
				</ErrorPage>
			</SiteLayout>
		</>
	);
}
