import { Stack } from '@ag.ds-next/react/box';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { PageContent } from '@ag.ds-next/react/content';
import { Text } from '@ag.ds-next/react/text';
import { Columns, Column } from '@ag.ds-next/react/columns';
import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { FormExampleSinglePage } from '../../../components/FormExampleSinglePage';
import { PageTitle } from '../../../components/PageTitle';

export default function SinglePageFormPage() {
	return (
		<>
			<DocumentTitle title="Single-page form example" />
			<AppLayout
				template={{ name: 'Single-page form', slug: 'single-page-form' }}
			>
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
								<Text fontSize="xs" color="muted">
									All fields are required unless marked optional.
								</Text>
								<FormExampleSinglePage />
							</Stack>
						</Column>
					</Columns>
				</PageContent>
			</AppLayout>
		</>
	);
}
