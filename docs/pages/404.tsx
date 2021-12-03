import Link from 'next/link';

import { Layout } from '../components/Layout';
import { getAllPkgs } from '../lib/mdxUtils';
import { H1, H2 } from '@ag.ds-next/heading';
import { Flex } from '@ag.ds-next/box';

import { Pkgs } from '../types';

type PageProps = {
	pkgs: Pkgs;
};

export default function NotFoundPage({ pkgs }: PageProps) {
	return (
		<Layout pkgs={pkgs}>
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
					{pkgs.map(({ slug, name }) => (
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
	const pkgs = await getAllPkgs();
	return { props: { pkgs } };
}
