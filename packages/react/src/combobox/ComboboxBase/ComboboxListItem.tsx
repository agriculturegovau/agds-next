import { forwardRef, HTMLAttributes } from 'react';
import { boxPalette, mapSpacing, packs, tokens } from '../../core';
import { useIsIos } from '../utils';

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
	const isIos = useIsIos();
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
			// Required for Android TalkBack to be able to access the list items
			// See https://issues.chromium.org/issues/40260928
			// But stops iOS from being able to access them ◔_◔
			tabIndex={isIos ? undefined : -1}
			{...props}
		>
			{children}
		</li>
	);
});
