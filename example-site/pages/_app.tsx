import type { AppProps } from 'next/app';
import { Fragment, useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Core } from '@ag.ds-next/react/core';
import { theme } from '@ag.ds-next/react/ag-branding';
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
		<Core linkComponent={LinkComponent} theme={theme}>
			<Head>
				<meta
					content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
					name="viewport"
				/>
				{/* Open graph image  */}
				<meta content="/img/ogimage.png" property="og:image" />
				{/* Favicons  */}
				<link
					href="/favicon/favicon.png"
					rel="alternate icon"
					type="image/png"
				/>
				<link href="/favicon/favicon.svg" rel="icon" type="image/svg+xml" />
				<link href="/favicon/manifest.webmanifest" rel="manifest" />
			</Head>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			{GA_MEASUREMENT_ID ? (
				<Fragment>
					<Script
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
						strategy="afterInteractive"
					/>
					<Script
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
						id="gtag-init"
						strategy="afterInteractive"
					/>
				</Fragment>
			) : null}
			<Component {...pageProps} />
		</Core>
	);
}
