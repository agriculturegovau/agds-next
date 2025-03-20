import { createContext, type PropsWithChildren, type ElementType } from 'react';
import { Box } from '../box';
import { packs, tokens } from '../core';

type CardContextType = {
	background?: 'body' | 'bodyAlt';
	clickable?: boolean;
	footerOutside?: boolean;
	shadow?: boolean;
};

export const CardContext = createContext<CardContextType | undefined>(
	undefined
);

export type CardProps = PropsWithChildren<
	{
		as?: ElementType;
		/** The CSS class name, typically generated from the `css` prop. */
		className?: string;
	} & CardContextType
>;

export const Card = ({
	as,
	background = 'body',
	children,
	className,
	clickable,
	footerOutside,
	shadow,
}: CardProps) => {
	return (
		<CardContext.Provider
			value={{ background, clickable, footerOutside, shadow }}
		>
			<Box
				as={as} // Note: this should be an li when used in a card list
				className={className}
				display="flex"
				flexDirection="column"
				flexGrow={1}
				{...(footerOutside
					? {}
					: cardStyleProps({
							background,
							clickable,
							shadow,
					  }))}
			>
				{children}
			</Box>
		</CardContext.Provider>
	);
};

export const cardStyleProps = ({
	background,
	clickable,
	shadow,
}: {
	background: CardContextType['background'];
	clickable?: CardContextType['clickable'];
	shadow?: CardContextType['shadow'];
}) =>
	({
		background: background,
		border: true,
		borderColor: 'muted',
		rounded: true,
		css: {
			overflow: 'hidden',
			position: 'relative',
			...(clickable && {
				// If any element inside the card receives `:focus-visible`, add a focus ring around the wrapper
				':has(:focus-visible)': packs.outline,
				// If the browser does not support :has, use `:focus-within`
				'@supports not selector(:has(*))': {
					':focus-within': packs.outline,
				},
			}),

			...(shadow && {
				boxShadow: tokens.shadow.sm,
				'&:hover': clickable ? { boxShadow: tokens.shadow.md } : undefined,
			}),
		},
	}) as const;
