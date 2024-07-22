import Head from 'next/head';

export default function AuditDateRangePickerRedirect() {
	return (
		<>
			<Head>
				<meta http-equiv="refresh" content="1;url=/?audit=date-range-picker" />
			</Head>
		</>
	);
}
