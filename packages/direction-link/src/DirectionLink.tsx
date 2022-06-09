import { ButtonHTMLAttributes, ElementType, PropsWithChildren } from 'react';
import { Flex } from '@ag.ds-next/box';
import { BaseButton } from '@ag.ds-next/button';
import { TextLink } from '@ag.ds-next/text';
import {
	ArrowUpIcon,
	ArrowDownIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
} from '@ag.ds-next/icon';
import { LinkProps } from '@ag.ds-next/core';

export type Direction = 'up' | 'right' | 'down' | 'left';

export type DirectionLinkProps = LinkProps & {
	direction: Direction;
};

export const DirectionLink = ({ children, ...props }: DirectionLinkProps) => (
	<DirectionLinkBase as={TextLink} {...props}>
		{children}
	</DirectionLinkBase>
);

export type DirectionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	direction: Direction;
};

export const DirectionButton = ({
	children,
	...props
}: DirectionButtonProps) => (
	<DirectionLinkBase as={BaseButton} {...props}>
		{children}
	</DirectionLinkBase>
);

type DirectionLinkBaseProps = PropsWithChildren<{
	as: ElementType;
	direction: Direction;
	className?: string;
}>;

const DirectionLinkBase = ({
	as,
	children,
	direction,
	className,
	...props
}: DirectionLinkBaseProps) => {
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
			focus
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
