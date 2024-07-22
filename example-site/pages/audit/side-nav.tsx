import Head from 'next/head';

export default function AuditSideNavRedirect() {
	return (
		<>
			<Head>
				<meta http-equiv="refresh" content="1;url=/?audit=side-nav" />
			</Head>
		</>
	);
}
