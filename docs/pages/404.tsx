import Link from 'next/link';
import { H1, H2 } from '@ag.ds-next/heading';
import { Flex } from '@ag.ds-next/box';

import { Layout } from '../components/Layout';
import { getAllNavItems } from '../lib/mdxUtils';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function NotFoundPage({ navItems }: StaticProps) {
	return (
		<Layout navItems={navItems}>
			<Flex flexDirection="column" gap={2}>
				<H1>404</H1>
				<H2>Sitemap</H2>
				<ul
					style={{
						listStyle: 'none',
						margin: 0,
						padding: 0,
					}}
				>
					<li style={{ margin: 0 }}>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					{navItems.pkgList.map(({ slug, name }) => (
						<li key={slug} style={{ margin: '1rem 0' }}>
							<Link href={`/packages/${slug}`}>
								<a>{name}</a>
							</Link>
						</li>
					))}
				</ul>
			</Flex>
		</Layout>
	);
}

export async function getStaticProps() {
	const navItems = await getAllNavItems();
	return { props: { navItems } };
}
