import { type CSSObject } from '@emotion/react';
import { forwardRef, HTMLAttributes } from 'react';
import { boxPalette, fontGrid, mapSpacing, packs, tokens } from '../../core';
import { useIsIos } from '../utils';

type ComboboxListItemProps = Omit<HTMLAttributes<HTMLLIElement>, 'color'>;

const hoverStyles = {
	color: boxPalette.foregroundText,
	backgroundColor: boxPalette.backgroundShade,
	'> span': packs.underline,
};

const FONT_SIZE_LINE_HEIGHT = fontGrid('sm', 'default');

export const listItemStyles: CSSObject = {
	li: {
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
		'&[aria-selected="true"]': hoverStyles,
		'&:last-of-type': { borderBottom: 'none' },
		'&[data-combobox-list-item="interactive"]': {
			cursor: 'pointer',
			color: boxPalette.foregroundAction,
			'&:hover': hoverStyles,
		},
		'[data-combobox-render-item="beforeElement"]': {
			flexShrink: 0,
		},
		'[data-combobox-render-item="itemLabel"]': {
			alignItems: 'stretch',
			display: 'flex',
			flexDirection: 'column',
		},
		'[data-combobox-render-item="secondaryText"]': {
			color: boxPalette.foregroundMuted,
			fontFamily: tokens.font.body,
			fontWeight: tokens.fontWeight.normal,
			...FONT_SIZE_LINE_HEIGHT,
		},
		'[data-combobox-render-item="tertiaryText"]': {
			color: boxPalette.foregroundMuted,
			fontFamily: tokens.font.body,
			fontWeight: tokens.fontWeight.normal,
			...FONT_SIZE_LINE_HEIGHT,
		},
		'[data-combobox-render-item="endElement"]': {
			flexShrink: 0,
			marginLeft: 'auto',
		},
		'[data-combobox-render-item="renderedLabel"]': {
			color: 'inherit',
			fontFamily: tokens.font.body,
			fontWeight: tokens.fontWeight.normal,
			...FONT_SIZE_LINE_HEIGHT,
		},
	},
};

export const ComboboxListItem = forwardRef<
	HTMLLIElement,
	ComboboxListItemProps
>(function ComboboxListItem({ children, ...props }, ref) {
	const isIos = useIsIos();
	return (
		<li
			data-combobox-list-item="static"
			ref={ref}
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
