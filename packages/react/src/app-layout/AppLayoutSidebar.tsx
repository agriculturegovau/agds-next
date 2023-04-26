import {
	Fragment,
	MouseEventHandler,
	PropsWithChildren,
	useEffect,
	useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { Global } from '@emotion/react';
import { animated, useSpring } from '@react-spring/web';
import FocusLock from 'react-focus-lock';
import { boxPalette, tokens, usePrefersReducedMotion } from '../core';
import { Box, Stack } from '../box';
import { useAppLayoutContext } from './AppLayoutContext';
import { BORDER_WIDTH_XXL } from './utils';
import { AppLayoutSidebarNav, NavItem } from './AppLayoutSidebarNav';

export type AppLayoutSidebarProps = {
	/** Used for highlighting the active element. */
	activePath?: string;
	/** Groups of navigation items to display at the top of the sidebar. */
	items: NavItem[][];
};

const AnimatedBox = animated(Box);
const AnimatedStack = animated(Stack);

export function AppLayoutSidebar({ activePath, items }: AppLayoutSidebarProps) {
	const { isMobile } = useAppLayoutContext();

	if (isMobile) {
		return (
			<AppLayoutSideBarMobile>
				<AppLayoutSidebarNav activePath={activePath} items={items} />
			</AppLayoutSideBarMobile>
		);
	}

	return (
		<AppLayoutSideBarDesktop>
			<AppLayoutSidebarNav activePath={activePath} items={items} />
		</AppLayoutSideBarDesktop>
	);
}

function AppLayoutSideBarDesktop({ children }: PropsWithChildren<{}>) {
	const { isMenuOpen } = useAppLayoutContext();

	const prefersReducedMotion = usePrefersReducedMotion();
	const animatedStyles = useSpring({
		to: async (next) => {
			await next({ display: 'flex' });
			await next({
				translateX: isMenuOpen ? '0%' : '-100%',
				immediate: prefersReducedMotion,
			});
			await next({ display: isMenuOpen ? 'flex' : 'none' });
		},
	});

	return (
		<AnimatedStack
			as="aside"
			gap={1}
			dark
			background="bodyAlt"
			css={{
				position: 'fixed',
				top: 0,
				left: 0,
				bottom: 0,
				width: tokens.maxWidth.mobileMenu,
				borderLeft: `${BORDER_WIDTH_XXL}px solid ${boxPalette.accent}`,
				overflowY: 'auto',
				zIndex: 1,
				// Prevents the sidebar from flashing when closed by default
				...(!isMenuOpen && {
					display: 'none',
				}),
				// This component should never be visible on smaller devices
				[tokens.mediaQuery.max.md]: {
					display: 'none',
				},
			}}
			style={animatedStyles}
		>
			{children}
		</AnimatedStack>
	);
}

function AppLayoutSideBarMobile({ children }: PropsWithChildren<{}>) {
	const { isMenuOpen, hideMenu } = useAppLayoutContext();
	const dialogRef = useRef<HTMLDivElement>(null);

	// Close the component when the user presses the escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				hideMenu();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [hideMenu]);

	// The following `useEffect` will add `aria-hidden="true"` to every direct child of the `body` element when the modal is opened.
	// This is because `aria-modal` is not yet supported by all browsers (https://a11ysupport.io/tech/aria/aria-modal_attribute).
	// This fixes a bug in certain devices where focus is not trapped correctly such as VoiceOver on iOS.
	// This has been inspired by Reach UI (https://github.com/reach/reach-ui/blob/main/packages/dialog/src/index.tsx)
	useEffect(() => {
		if (!isMenuOpen || !dialogRef.current) return;

		const rootNodes: Element[] = [];
		const originalAttrs: (string | null)[] = [];

		document.querySelectorAll('body > *').forEach(function (node) {
			if (node === dialogRef.current) return;
			const attr = node.getAttribute('aria-hidden');
			const alreadyHidden = attr !== null && attr !== 'false';
			if (alreadyHidden) return;
			rootNodes.push(node);
			originalAttrs.push(attr);
			node.setAttribute('aria-hidden', 'true');
		});

		return () => {
			rootNodes.forEach((node, index) => {
				const originalValue = originalAttrs[index];
				if (originalValue === null) {
					node.removeAttribute('aria-hidden');
				} else {
					node.setAttribute('aria-hidden', originalValue);
				}
			});
		};
	}, [isMenuOpen]);

	const prefersReducedMotion = usePrefersReducedMotion();
	const animatedStyles = useSpring({
		translateX: isMenuOpen ? '0%' : '-100%',
		immediate: prefersReducedMotion,
	});

	if (!isMenuOpen) {
		return null;
	}

	return createPortal(
		<Fragment>
			<LockScroll />
			<Overlay onClick={hideMenu} />
			<FocusLock returnFocus disabled={!isMenuOpen}>
				<AnimatedStack
					dark
					background="bodyAlt"
					gap={1}
					css={{
						position: 'fixed',
						zIndex: 100,
						top: 0,
						left: 0,
						bottom: 0,
						overflowY: 'auto',
						width: '100%',
						borderLeft: `${BORDER_WIDTH_XXL}px solid ${boxPalette.accent}`,
						maxWidth: tokens.maxWidth.mobileMenu,
					}}
					style={animatedStyles}
				>
					{children}
				</AnimatedStack>
			</FocusLock>
		</Fragment>,
		document.body
	);
}

function Overlay({ onClick }: { onClick: MouseEventHandler<HTMLDivElement> }) {
	const prefersReducedMotion = usePrefersReducedMotion();
	const animatedStyles = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		immediate: prefersReducedMotion,
	});
	return (
		<AnimatedBox
			css={{
				position: 'fixed',
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				backgroundColor: `rgba(0, 0, 0, 0.8)`,
				zIndex: 99,
			}}
			onClick={onClick}
			style={animatedStyles}
		/>
	);
}

function LockScroll() {
	return <Global styles={{ body: { overflow: 'hidden' } }} />;
}
