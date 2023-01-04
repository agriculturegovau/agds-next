import { H1 } from '@ag.ds-next/react/heading';
import { Stack } from '@ag.ds-next/react/box';
import { Text } from '@ag.ds-next/react/text';
import { TextLink } from '@ag.ds-next/react/text-link';
import { PageContent } from '@ag.ds-next/react/content';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';

export default function NotFoundPage() {
	return (
		<>
			<DocumentTitle title="Error 404" />
			<AppLayout template={{ name: '404', slug: '404' }}>
				<PageContent
					as="main"
					id="main-content"
					tabIndex={-1}
					css={{ '&:focus': { outline: 'none' } }}
				>
					<Stack gap={1.5}>
						<H1>Page not found</H1>
						<Text as="p" fontSize="md">
							Check the web address is correct or go back to the{' '}
							<TextLink href="/">Export Service</TextLink>.
						</Text>
						<Text>Error code: 404</Text>
					</Stack>
				</PageContent>
			</AppLayout>
		</>
	);
}
