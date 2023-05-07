import { PropsWithChildren } from 'react';
import { mapResponsiveProp, mq, tokens, useTernaryState } from '../core';
import { AppLayoutContext } from './AppLayoutContext';

export type AppLayoutProps = PropsWithChildren<{
	focusMode: boolean;
}>;

export function AppLayout({ children, focusMode }: AppLayoutProps) {
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
	return (
		<div
			css={mq({
				display: 'grid',
				minHeight: '100vh',
				gridTemplateRows: 'auto 1fr',
				gridTemplateColumns: mapResponsiveProp({
					// There is no sidebar in focus mode or on mobile
					xs: '1fr',
					lg: focusMode ? '1fr' : `${tokens.maxWidth.mobileMenu} 1fr`,
				}),
			})}
		>
			{children}
		</div>
	);
}
