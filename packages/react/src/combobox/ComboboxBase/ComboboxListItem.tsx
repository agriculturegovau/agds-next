import { forwardRef, HTMLAttributes } from 'react';
import { boxPalette, packs } from '../../core';
import { Flex } from '../../flex';

type ComboboxListItemProps = Omit<HTMLAttributes<HTMLLIElement>, 'color'> & {
	isActiveItem: boolean;
	isInteractive: boolean;
};

const hoverStyles = {
	color: boxPalette.foregroundText,
	backgroundColor: boxPalette.backgroundShade,
	'> span': packs.underline,
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
			paddingX={1}
			paddingY={0.75}
			borderBottom
			borderColor="muted"
			alignItems="center"
			gap={0.75}
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
