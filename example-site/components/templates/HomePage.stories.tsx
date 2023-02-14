import { AppShell } from '../../../.storybook/components/ExampleShell';
import { HomePage } from './HomePage';

export default {
	title: 'Patterns/Home',
};

export const Home = () => {
	return (
		<AppShell>
			<HomePage />
		</AppShell>
	);
};
