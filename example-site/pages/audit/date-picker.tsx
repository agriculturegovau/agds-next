import Head from 'next/head';

export default function AuditDatePickerRedirect() {
	return (
		<>
			<Head>
				<meta http-equiv="refresh" content="1;url=/?audit=date-picker" />
			</Head>
		</>
	);
}
