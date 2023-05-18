import { SiteLayout } from '../components/SiteLayout';
import { DocumentTitle } from '../components/DocumentTitle';
import { SignInFormPage } from '../components/templates/SignInForm';

export default function SignInForm() {
	return (
		<>
			<DocumentTitle title="Sign in" />
			<SiteLayout template={{ name: 'Sign-in form', slug: 'sign-in' }}>
				<SignInFormPage />
			</SiteLayout>
		</>
	);
}
