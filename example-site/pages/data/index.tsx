import { Stack } from '@ag.ds-next/react/box';
import { Card, CardInner, CardLink } from '@ag.ds-next/react/card';
import { Columns } from '@ag.ds-next/react/columns';
import { SectionContent } from '@ag.ds-next/react/content';
import { H1, H3 } from '@ag.ds-next/react/heading';
import { Text } from '@ag.ds-next/react/text';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';

const dataPatterns = [
	{
		name: 'Table filtering (small)',
		href: '/data/table-filtering-small',
	},
	{
		name: 'Table filtering (medium)',
		href: '/data/table-filtering-medium',
	},
	{
		name: 'Data loading',
		href: '/data/data-loading',
	},
];

export default function DataPatternsPage() {
	return (
		<>
			<DocumentTitle title="Data category" />
			<AppLayout template={{ name: 'Category', slug: 'category' }}>
				<SectionContent>
					<Stack gap={1.5}>
						<H1>Data patterns</H1>
						<Columns as="ul" cols={{ xs: 1, sm: 2, md: 3 }}>
							{dataPatterns.map((pattern, idx) => (
								<Card as="li" key={idx} shadow clickable>
									<CardInner>
										<Stack gap={1}>
											<H3>
												<CardLink href={pattern.href}>{pattern.name}</CardLink>
											</H3>
											<Text as="p">
												Short descriptive paragraph designed to fit in this
												space - sm/default (P).
											</Text>
										</Stack>
									</CardInner>
								</Card>
							))}
						</Columns>
					</Stack>
				</SectionContent>
			</AppLayout>
		</>
	);
}
