import { PageTemplate } from '../../../.storybook/components/PageTemplate';
import { preArrivalReportData } from './data';
import { EditArrivalDetailsPage } from './EditArrivalDetailsPage';

export default {
	title: 'Examples/Pre-Arrival Report/EditArrivalDetailsPage',
	component: EditArrivalDetailsPage,
};

export const Default = () => {
	return (
		<PageTemplate>
			<EditArrivalDetailsPage
				data={preArrivalReportData}
				loading
				onSubmit={console.log}
			/>
		</PageTemplate>
	);
};
