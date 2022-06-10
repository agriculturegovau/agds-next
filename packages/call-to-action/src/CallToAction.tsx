import { PropsWithChildren } from 'react';
import { useSpring, animated } from '@react-spring/web';
import {
	forwardRefWithAs,
	mapSpacing,
	useLinkComponent,
	usePrefersReducedMotion,
	useTernaryState,
} from '@ag.ds-next/core';
import { Flex } from '@ag.ds-next/box';
import { ChevronRightIcon } from '@ag.ds-next/icon';

const AnimatedChevronRightIcon = animated(ChevronRightIcon);

export const CallToAction = forwardRefWithAs<'a', PropsWithChildren<{}>>(
	function CallToAction({ as, children, ...props }, ref) {
		const Link = useLinkComponent();

		const [mouseOver, setMouseOverTrue, setMouseOverFalse] =
			useTernaryState(false);

		const prefersReducedMotion = usePrefersReducedMotion();
		const animationStyles = useSpring({
			from: { paddingLeft: mapSpacing(0) },
			to: { paddingLeft: mouseOver ? mapSpacing(0.25) : mapSpacing(0) },
			immediate: prefersReducedMotion,
		});

		return (
			<Flex
				as={as ?? Link}
				ref={ref}
				inline
				onMouseEnter={setMouseOverTrue}
				onMouseLeave={setMouseOverFalse}
				gap={0.5}
				alignItems="center"
				fontFamily="body"
				fontWeight="bold"
				fontSize="md"
				link
				focus
				css={{ alignSelf: 'flex-start' }}
				{...props}
			>
				{children}
				<AnimatedChevronRightIcon
					weight="bold"
					size="sm"
					style={animationStyles}
				/>
			</Flex>
		);
	}
);
