import { MouseEventHandler } from 'react';
import {
	boxPalette,
	forwardRefWithAs,
	LinkProps,
	useLinkComponent,
} from '../core';
import { Flex } from '../flex';
import { BaseButton } from '../button';
import { BUTTON_SIZE_XS, BUTTON_SIZE_SM } from './utils';

export type PaginationItemPageProps = Pick<LinkProps, 'href'> & {
	pageNumber: number;
	isActive: boolean;
};

export function PaginationItemPage({
	pageNumber,
	href,
	isActive,
}: PaginationItemPageProps) {
	const Link = useLinkComponent();
	return (
		<li>
			<Flex
				as={Link}
				aria-label={`Go to page ${pageNumber}`}
				href={href}
				justifyContent="center"
				alignItems="center"
				width={{ xs: BUTTON_SIZE_XS, sm: BUTTON_SIZE_SM }}
				height={{ xs: BUTTON_SIZE_XS, sm: BUTTON_SIZE_SM }}
				fontWeight={isActive ? 'bold' : 'normal'}
				link
				focusRingFor="keyboard"
				aria-current={isActive ? 'page' : undefined}
				css={
					isActive
						? { color: boxPalette.foregroundText, textDecoration: 'none' }
						: undefined
				}
			>
				{pageNumber}
			</Flex>
		</li>
	);
}

export type PaginationItemPageButtonProps = Pick<LinkProps, 'href'> & {
	pageNumber: number;
	isActive: boolean;
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export const PaginationItemPageButton = forwardRefWithAs<
	'button',
	PaginationItemPageButtonProps
>(function PaginationItemPageButton(
	{ pageNumber, onClick, isActive },
	forwardedRef
) {
	return (
		<li>
			<Flex
				as={BaseButton}
				aria-label={`Go to page ${pageNumber}`}
				aria-current={isActive ? 'page' : undefined}
				onClick={onClick}
				justifyContent="center"
				alignItems="center"
				width={{ xs: BUTTON_SIZE_XS, sm: BUTTON_SIZE_SM }}
				height={{ xs: BUTTON_SIZE_XS, sm: BUTTON_SIZE_SM }}
				fontWeight={isActive ? 'bold' : 'normal'}
				link
				focusRingFor="keyboard"
				css={
					isActive
						? { color: boxPalette.foregroundText, textDecoration: 'none' }
						: undefined
				}
				ref={forwardedRef}
			>
				{pageNumber}
			</Flex>
		</li>
	);
});
