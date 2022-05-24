import type { NextPage } from 'next';
import { Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { FormExampleSinglePage } from '../components/FormExampleSinglePage';
import { Divider } from '../components/Divider';
import { PageTitle } from '../components/PageTitle';

const FormSinglePage: NextPage = () => {
	return (
		<>
			<DocumentTitle title="Single page form example" />
			<AppLayout
				template={{ name: 'Single-page form', slug: 'single-page-form' }}
			>
				<Content>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 7 }}>
							<Stack gap={3}>
								<PageTitle
									title="Single page form example"
									introduction="Lorem ipsum dolor sit amet, laoreet necessitatibus sed in, ut quem latine eligendi vim, noster utamur sit an."
								/>
								<Divider />
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
