import { PropsWithChildren } from 'react';
import { useSpring, animated } from 'react-spring';
import { Flex } from '@ag.ds-next/box';
import { ChevronDownIcon } from '@ag.ds-next/icon';
import { tokens, usePrefersReducedMotion } from '@ag.ds-next/core';

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
			as="button"
			role="button"
			aria-controls={ariaControls}
			aria-expanded={isOpen}
			aria-haspopup="menu"
			onClick={onClick}
			id={id}
			color="action"
			fontSize="md"
			lineHeight="heading"
			fontWeight="bold"
			background="body"
			padding={1}
			justifyContent="space-between"
			alignItems="center"
			width="100%"
			link
			focus
			borderBottom
			css={{
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
