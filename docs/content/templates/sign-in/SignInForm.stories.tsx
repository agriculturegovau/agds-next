import { SiteLayout } from '../__shared/SiteLayout';
import { SignInFormPage } from './SignInForm';

const meta = {
	title: 'Templates/Sign-in form page',
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

export const SignInForm = {
	name: 'Website layout',
	render: () => (
		<SiteLayout>
			<SignInFormPage />
		</SiteLayout>
	),
};
