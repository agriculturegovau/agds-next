import { CSSProperties, Fragment } from 'react';

import { Navigation } from '../Navigation';
import { Footer } from '../Footer';

import type { Pkgs } from '../../types';

type LayoutProps = {
	pkgs: Pkgs;
	noNav?: boolean;
	children: React.ReactNode;
	className?: string;
	style?: CSSProperties;
};

export function Layout({ pkgs, children }: LayoutProps) {
	return (
		<Fragment>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '18.75rem 1fr',
					minHeight: 'calc(100vh - 3rem)',
				}}
			>
				<Navigation pkgs={pkgs} />
				<div>{children}</div>
			</div>
			<Footer style={{ height: '3rem' }} />
		</Fragment>
	);
}
