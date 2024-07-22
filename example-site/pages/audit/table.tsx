import Head from 'next/head';

export default function AuditTableRedirect() {
	return (
		<>
			<Head>
				<meta http-equiv="refresh" content="1;url=/?audit=table" />
			</Head>
		</>
	);
}
