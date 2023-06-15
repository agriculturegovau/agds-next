import { SiteLayout } from '../__shared/SiteLayout';
import { SignInFormPage } from './SignInForm';

export default {
	title: 'Templates/Sign-in form page',
	parameters: {
		layout: 'fullscreen',
	},
};

export const SignInForm = {
	name: 'Sign in form',
	render: () => (
		<SiteLayout>
			<SignInFormPage />
		</SiteLayout>
	),
};
