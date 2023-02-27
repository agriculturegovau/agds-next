import { MarsAppLayout } from './MarsAppLayout';
import { MarsHomePage } from './MarsHome';

export default {
	title: 'MARS/Home',
	component: MarsHomePage,
	parameters: {
		layout: 'fullscreen',
	},
};

export const Home = () => {
	return (
		<MarsAppLayout>
			<MarsHomePage />
		</MarsAppLayout>
	);
};
