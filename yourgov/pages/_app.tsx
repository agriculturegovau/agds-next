import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState, type ReactElement, type ReactNode } from 'react';
import { theme } from '@ag.ds-next/react/ag-branding';
import { Core } from '@ag.ds-next/react/core';
import { GlobalAlert } from '@ag.ds-next/react/global-alert';
import { Text } from '@ag.ds-next/react/text';
import { LinkComponent } from '../components/LinkComponent';
import { AuthProvider } from '../lib/useAuth';
import { LinkedBusinessesProvider } from '../lib/useLinkedBusinesses';
import { safeSessionStorage } from '../lib/useSessionFormState';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const globalAlertVisible = safeSessionStorage?.getItem(
		'isGlobalAlertVisible'
	);
	const [isAlertVisible, setIsAlertVisible] = useState(false);

	useEffect(() => {
		if (!globalAlertVisible) {
			setIsAlertVisible(true);
		}
	}, [globalAlertVisible]);

	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page);
	return (
		<>
			<Head>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
			</Head>
			<Core linkComponent={LinkComponent} theme={theme}>
				<AuthProvider>
					<LinkedBusinessesProvider>
						{isAlertVisible && (
							<GlobalAlert
								onClose={() => {
									safeSessionStorage?.setItem('isGlobalAlertVisible', 'false');
									setIsAlertVisible(false);
								}}
								title="We are planning a maintenance outage to upgrade the service on 10 March 2025 from 12pm to 5pm AEDT"
								tone="info"
							>
								<Text as="p">
									You won’t be able to access yourGov during that time. We
									apologise for any inconvenience.
								</Text>
							</GlobalAlert>
						)}
						{getLayout(<Component {...pageProps} />)}
					</LinkedBusinessesProvider>
				</AuthProvider>
			</Core>
		</>
	);
}
