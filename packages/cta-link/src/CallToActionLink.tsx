import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Flex } from '@ag.ds-next/box';
import { TextLink } from '@ag.ds-next/text';
import { ChevronRightIcon } from '@ag.ds-next/icon';
import {
	LinkProps,
	mapSpacing,
	usePrefersReducedMotion,
} from '@ag.ds-next/core';

export type CallToActionLinkProps = Omit<LinkProps, 'color'>;

const AnimatedChevronRightIcon = animated(ChevronRightIcon);

export const CallToActionLink = ({
	children,
	...props
}: CallToActionLinkProps) => {
	const [mouseOver, setMouseOver] = useState(false);
	const prefersReducedMotion = usePrefersReducedMotion();

	const animatedLeft = useSpring({
		from: { paddingLeft: mapSpacing(0) },
		to: { paddingLeft: mouseOver ? mapSpacing(0.25) : mapSpacing(0) },
		immediate: prefersReducedMotion,
	});

	return (
		<div
			css={{ display: 'inline-block' }}
			onMouseEnter={() => setMouseOver(true)}
			onMouseLeave={() => setMouseOver(false)}
		>
			<Flex
				as={TextLink}
				gap={0.5}
				alignItems="center"
				fontWeight="bold"
				fontSize="md"
				{...props}
			>
				{children}

				<AnimatedChevronRightIcon weight="bold" style={animatedLeft} />
			</Flex>
		</div>
	);
};
