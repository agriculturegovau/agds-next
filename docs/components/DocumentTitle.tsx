import Head from 'next/head';

export const DocumentTitle = ({
	title,
	description,
}: {
	title?: string;
	description?: string | null;
}) => (
	<Head>
		<title>
			{[title, 'Agriculture Design System'].filter(Boolean).join(' | ')}
		</title>
		{description ? <meta name="description" content={description} /> : null}
	</Head>
);
