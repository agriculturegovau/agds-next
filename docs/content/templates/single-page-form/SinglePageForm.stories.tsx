import { SiteLayout } from '../__shared/SiteLayout';
import { AppLayout } from '../__shared/AppLayout';
import { SinglePageFormPage } from './SinglePageForm';
import { SinglePageFormSuccess } from './SinglePageFormSuccess';

export default {
	title: 'Templates/Single-page form',
	parameters: {
		layout: 'fullscreen',
	},
};

export const FormPage = () => {
	return <SinglePageFormPage />;
};

export const SuccessPage = () => {
	return <SinglePageFormSuccess />;
};

export const FormInSiteContext = () => (
	<SiteLayout>
		<SinglePageFormPage />
	</SiteLayout>
);

export const FormInAppContext = () => (
	<AppLayout>
		<SinglePageFormPage />
	</AppLayout>
);
