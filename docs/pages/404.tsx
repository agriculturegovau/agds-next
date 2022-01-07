import { H1 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { Content } from '@ag.ds-next/content';

import { AppLayout } from '../components/AppLayout';

export default function NotFoundPage() {
	return (
		<AppLayout>
			<Content>
				<H1>404</H1>
				<Text as="p">We could not find this page.</Text>
			</Content>
		</AppLayout>
	);
}
