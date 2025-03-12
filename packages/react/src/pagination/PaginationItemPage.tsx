import { MouseEventHandler } from 'react';
import {
	boxPalette,
	forwardRefWithAs,
	LinkProps,
	print,
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
				alignItems="center"
				aria-current={isActive ? 'page' : undefined}
				aria-label={`Go to page ${pageNumber}`}
				as={Link}
				css={{
					...(isActive
						? { color: boxPalette.foregroundText, textDecoration: 'none' }
						: undefined),
					...print.hideLinkURL,
				}}
				focusRingFor="keyboard"
				fontWeight={isActive ? 'bold' : 'normal'}
				height={{ xs: BUTTON_SIZE_XS, sm: BUTTON_SIZE_SM }}
				href={href}
				justifyContent="center"
				link
				width={{ xs: BUTTON_SIZE_XS, sm: BUTTON_SIZE_SM }}
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
				alignItems="center"
				aria-current={isActive ? 'page' : undefined}
				aria-label={`Go to page ${pageNumber}`}
				as={BaseButton}
				css={
					isActive
						? { color: boxPalette.foregroundText, textDecoration: 'none' }
						: undefined
				}
				focusRingFor="keyboard"
				fontWeight={isActive ? 'bold' : 'normal'}
				height={{ xs: BUTTON_SIZE_XS, sm: BUTTON_SIZE_SM }}
				justifyContent="center"
				link
				onClick={onClick}
				ref={forwardedRef}
				width={{ xs: BUTTON_SIZE_XS, sm: BUTTON_SIZE_SM }}
			>
				{pageNumber}
			</Flex>
		</li>
	);
});
