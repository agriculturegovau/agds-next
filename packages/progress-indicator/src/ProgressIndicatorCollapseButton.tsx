import { useSpring, animated } from 'react-spring';
import { Flex } from '@ag.ds-next/box';
import { ChevronDownIcon } from '@ag.ds-next/icon';
import {
	boxPalette,
	packs,
	tokens,
	usePrefersReducedMotion,
} from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';
import type { ProgressIndicatorItem } from './ProgressIndicatorItem';
import { useMemo } from 'react';

type ProgressIndicatorCollapseButtonProps = {
	ariaControls: string;
	id: string;
	isOpen: boolean;
	items: ProgressIndicatorItem[];
	onClick: () => void;
};

const AnimatedIcon = animated(ChevronDownIcon);

export const ProgressIndicatorCollapseButton = ({
	ariaControls,
	id,
	isOpen,
	items,
	onClick,
}: ProgressIndicatorCollapseButtonProps) => {
	const prefersReducedMotion = usePrefersReducedMotion();

	const iconStyle = useSpring({
		from: { transform: `rotate(0deg)` },
		to: { transform: `rotate(${isOpen ? 180 : 0}deg)` },
		immediate: prefersReducedMotion,
	});

	const title = useMemo(() => {
		const activeItemIndex = items.findIndex(({ status }) => status === 'doing');
		if (activeItemIndex === -1) return 'Progress';
		return `Doing step ${activeItemIndex + 1} of ${items.length}`;
	}, [items]);

	return (
		<Flex
			as="button"
			role="button"
			aria-controls={ariaControls}
			aria-expanded={isOpen}
			onClick={onClick}
			id={id}
			padding={1}
			justifyContent="space-between"
			alignItems="center"
			width="100%"
			focus
			css={{
				appearance: 'none',
				background: 'transparent',
				cursor: 'pointer',
				textAlign: 'left',

				'& > span': packs.underline,
				'&:hover > span': { textDecoration: 'none' },

				'&:hover': {
					background: boxPalette.backgroundShade,
				},

				[tokens.mediaQuery.min.md]: {
					display: 'none',
				},
			}}
		>
			<Text color="action" fontSize="md" fontWeight="bold">
				{title}
			</Text>
			<AnimatedIcon color="text" size="sm" weight="bold" style={iconStyle} />
		</Flex>
	);
};
