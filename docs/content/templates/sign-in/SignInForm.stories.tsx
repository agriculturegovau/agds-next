import { SiteLayout } from '../__shared/SiteLayout';
import { SignInFormPage } from './SignInForm';

export default {
	title: 'Templates/Sign-in form page',
	parameters: {
		layout: 'fullscreen',
	},
};

export const SignInForm = () => {
	return <SignInFormPage />;
};

export const InSiteContext = () => (
	<SiteLayout>
		<SignInForm />
	</SiteLayout>
);
