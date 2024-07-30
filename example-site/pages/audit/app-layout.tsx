import Head from 'next/head';

export default function AuditAppLayoutRedirect() {
	return (
		<>
			<Head>
				<meta
					http-equiv="refresh"
					content="1;url=https://design-system.agriculture.gov.au/pr-preview/pr-1726/yourgov/app/licences-and-permits"
				/>
			</Head>
		</>
	);
}
