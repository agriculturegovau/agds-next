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
	footerOutside?: boolean;
	shadow?: boolean;
};

export const CardContext = createContext<CardContextType | undefined>(
	undefined
);

export type CardProps = PropsWithChildren<
	{
		/** The element to render as. Often this will be an `<li>` as Cards are predominantly displayed in lists. */
		as?: ElementType;
		/** The CSS class name, typically generated from the `css` prop. */
		className?: string;
		/** A `CardFooter` component with relevant children. */
		footer?: ReactNode;
		/** A `CardHeader` component with relevant children and/or images. */
		header?: ReactNode;
	} & CardContextType
>;

export const Card = ({
	as,
	background = 'body',
	children,
	className,
	clickable,
	footer,
	footerOutside,
	header,
	shadow,
}: CardProps) => {
	const styleProps = cardStyleProps({
		background,
		clickable,
		root: true,
		shadow,
	});
	const hasFooter = !!footer;

	if (process.env.NODE_ENV !== 'production' && footerOutside && !hasFooter) {
		console.warn(
			'Card: The `footerOutside` prop should only be used when a `footer` is provided, otherwise correct behaviour/accessibility is not guaranteed.'
		);
	}

	return (
		<CardContext.Provider
			value={{
				background,
				clickable,
				hasFooter,
				footerOutside,
				shadow,
			}}
		>
			{/* To support all of the variations of cards, we now also have separate footer and header props to allow us to structure the markup appropriately. */}
			{footer || header ? (
				<Box
					as={as} // Note: this should be an li when used in a card list
					className={className}
					data-card="root-with-parts"
					display="flex"
					flexDirection="column"
					flexGrow={1}
					{...(footerOutside ? {} : styleProps)}
				>
					{header && footerOutside ? (
						<Box
							data-card="header-footer-wrapper"
							display="flex"
							flexDirection="column"
							flexGrow={1}
							{...styleProps}
						>
							<Box data-card="header" display="flex" flexDirection="column">
								{header}
							</Box>
							<Box
								data-card="children"
								display="flex"
								flexDirection="column"
								flexGrow={1}
							>
								{children}
							</Box>
						</Box>
					) : (
						<>
							{header && (
								<Box data-card="header" display="flex" flexDirection="column">
									{header}
								</Box>
							)}
							<Box
								data-card="children"
								display="flex"
								flexDirection="column"
								flexGrow={1}
								{...(footerOutside ? styleProps : {})}
							>
								{children}
							</Box>
						</>
					)}
					{footer && <Box data-card="footer">{footer}</Box>}
				</Box>
			) : (
				<Box
					as={as} // Note: this should be an li when used in a card list
					className={className}
					data-card="root"
					display="flex"
					flexDirection="column"
					flexGrow={1}
					{...(footerOutside && !hasFooter
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
			overflow: 'hidden', // Prevents children from overflowing the card's rounded corners
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
