import {
	Fragment,
	MouseEventHandler,
	PropsWithChildren,
	useEffect,
	useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { useTransition, animated, SpringValue } from '@react-spring/web';
import { Global } from '@emotion/react';
import FocusLock from 'react-focus-lock';
import { tokens, usePrefersReducedMotion } from '../core';
import { Box, Flex } from '../box';
import { CloseIcon } from '../icon';
import { VisuallyHidden } from '../a11y';
import { BaseButton } from '../button';
import { useAppLayoutContext } from './AppLayoutContext';

export type AppLayoutSidebarDialogProps = PropsWithChildren<{}>;

export function AppLayoutSidebarDialog({
	children,
}: AppLayoutSidebarDialogProps) {
	const { isMobileMenuOpen, closeMobileMenu } = useAppLayoutContext();
	const dialogRef = useRef<HTMLDivElement>(null);

	// Close the component when the user presses the escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.code === 'Escape') {
				e.preventDefault();
				e.stopPropagation();
				closeMobileMenu();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [closeMobileMenu]);

	// The following `useEffect` will add `aria-hidden="true"` to every direct child of the `body` element when the modal is opened.
	// This is because `aria-modal` is not yet supported by all browsers (https://a11ysupport.io/tech/aria/aria-modal_attribute).
	// This fixes a bug in certain devices where focus is not trapped correctly such as VoiceOver on iOS.
	// This has been inspired by Reach UI (https://github.com/reach/reach-ui/blob/main/packages/dialog/src/index.tsx)
	useEffect(() => {
		if (!isMobileMenuOpen || !dialogRef.current) return;
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
	}, [isMobileMenuOpen]);

	// Animation styles
	const prefersReducedMotion = usePrefersReducedMotion();
	const [overlayTransitions] = useTransition(isMobileMenuOpen, () => ({
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { duration: 150 },
		immediate: prefersReducedMotion,
	}));
	const [dialogTransitions] = useTransition(isMobileMenuOpen, () => ({
		from: { translateX: '-100%' },
		enter: { translateX: '0%' },
		leave: { translateX: '-100%' },
		config: { duration: 150 },
		immediate: prefersReducedMotion,
	}));

	return createPortal(
		<Fragment>
			{isMobileMenuOpen && <LockScroll />}
			{overlayTransitions((style, item) =>
				item ? <Overlay onClick={closeMobileMenu} style={style} /> : null
			)}
			{dialogTransitions((style, item) =>
				item ? (
					<FocusLock returnFocus>
						<AnimatedBox
							display={{ lg: 'none' }}
							background="shade"
							width={tokens.maxWidth.mobileMenu}
							css={{
								position: 'fixed',
								zIndex: 100,
								top: 0,
								left: 0,
								bottom: 0,
								overflowY: 'auto',
							}}
							style={style}
						>
							<CloseMenuButton onClick={closeMobileMenu} />
							{children}
						</AnimatedBox>
					</FocusLock>
				) : null
			)}
		</Fragment>,
		document.body
	);
}

const AnimatedBox = animated(Box);

function LockScroll() {
	return (
		<Global
			styles={{
				// Only show in mobile devices
				// Without this, `AppLayoutSidebar` stories would not correctly
				[tokens.mediaQuery.max.md]: {
					body: { overflow: 'hidden' },
				},
			}}
		/>
	);
}

function Overlay({
	onClick,
	style,
}: {
	onClick: MouseEventHandler<HTMLDivElement>;
	style: { opacity: SpringValue<number> };
}) {
	return (
		<animated.div
			css={{
				// Only show in mobile devices
				// Without this, `AppLayoutSidebar` stories would not correctly
				display: 'none',
				[tokens.mediaQuery.max.md]: {
					display: 'block',
					position: 'fixed',
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					backgroundColor: `rgba(0, 0, 0, 0.8)`,
					zIndex: 99,
				},
			}}
			onClick={onClick}
			style={style}
		/>
	);
}

function CloseMenuButton({
	onClick,
}: {
	onClick: MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<Flex
			alignItems="center"
			borderBottom
			borderColor="muted"
			paddingLeft={1}
			flexShrink={0}
		>
			<Flex
				as={BaseButton}
				onClick={onClick}
				flexDirection="column"
				alignItems="center"
				gap={0.5}
				color="action"
				fontSize="xs"
				padding={1}
				focus
			>
				<CloseIcon />
				<span aria-hidden="true">Close</span>
				<VisuallyHidden>Close menu</VisuallyHidden>
			</Flex>
		</Flex>
	);
}
