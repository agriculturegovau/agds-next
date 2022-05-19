import { H1 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { Content } from '@ag.ds-next/content';

import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { Stack } from '@ag.ds-next/box';

export default function NotFoundPage() {
	return (
		<>
			<DocumentTitle title="Error 404" />
			<AppLayout>
				<Content>
					<Stack gap={1.5}>
						<H1>Page not found</H1>
						<Text as="p">Error code: 404</Text>
					</Stack>
				</Content>
			</AppLayout>
		</>
	);
}
