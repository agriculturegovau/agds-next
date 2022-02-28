import { PropsWithChildren, ElementType } from 'react';
import { Box } from '@ag.ds-next/box';
import { packs } from '@ag.ds-next/core';

export type CardProps = PropsWithChildren<{
	as?: ElementType;
	background?: 'body' | 'bodyAlt';
	shadow?: boolean;
	clickable?: boolean;
}>;

const componentTokens = {
	borderColor: 'lightgray',
	shadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
	hoverShadow: '0 1px 1px rgba(0, 0, 0, 0.3)',
};

export const Card = ({
	as,
	background = 'body',
	children,
	shadow,
	clickable,
}: CardProps) => {
	return (
		<Box
			as={as} // Note: this should be an li when used in a card list
			display="block"
			border={!shadow}
			background={background}
			rounded
			css={{
				position: 'relative',
				overflow: 'hidden',

				...(clickable && {
					cursor: 'pointer',
					// If any element inside the card receives focus, add a focus ring around the wrapper card div
					'&:focus-within': packs.outline,
				}),

				...(shadow && {
					boxShadow: componentTokens.shadow,
					'&:hover': clickable
						? { boxShadow: componentTokens.hoverShadow }
						: undefined,
				}),
			}}
		>
			{children}
		</Box>
	);
};
