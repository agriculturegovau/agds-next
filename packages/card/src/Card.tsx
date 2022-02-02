import { PropsWithChildren, ElementType } from 'react';
import { Box } from '@ag.ds-next/box';

export type CardProps = PropsWithChildren<{
	as?: ElementType;
	shadow?: boolean;
	clickable?: boolean;
}>;

export const Card = ({ as, children, shadow }: CardProps) => {
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
			}}

			// display:block; -- redundant, it's a div
			// width: 100%; -- not sure this is needed.
			// border-radius: $AU-border-radius; -- rounded
			// border: 1px solid $AU-card-divider; ??? new color (lightgrey)
			// font-family: $AU-font; -- Use body in the content
			// position: relative; -- css prop
			// background: $AU-color-background; -- Box prop
			// overflow:hidden; -- css prop
		>
			{children}
		</Box>
	);
};
