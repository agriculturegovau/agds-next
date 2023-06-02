import { NotFound as NotFoundPage } from './NotFound';

export default {
	title: 'Templates/Not found page',
	parameters: {
		layout: 'fullscreen',
	},
};

export const NotFound = () => {
	return <NotFoundPage />;
};
