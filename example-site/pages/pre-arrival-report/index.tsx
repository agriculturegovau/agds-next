import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { preArrivalReportData } from '../../components/PreArrivalReport/data';
import { PreArrivalReportPage } from '../../components/PreArrivalReport/PreArrivalReportPage';

export default function VesselDetails() {
	return (
		<>
			<DocumentTitle title="Pre-arrival report" />
			<AppLayout>
				<PreArrivalReportPage data={preArrivalReportData} />
			</AppLayout>
		</>
	);
}
