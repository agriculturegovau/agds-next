import type { PropsWithChildren } from 'react';
import type { AppProps } from 'next/app';
import Link, { LinkProps } from 'next/link';
import { Core } from '@ag.ds-next/core';
import { palette } from '@ag.ds-next/ag-branding';

const LinkComponent = ({
	children,
	...props
}: PropsWithChildren<LinkProps>) => (
	<Link {...props}>
		<a>{children}</a>
	</Link>
);

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Core palette={palette} linkComponent={LinkComponent}>
			<Component {...pageProps} />
		</Core>
	);
}

export default MyApp;
