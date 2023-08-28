import { PropsWithChildren } from 'react';
import { mapResponsiveProp, mq, useTernaryState } from '../core';
import { AppLayoutContext } from './AppLayoutContext';
import { APP_LAYOUT_DESKTOP_BREAKPOINT } from './utils';

export type AppLayoutProps = PropsWithChildren<{
	/** Set to `true` while users are completing multi-page forms to reduce distractions. When true, the app layout sidebar will not be rendered. */
	focusMode?: boolean;
}>;

export function AppLayout({ children, focusMode = false }: AppLayoutProps) {
	const [isMobileMenuOpen, openMobileMenu, closeMobileMenu] =
		useTernaryState(false);
	return (
		<AppLayoutContext.Provider
			value={{
				focusMode,
				isMobileMenuOpen,
				openMobileMenu,
				closeMobileMenu,
			}}
		>
			<AppLayoutGrid focusMode={focusMode}>{children}</AppLayoutGrid>
		</AppLayoutContext.Provider>
	);
}

type AppLayoutGridProps = PropsWithChildren<{
	focusMode: boolean;
}>;

function AppLayoutGrid({ children, focusMode }: AppLayoutGridProps) {
	console.log({ focusMode });
	return (
		<div
			css={mq({
				display: 'grid',
				minHeight: '100vh',
				gridTemplateRows: 'auto 1fr',
				gridTemplateColumns: mapResponsiveProp({
					// There is no sidebar in focus mode or on mobile
					xs: '1fr',
					[APP_LAYOUT_DESKTOP_BREAKPOINT]: focusMode ? '1fr' : `auto 1fr`,
				}),
			})}
		>
			{children}
		</div>
	);
}
