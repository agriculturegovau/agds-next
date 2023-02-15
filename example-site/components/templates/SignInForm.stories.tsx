import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { SignInFormPage } from './SignInForm';

export default {
	title: 'Templates/Sign In Form',
};

export const SignInForm = () => {
	return (
		<PageTemplate>
			<SignInFormPage />
		</PageTemplate>
	);
};
