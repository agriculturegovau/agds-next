import type { AppProps } from 'next/app';
import { Theme } from '@ag.ds-next/core';
import { theme } from '@ag.ds-next/theme-ag';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Theme theme={theme}>
			<Component {...pageProps} />
		</Theme>
	);
}

export default MyApp;
