import { MouseEventHandler } from 'react';
import { mapSpacing } from '@ag.ds-next/core';
import { Flex } from '@ag.ds-next/box';
import { BaseButton } from '@ag.ds-next/button';

const SIZE = mapSpacing(3);

export function PaginationItemPage({
	pageNumber,
	onClick,
	isActive,
}: {
	pageNumber: number;
	isActive: boolean;
	onClick: MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<li>
			<Flex
				as={BaseButton}
				aria-label={`Go to page ${pageNumber}`}
				onClick={onClick}
				justifyContent="center"
				alignItems="center"
				width={SIZE}
				height={SIZE}
				link
				focus
				css={isActive ? { color: 'black', textDecoration: 'none' } : undefined}
			>
				{pageNumber}
			</Flex>
		</li>
	);
}
