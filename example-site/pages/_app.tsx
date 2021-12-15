import type { AppProps } from 'next/app';
import { Core } from '@ag.ds-next/core';
import { palette } from '@ag.ds-next/theme-ag';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Core palette={palette}>
			<Component {...pageProps} />
		</Core>
	);
}

export default MyApp;
