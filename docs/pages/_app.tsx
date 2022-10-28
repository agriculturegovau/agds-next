import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Core } from '@ag.ds-next/react/core';
import { theme } from '@ag.ds-next/react/ag-branding';
import { LinkComponent } from '../components/LinkComponent';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Core theme={theme} linkComponent={LinkComponent}>
			<Head>
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
				/>
			</Head>
			<Component {...pageProps} />
		</Core>
	);
}
