import { PropsWithChildren, ElementType } from 'react';
import { Box } from '../box';
import { packs, tokens } from '../core';

export type CardProps = PropsWithChildren<{
	as?: ElementType;
	background?: 'body' | 'bodyAlt';
	/** The CSS class name, typically generated from the `css` prop. */
	className?: string;
	shadow?: boolean;
	clickable?: boolean;
}>;

export const Card = ({
	as,
	background = 'body',
	children,
	className,
	shadow,
	clickable,
}: CardProps) => {
	return (
		<Box
			as={as} // Note: this should be an li when used in a card list
			display="block"
			border
			borderColor="muted"
			background={background}
			rounded
			className={className}
			css={{
				position: 'relative',
				overflow: 'hidden',

				...(clickable && {
					// If any element inside the card receives focus, add a focus ring around the wrapper card div
					'&:focus-within': packs.outline,
				}),

				...(shadow && {
					boxShadow: tokens.shadow.sm,
					'&:hover': clickable ? { boxShadow: tokens.shadow.md } : undefined,
				}),
			}}
		>
			{children}
		</Box>
	);
};
