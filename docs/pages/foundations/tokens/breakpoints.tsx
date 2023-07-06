import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose, proseBlockClassname } from '@ag.ds-next/react/prose';
import { tokens } from '@ag.ds-next/react/core';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableWrapper,
} from '@ag.ds-next/react/table';
import { InpageNav } from '@ag.ds-next/react/inpage-nav';
import { mdxComponents } from '../../../components/mdxComponents';
import { TokenLayout } from '../../../components/TokenLayout';
import { getTokenPageData, TokenPage } from '../../../lib/mdx/foundations';
import { generateToc } from '../../../lib/generateToc';

const BreakpointsChart = () => {
	const breakpoints = tokens.breakpoint;
	return (
		<div className={proseBlockClassname}>
			<TableWrapper>
				<Table>
					<TableCaption>Our Breakpoint tokens</TableCaption>
					<TableHead>
						<tr>
							<TableHeader scope="col">Token</TableHeader>
							<TableHeader scope="col">Value</TableHeader>
							<TableHeader scope="col">Media query</TableHeader>
						</tr>
					</TableHead>
					<TableBody>
						{Object.entries(breakpoints).map(([token, value]) => {
							return (
								<tr key={token}>
									<TableCell as="th" scope="row">
										{token}
									</TableCell>
									<TableCell>{value}px and up</TableCell>
									<TableCell>
										{value === 0 ? (
											'Base styles'
										) : (
											<code>{`@media (min-width: ${value}px) { ... }`}</code>
										)}
									</TableCell>
								</tr>
							);
						})}
					</TableBody>
				</Table>
			</TableWrapper>
		</div>
	);
};

export default function TokensBreakpointsPage({
	toc,
	page,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<TokenLayout slug="breakpoints">
				{toc?.length > 1 ? (
					<InpageNav
						title="On this page"
						links={toc.map((i) => ({ label: i.title, href: `#${i.slug}` }))}
					/>
				) : null}
				<Prose>
					<p>
						Experiences built with AgDS should be responsive and accessible
						across a wide range of devices. To achieve this, we use a set of
						predefined viewport widths called breakpoints. These breakpoints can
						be used to change the layout of a webpage to ensure it accommodates
						different devices.
					</p>
					<p>There are 5 predefined breakpoint tokens:</p>
					<BreakpointsChart />
					<MDXRemote {...page.source} components={mdxComponents} />
				</Prose>
			</TokenLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<{
	page: TokenPage;
	toc: Awaited<ReturnType<typeof generateToc>>;
}> = async () => {
	const page = await getTokenPageData('breakpoints');

	if (!page) {
		return { notFound: true };
	}

	const toc = await generateToc(page.content);

	return {
		props: {
			page,
			toc,
		},
	};
};
