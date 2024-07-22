import Head from 'next/head';

export default function AuditFileUploadRedirect() {
	return (
		<>
			<Head>
				<meta http-equiv="refresh" content="1;url=/?audit=file-upload" />
			</Head>
		</>
	);
}
