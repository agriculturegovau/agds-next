import type { AppProps } from 'next/app';
import { Core } from '@ag.ds-next/core';
import { theme } from '@ag.ds-next/ag-branding';
import { LinkComponent } from '../components/LinkComponent';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Core theme={theme} linkComponent={LinkComponent}>
			<Component {...pageProps} />
		</Core>
	);
}
