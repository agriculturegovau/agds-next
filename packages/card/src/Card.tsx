import { PropsWithChildren, ElementType } from 'react';
import { Box, focusStyles } from '@ag.ds-next/box';
import { outline } from '@ag.ds-next/core';

export type CardProps = PropsWithChildren<{
	as?: ElementType;
	shadow?: boolean;
	clickable?: boolean;
}>;

export const Card = ({ as, children, shadow, clickable }: CardProps) => {
	return (
		<Box
			as={as} // Note: this should be an li when used in a card list
			display="block"
			border={!shadow}
			background="page"
			rounded
			css={{
				position: 'relative',
				overflow: 'hidden',
				borderColor: 'lightgray', // TODO: This needs a token

				...(clickable && {
					// If any element inside the card receives focus, add a focus ring around the wrapper card div
					'&:focus-within': outline,
					// can we use focusStyles from Box (may need modification)
					cursor: 'pointer',
				}),

				...(shadow && {
					boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
					'&:hover': clickable
						? {
								boxShadow: '0 1px 1px rgba(0, 0, 0, 0.3)',
						  }
						: undefined,
				}),
			}}
		>
			{children}
		</Box>
	);
};
