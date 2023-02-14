import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { NotFound as NotFoundComponent } from './NotFound';

export default {
	title: 'Templates/Not Found',
	component: NotFoundComponent,
};

export const NotFound = () => {
	return (
		<PageTemplate>
			<NotFoundComponent />
		</PageTemplate>
	);
};
