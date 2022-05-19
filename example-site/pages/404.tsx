import { H1 } from '@ag.ds-next/heading';
import { Stack } from '@ag.ds-next/box';
import { Text, TextLink } from '@ag.ds-next/text';
import { Content } from '@ag.ds-next/content';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';

export default function NotFoundPage() {
	return (
		<>
			<DocumentTitle title="Error 404" />
			<AppLayout template={{ name: '404', slug: '404' }}>
				<Content>
					<Stack gap={1.5}>
						<H1>Page not found</H1>
						<Text as="p" fontSize="md">
							Check the web address is correct or go back to the{' '}
							<TextLink href="#">Export Service</TextLink>.
						</Text>
						<Text as="p">Error code: 404</Text>
					</Stack>
				</Content>
			</AppLayout>
		</>
	);
}
