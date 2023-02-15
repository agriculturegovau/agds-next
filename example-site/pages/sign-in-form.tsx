import { AppLayout } from '../components/AppLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { SignInFormPage } from '../components/templates/SignInForm';

export default function SignInForm() {
	return (
		<>
			<DocumentTitle title="Sign in" />
			<AppLayout template={{ name: 'Sign-in form', slug: 'sign-in' }}>
				<SignInFormPage />
			</AppLayout>
		</>
	);
}
