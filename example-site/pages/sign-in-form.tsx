import { Stack } from '@ag.ds-next/box';
import { PageContent } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { FormExampleSignIn } from '../components/FormExampleSignIn';
import { PageTitle } from '../components/PageTitle';

export default function SignInFormPage() {
	return (
		<>
			<DocumentTitle title="Sign in" />
			<AppLayout template={{ name: 'Sign-in form', slug: 'sign-in' }}>
				<PageContent>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 7 }}>
							<Stack gap={3}>
								<PageTitle
									title="Sign in form - xxl/display (H1)"
									introduction="Introductory paragraph providing context for this sign in form. All questions on page must be related - md/default (P)."
								/>
								<FormExampleSignIn />
							</Stack>
						</Column>
					</Columns>
				</PageContent>
			</AppLayout>
		</>
	);
}
