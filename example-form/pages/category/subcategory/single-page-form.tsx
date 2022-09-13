import { Stack } from '@ag.ds-next/box';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
import { PageContent } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { FormExampleSinglePage } from '../../../components/FormExampleSinglePage';
import { PageTitle } from '../../../components/PageTitle';

export default function SinglePageFormPage() {
	return (
		<>
			<DocumentTitle title="Single-page form example" />
			<AppLayout>
				<PageContent>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 8 }}>
							<Stack gap={3}>
								<Breadcrumbs
									links={[
										{ href: '/', label: 'Home' },
										{ href: '/category', label: 'Category 1' },
										{
											href: '/category/subcategory',
											label: 'Subcategory page',
										},
										{ label: 'Single-page form' },
									]}
								/>
								<PageTitle
									title="Single-page form (multi-question) xxl/display (H1)"
									introduction="Introductory paragraph providing context for this single
                  page of the multi-step form. All questions on page must be
                  related - md/default (P)"
								/>
								<FormExampleSinglePage />
							</Stack>
						</Column>
					</Columns>
				</PageContent>
			</AppLayout>
		</>
	);
}
