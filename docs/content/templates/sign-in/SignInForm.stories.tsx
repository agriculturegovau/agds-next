import { SiteLayout } from '../__shared/SiteLayout';
import { SignInFormPage } from './SignInForm';

export default {
	title: 'Templates/Sign-in form page',
	parameters: {
		layout: 'fullscreen',
	},
};

export const SignInForm = {
	name: 'Website layout',
	render: () => (
		<SiteLayout>
			<SignInFormPage />
		</SiteLayout>
	),
};
