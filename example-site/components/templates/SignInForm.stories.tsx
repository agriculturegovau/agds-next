import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { SignInFormPage } from './SignInForm';

export default {
	title: 'Templates/Sign In Form',
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
