import { PropsWithChildren } from 'react';
import { useSpring, animated } from 'react-spring';
import { Flex, Stack } from '@ag.ds-next/box';
import { ChevronDownIcon } from '@ag.ds-next/icon';
import {
	boxPalette,
	packs,
	tokens,
	usePrefersReducedMotion,
} from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';
import type { ProgressIndicatorItem } from './ProgressIndicatorItem';

type ProgressIndicatorCollapseButtonProps = {
	ariaControls: string;
	id: string;
	isOpen: boolean;
	items: ProgressIndicatorItem[];
	onClick: () => void;
	title: string;
	subTitle?: string;
};

const AnimatedIcon = animated(ChevronDownIcon);

export const ProgressIndicatorCollapseButton = ({
	ariaControls,
	id,
	isOpen,
	items,
	onClick,
	title,
	subTitle,
}: ProgressIndicatorCollapseButtonProps) => {
	const activeItemIndex = items.findIndex(({ status }) => status === 'doing');
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
			<Stack>
				<Text color="action" fontSize="md" fontWeight="bold">
					{title}
				</Text>
				<Text color="muted" fontSize="xs">
					{subTitle}
				</Text>
			</Stack>
			<Flex gap={1}>
				{activeItemIndex > -1 ? (
					<Text
						display="inline-block"
						fontSize="xs"
						css={{ textDecoration: 'none' }}
					>
						Doing step {activeItemIndex + 1} of {items.length}
					</Text>
				) : null}
				<AnimatedIcon color="text" size="sm" weight="bold" style={iconStyle} />
			</Flex>
		</Flex>
	);
};
