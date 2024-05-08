import { ElementType, PropsWithChildren } from 'react';
import { LinkProps } from '../core';
import { Flex } from '../flex';
import { BaseButton, BaseButtonProps } from '../button';
import {
	ArrowDownIcon,
	ArrowRightIcon,
	ArrowLeftIcon,
	ArrowUpIcon,
} from '../icon';
import { TextLink } from '../text-link';

export type Direction = 'up' | 'right' | 'down' | 'left';

export type DirectionLinkProps = LinkProps & {
	/** The direction of the link. */
	direction: Direction;
};

export const DirectionLink = ({ children, ...props }: DirectionLinkProps) => (
	<BaseDirectionLink as={TextLink} {...props}>
		{children}
	</BaseDirectionLink>
);

export type DirectionButtonProps = BaseButtonProps & {
	/** The direction of the link. */
	direction: Direction;
};

export const DirectionButton = ({
	children,
	...props
}: DirectionButtonProps) => (
	<BaseDirectionLink as={BaseButton} {...props}>
		{children}
	</BaseDirectionLink>
);

type BaseDirectionLinkProps = PropsWithChildren<{
	as: ElementType;
	direction: Direction;
	className?: string;
}>;

const BaseDirectionLink = ({
	as,
	children,
	direction,
	className,
	...props
}: BaseDirectionLinkProps) => {
	const Icon = iconMap[direction];
	const iconLeft = direction === 'left';
	return (
		<Flex
			as={as}
			className={className}
			inline
			gap={0.5}
			alignItems="center"
			fontFamily="body"
			fontWeight="normal"
			link
			focusFor="keyboard"
			css={{ alignSelf: 'flex-start' }}
			{...props}
		>
			{iconLeft ? <Icon size="sm" /> : null}
			{children}
			{!iconLeft ? <Icon size="sm" /> : null}
		</Flex>
	);
};

const iconMap = {
	up: ArrowUpIcon,
	right: ArrowRightIcon,
	down: ArrowDownIcon,
	left: ArrowLeftIcon,
} as const;
