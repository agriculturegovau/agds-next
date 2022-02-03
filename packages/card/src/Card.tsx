import { PropsWithChildren, ElementType } from 'react';
import { Box } from '@ag.ds-next/box';
import { outline } from '@ag.ds-next/core';

export type CardProps = PropsWithChildren<{
	as?: ElementType;
	shadow?: boolean;
	clickable?: boolean;
}>;

const componentTokens = {
	borderColor: 'lightgray',
	shadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
	hoverShadow: '0 1px 1px rgba(0, 0, 0, 0.3)',
};

export const Card = ({ as, children, shadow, clickable }: CardProps) => {
	return (
		<Box
			as={as} // Note: this should be an li when used in a card list
			display="block"
			border={!shadow}
			background="body"
			rounded
			css={{
				position: 'relative',
				overflow: 'hidden',
				borderColor: componentTokens.borderColor,

				...(clickable && {
					cursor: 'pointer',
					// If any element inside the card receives focus, add a focus ring around the wrapper card div
					'&:focus-within': outline,
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
