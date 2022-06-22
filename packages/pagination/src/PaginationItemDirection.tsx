{
	/* <li key={idx}>
<PaginationListItemButton
  aria-label={`Go to page ${item.page}`}
  onClick={() => props.onChange(item.page)}
  isSelected={item.isSelected}
>
  {item.page}
</PaginationListItemButton>
</li> */
}

import { MouseEventHandler } from 'react';
import { mapSpacing } from '@ag.ds-next/core';
import { DirectionButton } from '@ag.ds-next/direction-link';

const SIZE = mapSpacing(3);

export function PaginationItemDirection({
	direction,
	onClick,
}: {
	direction: 'left' | 'right';
	onClick: MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<li>
			<DirectionButton
				direction={direction}
				onClick={onClick}
				css={{ height: SIZE }}
			>
				{direction === 'left' ? 'Previous' : 'Next'}
			</DirectionButton>
		</li>
	);
}
