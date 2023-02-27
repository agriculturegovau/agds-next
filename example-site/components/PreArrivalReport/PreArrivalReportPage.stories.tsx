import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { preArrivalReportData } from './data';
import { PreArrivalReportPage } from './PreArrivalReportPage';

export default {
	title: 'Examples/Pre-Arrival Report',
};

export const Review = () => (
	<PageTemplate>
		<PreArrivalReportPage data={preArrivalReportData} />
	</PageTemplate>
);
