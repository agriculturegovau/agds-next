import type { NextPage } from 'next';
import { Stack } from '@ag.ds-next/box';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
import { Content } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { FormExampleSinglePage } from '../components/FormExampleSinglePage';
import { PageTitle } from '../components/PageTitle';

const FormSinglePage: NextPage = () => {
	return (
		<>
			<DocumentTitle title="Single-page form example" />
			<AppLayout
				template={{ name: 'Single-page form', slug: 'single-page-form' }}
			>
				<Content spacing="page">
					<Columns>
						<Column columnSpan={{ xs: 12, md: 8 }}>
							<Stack gap={3}>
								<Breadcrumbs
									links={[
										{ href: '#', label: 'Home' },
										{ href: '#', label: 'Establishments' },
										{ label: 'Applications' },
									]}
								/>
								<PageTitle
									title="Provide details form title - multi question - xxl/display
                  (H1)"
									introduction="Introductory paragraph providing context for this single
                  page of the multi-step form. All questions on page must be
                  related - md/default (P)"
								/>
								<FormExampleSinglePage />
							</Stack>
						</Column>
					</Columns>
				</Content>
			</AppLayout>
		</>
	);
};

export default FormSinglePage;
