import Head from 'next/head';

export const DocumentTitle = ({ title }: { title?: string }) => (
	<Head>
		<title>{[title, 'yourGov'].filter(Boolean).join(' | ')}</title>
	</Head>
);
