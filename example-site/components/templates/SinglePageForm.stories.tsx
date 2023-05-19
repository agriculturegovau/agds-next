import { AppLayout } from '../../../.storybook/components/AppLayout';
import { SiteLayout } from '../../../.storybook/components/SiteLayout';
import { SinglePageFormPage } from './SinglePageForm';
import { SinglePageFormSuccess } from './SinglePageFormSuccess';

export default {
	title: 'Templates/Single-page form',
	parameters: {
		layout: 'fullscreen',
	},
};

export const FormPage = () => {
	return (
		<SiteLayout>
			<SinglePageFormPage />
		</SiteLayout>
	);
};

export const SuccessPage = () => {
	return (
		<SiteLayout>
			<SinglePageFormSuccess />
		</SiteLayout>
	);
};

export const AppFormPage = () => {
	return (
		<AppLayout>
			<SinglePageFormPage />
		</AppLayout>
	);
};

export const AppSuccessPage = () => {
	return (
		<AppLayout>
			<SinglePageFormSuccess />
		</AppLayout>
	);
};
