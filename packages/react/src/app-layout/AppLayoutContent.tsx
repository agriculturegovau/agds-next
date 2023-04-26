import { useSpring, animated } from '@react-spring/web';
import { PropsWithChildren } from 'react';
import { Flex } from '../box';
import { tokens, usePrefersReducedMotion } from '../core';
import { useAppLayoutContext } from './AppLayoutContext';

export type AppLayoutContentProps = PropsWithChildren<{
	background?: 'body' | 'bodyAlt';
}>;

export function AppLayoutContent({
	background,
	children,
}: AppLayoutContentProps) {
	const { isMenuOpen } = useAppLayoutContext();

	const prefersReducedMotion = usePrefersReducedMotion();
	const animatedStyles = useSpring({
		marginLeft: isMenuOpen ? tokens.maxWidth.mobileMenu : '0rem',
		immediate: prefersReducedMotion,
	});

	return (
		<AnimatedFlex
			background={background}
			flexDirection="column"
			css={{
				minHeight: '100vh',
				// Never animated on mobile
				[tokens.mediaQuery.max.md]: {
					marginLeft: '0 !important',
				},
			}}
			style={animatedStyles}
		>
			{children}
		</AnimatedFlex>
	);
}

const AnimatedFlex = animated(Flex);
