import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { SignInFormPage } from './SignInForm';

export default {
	title: 'Templates/Sign-in form page',
	parameters: {
		layout: 'fullscreen',
	},
};

export const SignInForm = () => {
	return (
		<PageTemplate>
			<SignInFormPage />
		</PageTemplate>
	);
};
