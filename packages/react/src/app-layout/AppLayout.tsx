import { PropsWithChildren } from 'react';
import { mapResponsiveProp, mq, useTernaryState } from '../core';
import { AppLayoutBackground, AppLayoutContext } from './AppLayoutContext';
import {
	APP_LAYOUT_DESKTOP_BREAKPOINT,
	APP_LAYOUT_SIDEBAR_WIDTH,
} from './utils';

export type AppLayoutProps = PropsWithChildren<{
	/** Set to `true` while users are completing multi-page forms to reduce distractions. When true, the app layout sidebar will not be rendered. */
	focusMode?: boolean;
	/** Controls what colour theme the AppLayout components display in, `'bodyAlt'` is light theme. */
	background?: AppLayoutBackground;
}>;

export function AppLayout({
	children,
	focusMode = false,
	background = 'body',
}: AppLayoutProps) {
	const [isMobileMenuOpen, openMobileMenu, closeMobileMenu] =
		useTernaryState(false);
	return (
		<AppLayoutContext.Provider
			value={{
				focusMode,
				isMobileMenuOpen,
				openMobileMenu,
				closeMobileMenu,
				background,
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
	return (
		<div
			css={mq({
				display: 'grid',
				minHeight: '100vh',
				gridTemplateRows: 'auto 1fr',
				gridTemplateColumns: mapResponsiveProp({
					// There is no sidebar in focus mode or on mobile
					xs: '1fr',
					[APP_LAYOUT_DESKTOP_BREAKPOINT]: focusMode
						? '1fr'
						: `${APP_LAYOUT_SIDEBAR_WIDTH} 1fr`,
				}),
			})}
		>
			{children}
		</div>
	);
}
