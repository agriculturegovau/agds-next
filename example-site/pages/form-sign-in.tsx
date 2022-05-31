import type { NextPage } from 'next';
import { Stack } from '@ag.ds-next/box';
import { Content } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { FormExampleSignIn } from '../components/FormExampleSignIn';
import { PageTitle } from '../components/PageTitle';

const FormSignInPage: NextPage = () => {
	return (
		<>
			<DocumentTitle title="Sign in example" />
			<AppLayout template={{ name: 'Sign-in form', slug: 'sign-in' }}>
				<Content spacing="page">
					<Columns>
						<Column columnSpan={{ xs: 12, md: 7 }}>
							<Stack gap={3}>
								<PageTitle
									title="Sign in example"
									introduction="The page heading communicates the main focus of the page. Make your page heading descriptive and keep it succinct."
								/>
								<FormExampleSignIn />
							</Stack>
						</Column>
					</Columns>
				</Content>
			</AppLayout>
		</>
	);
};

export default FormSignInPage;
