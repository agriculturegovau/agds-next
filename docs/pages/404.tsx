import { H1 } from '@ag.ds-next/heading';
import { Flex } from '@ag.ds-next/box';

import { Layout } from '../components/Layout';
import { getNavItems } from '../lib/mdxUtils';
import { Text } from '@ag.ds-next/text';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function NotFoundPage({ navItems }: StaticProps) {
	return (
		<Layout navItems={navItems}>
			<Flex flexDirection="column" gap={1}>
				<H1>404</H1>
				<Text as="p">We could not find this page.</Text>
			</Flex>
		</Layout>
	);
}

export async function getStaticProps() {
	const navItems = await getNavItems();
	return { props: { navItems } };
}
