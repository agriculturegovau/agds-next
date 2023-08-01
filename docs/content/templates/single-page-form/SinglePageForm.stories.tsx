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

export const FormPage = {
	name: 'Website form',
	render: () => (
		<SiteLayout>
			<SinglePageFormPage />
		</SiteLayout>
	),
};

export const SuccessPage = {
	name: 'Website form success',
	render: () => (
		<SiteLayout>
			<SinglePageFormSuccess />
		</SiteLayout>
	),
};

export const InAppFormPage = {
	name: 'Application form',
	render: () => (
		<AppLayout>
			<SinglePageFormPage />
		</AppLayout>
	),
};
export const InAppSuccessPage = {
	name: 'Application form success',
	render: () => (
		<AppLayout>
			<SinglePageFormSuccess />
		</AppLayout>
	),
};
