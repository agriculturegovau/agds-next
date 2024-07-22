import Head from 'next/head';

export default function AuditPaginationRedirect() {
	return (
		<>
			<Head>
				<meta http-equiv="refresh" content="1;url=/?audit=pagination" />
			</Head>
		</>
	);
}
