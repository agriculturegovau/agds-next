import { MouseEventHandler } from 'react';
import { LinkProps } from '@ag.ds-next/core';
import { DirectionButton, DirectionLink } from '@ag.ds-next/direction-link';
import { BUTTON_SIZE } from './utils';

export type PaginationItemDirectionProps = Pick<LinkProps, 'href'> & {
	direction: 'left' | 'right';
};

export function PaginationItemDirection({
	direction,
	href,
}: PaginationItemDirectionProps) {
	return (
		<li>
			<DirectionLink
				direction={direction}
				href={href}
				css={{ height: BUTTON_SIZE }}
			>
				{direction === 'left' ? 'Previous' : 'Next'}
			</DirectionLink>
		</li>
	);
}

export type PaginationItemDirectionButtonProps = {
	direction: 'left' | 'right';
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export function PaginationItemDirectionButton({
	direction,
	onClick,
}: PaginationItemDirectionButtonProps) {
	return (
		<li>
			<DirectionButton
				direction={direction}
				onClick={onClick}
				css={{ height: BUTTON_SIZE }}
			>
				{direction === 'left' ? 'Previous' : 'Next'}
			</DirectionButton>
		</li>
	);
}
