import { preArrivalReportData } from './data';
import { MarsAppLayout } from './MarsAppLayout';
import { PreArrivalReportPage } from './PreArrivalReportPage';

export default {
	title: 'MARS/Pre-Arrival Report',
	component: PreArrivalReportPage,
	parameters: {
		layout: 'fullscreen',
	},
};

export const Review = () => (
	<MarsAppLayout>
		<PreArrivalReportPage data={preArrivalReportData} />
	</MarsAppLayout>
);
