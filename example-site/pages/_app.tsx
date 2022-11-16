import type { AppProps } from 'next/app';
import { Fragment, useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Core } from '@ag.ds-next/core';
import { theme } from '@ag.ds-next/ag-branding';
import { LinkComponent } from '../components/LinkComponent';
import { trackPageView, GA_MEASUREMENT_ID } from '../lib/gtag';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		router.events.on('routeChangeComplete', trackPageView);
		router.events.on('hashChangeComplete', trackPageView);
		return () => {
			router.events.off('routeChangeComplete', trackPageView);
			router.events.off('hashChangeComplete', trackPageView);
		};
	}, [router.events]);

	return (
		<Core theme={theme} linkComponent={LinkComponent}>
			<Head>
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
				/>
			</Head>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			{GA_MEASUREMENT_ID ? (
				<Fragment>
					<Script
						strategy="afterInteractive"
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
					/>
					<Script
						id="gtag-init"
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
				</Fragment>
			) : null}
			<Component {...pageProps} />
		</Core>
	);
}
