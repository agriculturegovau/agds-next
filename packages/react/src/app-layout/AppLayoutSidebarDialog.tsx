import {
	Fragment,
	MouseEventHandler,
	PropsWithChildren,
	useEffect,
} from 'react';
import { createPortal } from 'react-dom';
import { useTransition, animated, SpringValue } from '@react-spring/web';
import { Global } from '@emotion/react';
import FocusLock from 'react-focus-lock';
import {
	tokens,
	usePrefersReducedMotion,
	canUseDOM,
	useAriaModalPolyfill,
} from '../core';
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

	// Polyfill usage of `aria-modal`
	const { modalContainerRef } = useAriaModalPolyfill(isMobileMenuOpen);

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

	// Animation styles
	const prefersReducedMotion = usePrefersReducedMotion();
	const [dialogTransitions] = useTransition(isMobileMenuOpen, () => ({
		from: { translateX: '-100%', opacity: 0 },
		enter: { translateX: '0%', opacity: 1 },
		leave: { translateX: '-100%', opacity: 0 },
		config: { duration: 150 },
		immediate: prefersReducedMotion,
	}));

	// Since react portals can not be rendered on the server and this component is always closed by default
	// This component doesn't need to be server side rendered
	if (!canUseDOM()) return null;

	return createPortal(
		<Fragment>
			{isMobileMenuOpen && <LockScroll />}
			{dialogTransitions(({ translateX, opacity }, item) =>
				item ? (
					<div ref={modalContainerRef}>
						<Overlay onClick={closeMobileMenu} style={{ opacity }} />
						<FocusLock returnFocus>
							<AnimatedBox
								display={{ lg: 'none' }}
								role="dialog"
								aria-modal="true"
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
								style={{ translateX }}
							>
								<CloseMenuButton onClick={closeMobileMenu} />
								{children}
							</AnimatedBox>
						</FocusLock>
					</div>
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
