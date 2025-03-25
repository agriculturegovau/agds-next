import {
	createContext,
	type PropsWithChildren,
	type ElementType,
	ReactNode,
} from 'react';
import { Box } from '../box';
import { packs, tokens } from '../core';

type CardContextType = {
	background?: 'body' | 'bodyAlt';
	clickable?: boolean;
	hasFooter?: boolean;
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
		/** A `CardFooter` component. */
		footer?: ReactNode;
	} & Omit<CardContextType, 'hasFooter'>
>;

export const Card = ({
	as,
	background = 'body',
	children,
	className,
	clickable,
	footer,
	shadow,
}: CardProps) => {
	const styleProps = cardStyleProps({
		background,
		clickable,
		root: true,
		shadow,
	});
	return (
		<CardContext.Provider
			value={{
				background,
				clickable,
				hasFooter: !!footer,
				shadow,
			}}
		>
			{/* To support all of the variations of cards, we now also have a footer prop which allows us to structure the markup accordingly. */}
			{footer ? (
				<Box
					as={as} // Note: this should be an li when used in a card list
					className={className}
					display="flex"
					flexDirection="column"
					flexGrow={1}
					{...(clickable ? {} : styleProps)}
				>
					<Box
						display="flex"
						flexDirection="column"
						flexGrow={1}
						{...(clickable ? styleProps : {})}
					>
						{children}
					</Box>
					<Box>{footer}</Box>
				</Box>
			) : (
				<Box
					as={as} // Note: this should be an li when used in a card list
					className={className}
					display="flex"
					flexDirection="column"
					flexGrow={1}
					{...(clickable
						? {
								css: {
									// This (and position: relative in CardFooter) allows any images as immediate children to also appear to be clickable on hover.
									// We can't make the focus ring wrap everything though because it can't look as though it includes any CardFooter content.
									position: 'relative',
									'> img:first-of-type': {
										borderTopLeftRadius: tokens.borderRadius,
										borderTopRightRadius: tokens.borderRadius,
										'+ [data-card="inner"]': {
											borderTopLeftRadius: 0,
											borderTopRightRadius: 0,
										},
									},
								},
						  }
						: styleProps)}
				>
					{children}
				</Box>
			)}
		</CardContext.Provider>
	);
};

export const cardStyleProps = ({
	background,
	clickable,
	root,
	shadow,
}: {
	background: CardContextType['background'];
	clickable?: CardContextType['clickable'];
	root?: boolean;
	shadow?: CardContextType['shadow'];
}) =>
	({
		background: background,
		border: true,
		borderColor: 'muted',
		rounded: true,
		css: {
			position: root ? 'relative' : undefined,
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
