import { useSpring, animated } from '@react-spring/web';
import { Flex } from '@ag.ds-next/box';
import { ChevronDownIcon } from '@ag.ds-next/icon';
import { tokens, usePrefersReducedMotion } from '@ag.ds-next/core';
import { BaseButton } from '@ag.ds-next/button';
import { hoverColorMap, ProgressIndicatorBackground } from './utils';

type ProgressIndicatorCollapseButtonProps = {
	ariaControls: string;
	background?: ProgressIndicatorBackground;
	id: string;
	isOpen: boolean;
	label: string;
	onClick: () => void;
};

const AnimatedIcon = animated(ChevronDownIcon);

export const ProgressIndicatorCollapseButton = ({
	ariaControls,
	background = 'body',
	id,
	isOpen,
	label,
	onClick,
}: ProgressIndicatorCollapseButtonProps) => {
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
			background={background}
			fontWeight="bold"
			padding={1}
			justifyContent="space-between"
			alignItems="center"
			width="100%"
			link
			focus
			css={{
				'&:hover': {
					background: hoverColorMap[background],
				},

				[tokens.mediaQuery.min.md]: {
					display: 'none',
				},
			}}
		>
			{label}
			<AnimatedIcon size="sm" weight="bold" style={iconStyle} />
		</Flex>
	);
};
