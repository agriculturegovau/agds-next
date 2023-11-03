import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Core } from '@ag.ds-next/react/core';
import { theme } from '@ag.ds-next/react/ag-branding';
import { LinkComponent } from '../components/LinkComponent';
import { AuthProvider } from '../lib/useAuth';
import { LinkedBusinessesProvider } from '../lib/useLinkedBusinesses';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page);
	return (
		<Core theme={theme} linkComponent={LinkComponent}>
			<AuthProvider>
				<LinkedBusinessesProvider>
					{getLayout(<Component {...pageProps} />)}
				</LinkedBusinessesProvider>
			</AuthProvider>
		</Core>
	);
}
