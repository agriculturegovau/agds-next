import { MarsAppLayout } from './MarsAppLayout';
import { MarsApplications } from './MarsApplications';

export default {
	title: 'MARS/Applications',
	component: MarsApplications,
	parameters: {
		layout: 'fullscreen',
	},
};

export const Applications = () => {
	return (
		<MarsAppLayout>
			<MarsApplications />
		</MarsAppLayout>
	);
};
