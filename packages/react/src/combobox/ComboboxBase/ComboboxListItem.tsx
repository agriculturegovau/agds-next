import { forwardRef, HTMLAttributes } from 'react';
import { Flex } from '../../flex';
import { boxPalette, packs } from '../../core';

type ComboboxListItemProps = Omit<HTMLAttributes<HTMLLIElement>, 'color'> & {
	isActiveItem: boolean;
	isInteractive: boolean;
};

const hoverStyles = {
	color: boxPalette.foregroundText,
	backgroundColor: boxPalette.backgroundShade,
	...packs.underline,
};

export const ComboboxListItem = forwardRef<
	HTMLLIElement,
	ComboboxListItemProps
>(function ComboboxListItem(
	{ children, isActiveItem, isInteractive = true, ...props },
	ref
) {
	return (
		<Flex
			ref={ref}
			as="li"
			alignItems="center"
			paddingX={1}
			paddingY={0.75}
			borderBottom
			borderColor="muted"
			css={{
				...(isInteractive
					? {
							cursor: 'pointer',
							color: boxPalette.foregroundAction,
							'&:hover': hoverStyles,
					  }
					: undefined),
				...(isActiveItem ? hoverStyles : undefined),

				'&:last-of-type': { borderBottom: 'none' },
			}}
			{...props}
		>
			{children}
		</Flex>
	);
});
