import { Flex } from '@ag.ds-next/box';
import { mapSpacing } from '@ag.ds-next/core';

const SIZE = mapSpacing(3);

export function PaginationItemSeperator() {
	return (
		<li aria-hidden="true">
			<Flex
				justifyContent="center"
				alignItems="center"
				width={SIZE}
				height={SIZE}
			>
				...
			</Flex>
		</li>
	);
}
