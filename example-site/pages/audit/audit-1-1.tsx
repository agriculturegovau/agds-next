import { useRouter } from 'next/router';
import { ContentBleed, PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Stack } from '@ag.ds-next/react/stack';
import { tokens } from '@ag.ds-next/react/core';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { SideNav } from '@ag.ds-next/react/side-nav';
import { DocumentTitle } from '../../components/DocumentTitle';
import { SiteLayout } from '../../components/SiteLayout';

export function AuditPageLayout({
	breadcrumbs = [],
	title,
}: {
	breadcrumbs?: Array<{ href: string; label: string }>;
	title: string;
}) {
	const router = useRouter();
	const mergedBreadcrumbs = [
		{ href: '/', label: 'Home' },
		{ href: '/audit', label: 'Audit' },
		...breadcrumbs,
		{ label: title },
	];

	return (
		<>
			<DocumentTitle title={title} />
			<SiteLayout>
				<PageContent>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 4, lg: 3 }}>
							<ContentBleed visible={{ md: false }}>
								<SideNav
									activePath={router.asPath}
									title="Audit"
									titleLink="/audit"
									items={[
										{
											href: '/audit',
											label: 'Level 1 page - 1',
										},
										{
											href: '/audit/audit-1-2',
											label: 'Level 1 page - 2',
											items: [
												{
													href: '/audit/audit-2-1',
													label: 'Level 2 page - 1',
												},
												{
													href: '/audit/audit-2-2',
													label: 'Level 2 page - 2',
													items: [
														{
															href: '/audit/audit-3-1',
															label: 'Level 3 page - 1',
														},
														{
															href: '/audit/audit-3-2',
															label: 'Level 3 page - 2',
														},
														{
															href: '/audit/audit-3-3',
															label: 'Level 3 page - 3',
														},
													],
												},
												{
													href: '/audit/audit-2-3',
													label: 'Level 2 page - 3',
												},
											],
										},
										{
											href: '/audit/audit-1-3',
											label: 'Level 1 page - 3',
										},
									]}
								/>
							</ContentBleed>
						</Column>
						<Column columnSpan={{ xs: 12, md: 8 }} columnStart={{ lg: 5 }}>
							<Stack flexGrow={1} gap={3}>
								<Breadcrumbs links={mergedBreadcrumbs} />
								<Stack gap={1.5} maxWidth={tokens.maxWidth.bodyText}>
									<Prose>
										<h1>{title}</h1>
										<p>This is a {title} page.</p>
									</Prose>
								</Stack>
							</Stack>
						</Column>
					</Columns>
				</PageContent>
			</SiteLayout>
		</>
	);
}

export default function AuditPageL11() {
	return <AuditPageLayout title="Level 1 page - 1" />;
}
