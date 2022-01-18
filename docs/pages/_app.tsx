import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Core } from '@ag.ds-next/core';
import { palette } from '@ag.ds-next/ag-branding';

import { LinkComponent } from '../components/LinkComponent';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Core palette={palette} linkComponent={LinkComponent}>
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
