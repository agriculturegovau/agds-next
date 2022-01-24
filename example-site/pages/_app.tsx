import type { AppProps } from 'next/app';
import { Core } from '@ag.ds-next/core';
import { palette } from '@ag.ds-next/ag-branding';

import { LinkComponent } from '../components/LinkComponent';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Core palette={palette} linkComponent={LinkComponent}>
			<Component {...pageProps} />
		</Core>
	);
}

export default MyApp;
