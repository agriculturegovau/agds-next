import { Stack } from '@ag.ds-next/react/box';
import { PageContent } from '@ag.ds-next/react/content';
import { Prose } from '@ag.ds-next/react/prose';
import { Columns, Column } from '@ag.ds-next/react/columns';
import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { FormExampleSignIn } from '../components/FormExampleSignIn';
import { PageTitle } from '../components/PageTitle';
import { FormDivider } from '../components/FormDivider';

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
								<FormDivider />
								<Prose>
									<p>
										Don&apos;t have an account? <a href="#">Create account</a>
									</p>
									<p>
										Read our <a href="#">privacy policy</a>
									</p>
								</Prose>
							</Stack>
						</Column>
					</Columns>
				</PageContent>
			</AppLayout>
		</>
	);
}
