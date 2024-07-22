import Head from 'next/head';

export default function AuditAppLayoutRedirect() {
	return (
		<>
			<Head>
				<meta http-equiv="refresh" content="1;url=/?audit=app-layout" />
			</Head>
		</>
	);
}
