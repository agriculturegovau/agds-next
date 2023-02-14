import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { FormExampleSignInPage } from '../components/templates/FormExampleSignIn';

export default function SignInFormPage() {
	return (
		<>
			<DocumentTitle title="Sign in" />
			<AppLayout template={{ name: 'Sign-in form', slug: 'sign-in' }}>
				<FormExampleSignInPage />
			</AppLayout>
		</>
	);
}
