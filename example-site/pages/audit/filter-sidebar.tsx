import Head from 'next/head';

export default function AuditFilterSidebarRedirect() {
	return (
		<>
			<Head>
				<meta http-equiv="refresh" content="1;url=/?audit=filter-sidebar" />
			</Head>
		</>
	);
}
