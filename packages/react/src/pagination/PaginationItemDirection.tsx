import { ElementType, PropsWithChildren } from 'react';
import { MouseEventHandler } from 'react';
import { LinkProps } from '../core';
import { Box } from '../box';
import { Flex } from '../flex';
import { TextLink } from '../text-link';
import { BaseButton, BaseButtonProps } from '../button';
import { ArrowRightIcon, ArrowLeftIcon } from '../icon';
import { BUTTON_SIZE_XS, BUTTON_SIZE_SM } from './utils';

type Direction = 'left' | 'right';

export type PaginationItemDirectionProps = Pick<LinkProps, 'href'> & {
	direction: Direction;
};

export function PaginationItemDirection({
	direction,
	href,
}: PaginationItemDirectionProps) {
	return (
		<PaginationItemDirectionListItem direction={direction}>
			<DirectionLink
				direction={direction}
				href={href}
				aria-label={`Go to ${direction == 'left' ? 'previous' : 'next'} page`}
			>
				{direction === 'left' ? 'Previous' : 'Next'}
			</DirectionLink>
		</PaginationItemDirectionListItem>
	);
}

export type PaginationItemDirectionButtonProps = {
	direction: Direction;
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export function PaginationItemDirectionButton({
	direction,
	onClick,
}: PaginationItemDirectionButtonProps) {
	return (
		<PaginationItemDirectionListItem direction={direction}>
			<DirectionButton
				direction={direction}
				onClick={onClick}
				aria-label={`Go to ${direction == 'left' ? 'previous' : 'next'} page`}
			>
				{direction === 'left' ? 'Previous' : 'Next'}
			</DirectionButton>
		</PaginationItemDirectionListItem>
	);
}

export type PaginationItemDirectionListItemProps = LinkProps & {
	direction: Direction;
};

function PaginationItemDirectionListItem({
	children,
	direction,
}: PaginationItemDirectionListItemProps) {
	return (
		<Box
			as="li"
			paddingRight={direction === 'left' ? { sm: 1 } : undefined}
			paddingLeft={direction === 'right' ? { sm: 1 } : undefined}
		>
			{children}
		</Box>
	);
}

export type DirectionLinkProps = LinkProps & {
	direction: Direction;
};

const DirectionLink = ({ children, ...props }: DirectionLinkProps) => (
	<BaseDirectionLink as={TextLink} {...props}>
		{children}
	</BaseDirectionLink>
);

type DirectionButtonProps = BaseButtonProps & {
	direction: Direction;
};

const DirectionButton = ({ children, ...props }: DirectionButtonProps) => (
	<BaseDirectionLink as={BaseButton} {...props}>
		{children}
	</BaseDirectionLink>
);

type BaseDirectionLinkProps = PropsWithChildren<{
	as: ElementType;
	direction: Direction;
}>;

const BaseDirectionLink = ({
	as,
	children,
	direction,
	...props
}: BaseDirectionLinkProps) => {
	return (
		<Flex
			as={as}
			inline
			gap={0.5}
			justifyContent="center"
			alignItems="center"
			fontFamily="body"
			fontWeight="normal"
			link
			focus
			width={{ xs: BUTTON_SIZE_XS, sm: 'auto' }}
			height={{ xs: BUTTON_SIZE_XS, sm: BUTTON_SIZE_SM }}
			css={{
				alignSelf: 'flex-start',
			}}
			{...props}
		>
			{direction === 'left' ? <ArrowLeftIcon size="sm" /> : null}
			<Box as="span" display={['none', 'inline']}>
				{children}
			</Box>
			{direction === 'right' ? <ArrowRightIcon size="sm" /> : null}
		</Flex>
	);
};
