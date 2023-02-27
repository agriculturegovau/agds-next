import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { useScrollAndFocusField } from '../../components/PreArrivalReport/PreArrivalReportLayout';
import { preArrivalReportData } from '../../components/PreArrivalReport/data';
import { EditArrivalDetailsPage } from '../../components/PreArrivalReport/EditArrivalDetailsPage';

export default function VesselDetailsVesselParticulars() {
	useScrollAndFocusField();

	const router = useRouter();
	const [loading, setLoading] = useState(false);

	// Fake an API call
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		setTimeout(() => {
			router.push('/pre-arrival-report');
			setLoading(false);
		}, 1500);
	};

	return (
		<>
			<DocumentTitle title="Arrival Details | Pre-arrival report" />
			<AppLayout>
				<EditArrivalDetailsPage
					data={preArrivalReportData}
					loading={loading}
					onSubmit={onSubmit}
				/>
			</AppLayout>
		</>
	);
}
