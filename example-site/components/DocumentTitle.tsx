import Head from 'next/head';

export const DocumentTitle = ({ title }: { title?: string }) => (
	<Head>
		<title>
			{[title, 'Agriculture Design System'].filter(Boolean).join(' | ')}
		</title>
	</Head>
);
