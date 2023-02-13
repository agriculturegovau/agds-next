import { AppShell } from '../../.storybook/components/ExampleShell';
import { FormExampleSignInPage } from './FormExampleSignIn';

export default {
	title: 'Examples/Sign In Form',
};

export const SignInForm = () => {
	return (
		<AppShell>
			<FormExampleSignInPage />
		</AppShell>
	);
};
