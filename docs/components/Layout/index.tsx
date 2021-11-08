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

export function Layout({
	pkgs,
	noNav,
	children,
	className,
	style,
}: LayoutProps) {
	return (
		<Fragment>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '18.75rem auto',
					...style,
				}}
				className={className}
			>
				{!noNav && <Navigation pkgs={pkgs} />}
				<div style={{ margin: '0 1rem' }}>{children}</div>
			</div>
			<Footer />
		</Fragment>
	);
}
