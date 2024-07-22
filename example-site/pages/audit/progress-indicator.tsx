import Head from 'next/head';

export default function AuditProgressIndicatorRedirect() {
	return (
		<>
			<Head>
				<meta http-equiv="refresh" content="1;url=/?audit=progress-indicator" />
			</Head>
		</>
	);
}
