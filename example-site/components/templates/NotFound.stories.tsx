import { SiteLayout } from '../../../.storybook/components/SiteLayout';
import { NotFound as NotFoundComponent } from './NotFound';

export default {
	title: 'Templates/Not found page',
	parameters: {
		layout: 'fullscreen',
	},
};

export const NotFound = () => {
	return (
		<SiteLayout>
			<NotFoundComponent />
		</SiteLayout>
	);
};
