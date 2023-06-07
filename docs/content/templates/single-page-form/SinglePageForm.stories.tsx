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
