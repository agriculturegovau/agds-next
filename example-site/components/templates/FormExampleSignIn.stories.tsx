import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { FormExampleSignInPage } from './FormExampleSignIn';

export default {
	title: 'Templates/Sign In Form',
};

export const SignInForm = () => {
	return (
		<PageTemplate>
			<FormExampleSignInPage />
		</PageTemplate>
	);
};
