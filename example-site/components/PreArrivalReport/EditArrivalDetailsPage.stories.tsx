import { preArrivalReportData } from './data';
import { EditArrivalDetailsPage } from './EditArrivalDetailsPage';
import { MarsAppLayout } from './MarsAppLayout';

export default {
	title: 'MARS/Pre-Arrival Report/EditArrivalDetails',
	component: EditArrivalDetailsPage,
	parameters: {
		layout: 'fullscreen',
	},
};

export const EditArrivalDetails = () => {
	return (
		<MarsAppLayout>
			<EditArrivalDetailsPage
				data={preArrivalReportData}
				loading
				onSubmit={console.log}
			/>
		</MarsAppLayout>
	);
};
