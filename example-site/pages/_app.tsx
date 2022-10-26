import type { AppProps } from 'next/app';
import { Core, theme } from '@ag.ds-next/react';
import { LinkComponent } from '../components/LinkComponent';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Core theme={theme} linkComponent={LinkComponent}>
			<Component {...pageProps} />
		</Core>
	);
}
