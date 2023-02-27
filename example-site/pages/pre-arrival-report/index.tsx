import { MarsAppLayout } from '../../components/PreArrivalReport/MarsAppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { preArrivalReportData } from '../../components/PreArrivalReport/data';
import { PreArrivalReportPage } from '../../components/PreArrivalReport/PreArrivalReportPage';

export default function VesselDetails() {
	return (
		<>
			<DocumentTitle title="Pre-arrival report" />
			<MarsAppLayout>
				<PreArrivalReportPage data={preArrivalReportData} />
			</MarsAppLayout>
		</>
	);
}
