import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useState, type ReactElement, type ReactNode } from 'react';
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
	const sessionStorageValue = safeSessionStorage?.getItem(
		'isGlobalAlertVisible'
	);
	const defaultAlertVisibility = sessionStorageValue === 'false' ? false : true;
	const [isAlertVisible, setIsAlertVisible] = useState(defaultAlertVisibility);

	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page);
	return (
		<Core theme={theme} linkComponent={LinkComponent}>
			<AuthProvider>
				<LinkedBusinessesProvider>
					{isAlertVisible && (
						<GlobalAlert
							tone="info"
							title="We are planning a maintenance outage to upgrade the service on 25 May 2024 from 12pm to 5pm AEDT"
							onClose={() => {
								safeSessionStorage?.setItem('isGlobalAlertVisible', 'false');
								setIsAlertVisible(false);
							}}
						>
							<Text as="p">
								You won&lsquo;t be able to access yourGov during that time. We
								apologise for any inconvenience.
							</Text>
						</GlobalAlert>
					)}
					{getLayout(<Component {...pageProps} />)}
				</LinkedBusinessesProvider>
			</AuthProvider>
		</Core>
	);
}
