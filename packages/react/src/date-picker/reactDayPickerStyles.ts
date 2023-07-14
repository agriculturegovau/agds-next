import { boxPalette, fontGrid, mapSpacing, packs, tokens } from '../core';
import { visuallyHiddenStyles } from '../a11y';
import { focusStyles, highContrastOutlineStyles } from '../box';

const cellSize = '3rem';

export const reactDayPickerStyles = (range: boolean) =>
	({
		// Visually hidden
		'.rdp-vhidden': visuallyHiddenStyles,
		// Base button
		'.rdp-button_reset': {
			appearance: 'none',
			background: 'none',
			border: 'none',
			margin: 0,
			padding: 0,
			cursor: 'pointer',
			color: 'inherit',
			font: 'inherit',
		},
		// Header
		'.rdp-caption': {
			position: 'relative',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			marginBottom: mapSpacing(0.5),
		},
		'.rdp-caption_label': {
			zIndex: tokens.zIndex.elevated,
			whiteSpace: 'nowrap',
			margin: 0,
			color: boxPalette.foregroundText,
			fontWeight: tokens.fontWeight.bold,
			...fontGrid('lg', 'nospace'),
		},
		// Left / right arrows
		'.rdp-nav_button': {
			position: 'absolute',
			top: 0,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '2rem',
			height: '2rem',
			borderRadius: tokens.borderRadius,
			color: boxPalette.foregroundAction,
			'&:hover': { color: boxPalette.foregroundText },
			...focusStyles,
		},
		'.rdp-nav_button_previous': {
			left: 0,
		},
		'.rdp-nav_button_next': {
			right: 0,
		},
		// Days of week
		'.rdp-head_cell': {
			verticalAlign: 'middle',
			textAlign: 'center',
			margin: 0,
			padding: 0,
			width: cellSize,
			height: cellSize,
			fontWeight: tokens.fontWeight.normal,
			color: boxPalette.foregroundMuted,
			...fontGrid('sm', 'default'),
		},
		// Day button
		'.rdp-day': {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: cellSize,
			height: cellSize,
			borderRadius: tokens.borderRadius,
			color: boxPalette.foregroundAction,
			'&[disabled]': {
				color: boxPalette.foregroundText,
				opacity: 0.3,
				cursor: 'not-allowed',
			},
			'&:not([disabled]):hover': {
				backgroundColor: boxPalette.backgroundShade,
			},
			'&:focus, &:active': packs.outline,
		},
		'.rdp-day_outside': {
			color: boxPalette.foregroundMuted,
		},
		// Table
		'.rdp-months': {
			display: 'flex',
		},
		'.rdp-month': {
			margin: `0 ${mapSpacing(1)}`,
			'&:first-of-type': { marginLeft: 0 },
			'&:last-of-type': { marginRight: 0 },
		},
		'.rdp-table': {
			margin: 0,
			maxWidth: `calc(${cellSize} * 7)`,
			borderCollapse: 'collapse',
		},
		'.rdp-tbody': {
			border: 0,
		},
		'.rdp-cell': {
			width: cellSize,
			height: cellSize,
			padding: 0,
			textAlign: 'center',
		},
		'.rdp-day_selected:not([disabled]), .rdp-day_selected:focus:not([disabled]), .rdp-day_selected:active:not([disabled]), .rdp-day_selected:hover:not([disabled]), .rdp-day_selected:hover:not([disabled])':
			{
				'&:not(:focus)': highContrastOutlineStyles,
				backgroundColor: boxPalette.foregroundAction,
				color: boxPalette.backgroundBody,
				fontWeight: tokens.fontWeight.bold,
			},
		'.rdp-day_selected:not([disabled]).rdp-day_range_middle': {
			backgroundColor: boxPalette.backgroundShade,
			color: boxPalette.foregroundText,
			fontWeight: tokens.fontWeight.bold,
			borderRadius: 0,
		},
		// Selected days have more rounded borders in range mode
		...(range && {
			'.rdp-day_range_start': {
				fontWeight: tokens.fontWeight.bold,
				borderRadius: 0,
				borderTopLeftRadius: '50%',
				borderBottomLeftRadius: '50%',
			},
			'.rdp-day_range_end:not(.rdp-day_range_start)': {
				fontWeight: tokens.fontWeight.bold,
				borderRadius: 0,
				borderTopRightRadius: '50%',
				borderBottomRightRadius: '50%',
			},
		}),
	}) as const;
