import { Stack } from '@ag.ds-next/react/stack';
import { PageContent } from '@ag.ds-next/react/content';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { Breadcrumbs } from '@ag.ds-next/react/breadcrumbs';
import { SiteLayout } from '../../../components/SiteLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { TableWithValidation } from '../../../components/TableErrorValidation/TableWithValidation';

export default function TableWithValidationPage() {
	return (
		<>
			<DocumentTitle title="Table with validation form example" />
			<SiteLayout
				template={{ name: 'Single-page form', slug: 'table-with-validation' }}
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
										{ label: 'Table with validation' },
									]}
								/>
								<TableWithValidation />
							</Stack>
						</Column>
					</Columns>
				</PageContent>
			</SiteLayout>
		</>
	);
}
