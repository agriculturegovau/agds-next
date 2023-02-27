import { preArrivalReportData } from './data';
import { EditVesselDetailsPage } from './EditVesselDetailsPage';
import { MarsAppLayout } from './MarsAppLayout';

export default {
	title: 'MARS/Pre-Arrival Report/EditVesselDetails',
	component: EditVesselDetailsPage,
	parameters: {
		layout: 'fullscreen',
	},
};

export const EditVesselDetails = () => {
	return (
		<MarsAppLayout>
			<EditVesselDetailsPage
				data={preArrivalReportData}
				loading
				onSubmit={console.log}
			/>
		</MarsAppLayout>
	);
};
