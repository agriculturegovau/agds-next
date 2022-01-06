import { H1 } from '@ag.ds-next/heading';
import { Flex } from '@ag.ds-next/box';

import { Layout } from '../components/Layout';
import { Text } from '@ag.ds-next/text';

export default function NotFoundPage() {
	return (
		<Layout>
			<Flex flexDirection="column" gap={1}>
				<H1>404</H1>
				<Text as="p">We could not find this page.</Text>
			</Flex>
		</Layout>
	);
}
