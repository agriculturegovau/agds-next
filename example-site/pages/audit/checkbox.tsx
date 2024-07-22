import Head from 'next/head';

export default function AuditCheckboxRedirect() {
	return (
		<>
			<Head>
				<meta http-equiv="refresh" content="1;url=/?audit=checkbox" />
			</Head>
		</>
	);
}
