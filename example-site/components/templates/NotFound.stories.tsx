import { AppShell } from '../../../.storybook/components/ExampleShell';
import { NotFound as NotFoundComponent } from './NotFound';

export default {
	title: 'Patterns/Not Found',
	component: NotFoundComponent,
};

export const NotFound = () => {
	return (
		<AppShell>
			<NotFoundComponent />
		</AppShell>
	);
};
