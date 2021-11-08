import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import Head from 'next/head';
import './main.css';
import './global.css';
// import { theme } from './theme.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<Head>
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
				/>
			</Head>
			<div>
				<Component {...pageProps} />
			</div>
		</Fragment>
	);
}
