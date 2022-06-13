import { PropsWithChildren } from 'react';
import { forwardRefWithAs, useLinkComponent } from '@ag.ds-next/core';
import { Flex } from '@ag.ds-next/box';
import {
	ArrowDownIcon,
	ArrowRightIcon,
	ArrowLeftIcon,
	ArrowUpIcon,
} from '@ag.ds-next/icon';

export type Direction = 'up' | 'right' | 'down' | 'left';

export type DirectionLinkProps = PropsWithChildren<{
	direction: Direction;
}>;

export const DirectionLink = forwardRefWithAs<'a', DirectionLinkProps>(
	function DirectionLink({ as, children, direction, ...props }, ref) {
		const Link = useLinkComponent();
		const Icon = ICON_MAP[direction];
		const iconLeft = direction === 'left';
		return (
			<Flex
				as={as ?? Link}
				ref={ref}
				inline
				gap={0.5}
				alignItems="center"
				fontFamily="body"
				fontWeight="normal"
				link
				focus
				css={{ alignSelf: 'flex-start' }}
				{...props}
			>
				{iconLeft ? <Icon size="sm" /> : null}
				{children}
				{!iconLeft ? <Icon size="sm" /> : null}
			</Flex>
		);
	}
);

const ICON_MAP = {
	up: ArrowUpIcon,
	right: ArrowRightIcon,
	down: ArrowDownIcon,
	left: ArrowLeftIcon,
} as const;
