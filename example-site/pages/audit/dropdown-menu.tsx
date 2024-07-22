import Head from 'next/head';

export default function AuditDropdownMenuRedirect() {
	return (
		<>
			<Head>
				<meta http-equiv="refresh" content="1;url=/?audit=dropdown-menu" />
			</Head>
		</>
	);
}
