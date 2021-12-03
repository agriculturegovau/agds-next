import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import Head from 'next/head';
import './main.css';
import './global.css';

import { Theme } from '@ag.ds-next/core';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<Head>
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
				/>
			</Head>
			<Theme>
				<div>
					<Component {...pageProps} />
				</div>
			</Theme>
		</Fragment>
	);
}
