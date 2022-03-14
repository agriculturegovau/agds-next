import { PropsWithChildren } from 'react';
import { useSpring, animated } from 'react-spring';
import { Flex } from '@ag.ds-next/box';
import { ChevronDownIcon } from '@ag.ds-next/icon';
import { packs, tokens, usePrefersReducedMotion } from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';
import type { ProgressIndicatorItem } from './ProgressIndicatorItem';

type ProgressIndicatorCollapseButtonProps = PropsWithChildren<{
	ariaControls: string;
	id: string;
	isOpen: boolean;
	onClick: () => void;
	items: ProgressIndicatorItem[];
}>;

const AnimatedIcon = animated(ChevronDownIcon);

export const ProgressIndicatorCollapseButton = ({
	ariaControls,
	children,
	id,
	isOpen,
	onClick,
	items,
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

				'& > span': packs.underline,
				'&:hover > span': { textDecoration: 'none' },

				[tokens.mediaQuery.min.md]: {
					display: 'none',
				},
			}}
		>
			<Text color="action" fontSize="md" lineHeight="heading" fontWeight="bold">
				{children}
			</Text>
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
				<AnimatedIcon size="sm" weight="bold" style={iconStyle} />
			</Flex>
		</Flex>
	);
};
