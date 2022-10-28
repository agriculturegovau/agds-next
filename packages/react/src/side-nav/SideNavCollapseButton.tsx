import { PropsWithChildren } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Flex } from '../box';
import { BaseButton } from '../button';
import { ChevronDownIcon } from '../icon';
import { tokens, usePrefersReducedMotion } from '../core';
import { localPalette } from './utils';

const AnimatedIcon = animated(ChevronDownIcon);

type SideNavCollapseButtonProps = PropsWithChildren<{
	ariaControls: string;
	id: string;
	isOpen: boolean;
	onClick: () => void;
}>;

export const SideNavCollapseButton = ({
	ariaControls,
	children,
	id,
	isOpen,
	onClick,
}: SideNavCollapseButtonProps) => {
	const prefersReducedMotion = usePrefersReducedMotion();

	const iconStyle = useSpring({
		from: { transform: `rotate(0deg)` },
		to: { transform: `rotate(${isOpen ? 180 : 0}deg)` },
		immediate: prefersReducedMotion,
	});

	return (
		<Flex
			as={BaseButton}
			aria-controls={ariaControls}
			aria-expanded={isOpen}
			onClick={onClick}
			id={id}
			color="action"
			fontSize="md"
			lineHeight="heading"
			fontWeight="bold"
			padding={1}
			justifyContent="space-between"
			alignItems="center"
			width="100%"
			link
			focus
			borderBottom
			css={{
				'&:hover': {
					background: localPalette.hover,
				},
				[tokens.mediaQuery.min.md]: {
					display: 'none',
				},
			}}
		>
			{children}
			<AnimatedIcon size="sm" weight="bold" style={iconStyle} />
		</Flex>
	);
};
