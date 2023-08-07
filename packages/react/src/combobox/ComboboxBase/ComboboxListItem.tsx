import { forwardRef, HTMLAttributes } from 'react';
import { Box } from '../../box';
import { boxPalette } from '../../core';

type ComboboxListItemProps = Omit<HTMLAttributes<HTMLLIElement>, 'color'> & {
	isActiveItem: boolean;
	isInteractive: boolean;
};

const hoverStyles = {
	color: boxPalette.foregroundText,
	textDecoration: 'underline',
	backgroundColor: boxPalette.backgroundShade,
};

export const ComboboxListItem = forwardRef<
	HTMLLIElement,
	ComboboxListItemProps
>(function ComboboxListItem(
	{ children, isActiveItem, isInteractive = true, ...props },
	ref
) {
	return (
		<Box
			ref={ref}
			as="li"
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
		</Box>
	);
});
