import { MouseEventHandler } from 'react';
import { boxPalette, LinkProps, useLinkComponent } from '@ag.ds-next/core';
import { Flex } from '@ag.ds-next/box';
import { BaseButton } from '@ag.ds-next/button';
import { BUTTON_SIZE } from './utils';

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
				width={BUTTON_SIZE}
				height={BUTTON_SIZE}
				fontWeight={isActive ? 'bold' : 'normal'}
				link
				focus
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

export function PaginationItemPageButton({
	pageNumber,
	onClick,
	isActive,
}: PaginationItemPageButtonProps) {
	return (
		<li>
			<Flex
				as={BaseButton}
				aria-label={`Go to page ${pageNumber}`}
				aria-current={isActive ? 'page' : undefined}
				onClick={onClick}
				justifyContent="center"
				alignItems="center"
				width={BUTTON_SIZE}
				height={BUTTON_SIZE}
				fontWeight={isActive ? 'bold' : 'normal'}
				link
				focus
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
