import { CSSProperties, Fragment } from 'react';

import { Navigation } from '../Navigation';
import { Footer } from '../Footer';

import type { NavItems } from '../../lib/mdxUtils';

type LayoutProps = {
	navItems: NavItems;
	noNav?: boolean;
	children: React.ReactNode;
	className?: string;
	style?: CSSProperties;
};

export function Layout({ navItems, children }: LayoutProps) {
	return (
		<Fragment>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '18.75rem 1fr',
					minHeight: 'calc(100vh - 3rem)',
				}}
			>
				<Navigation navItems={navItems} />
				<div>{children}</div>
			</div>
			<Footer style={{ height: '3rem' }} />
		</Fragment>
	);
}
