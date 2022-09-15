import { PropsWithChildren, ElementType } from 'react';
import { Box, linkStyles } from '@ag.ds-next/box';
import { packs } from '@ag.ds-next/core';
import { cardLinkDataAttr } from './CardLink';

export type CardProps = PropsWithChildren<{
	as?: ElementType;
	background?: 'body' | 'bodyAlt';
	/** The CSS class name, typically generated from the `css` prop. */
	className?: string;
	shadow?: boolean;
	clickable?: boolean;
}>;

const componentTokens = {
	shadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
	hoverShadow: '0 1px 1px rgba(0, 0, 0, 0.3)',
};

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
			data-agds-card
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
					cursor: 'pointer',
					[`&:hover [${cardLinkDataAttr}]`]: linkStyles['&:hover'],
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
