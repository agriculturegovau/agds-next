import { forwardRef, HTMLAttributes } from 'react';
import { boxPalette, mapSpacing, packs, tokens } from '../../core';

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
		<li
			ref={ref}
			css={{
				alignItems: 'center',
				borderBottomStyle: 'solid',
				borderBottomWidth: tokens.borderWidth.sm,
				borderColor: boxPalette.borderMuted,
				display: 'flex',
				gap: mapSpacing(0.75),
				paddingBottom: mapSpacing(0.75),
				paddingLeft: mapSpacing(1),
				paddingRight: mapSpacing(1),
				paddingTop: mapSpacing(0.75),
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
		</li>
	);
});
