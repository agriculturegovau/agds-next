import Head from 'next/head';

export default function AuditDetailsRedirect() {
	return (
		<>
			<Head>
				<meta http-equiv="refresh" content="1;url=/?audit=details" />
			</Head>
		</>
	);
}
