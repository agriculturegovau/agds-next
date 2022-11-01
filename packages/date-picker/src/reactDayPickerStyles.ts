import {
	boxPalette,
	fontGrid,
	mapSpacing,
	packs,
	tokens,
} from '@ag.ds-next/core';
import { visuallyHiddenStyles } from '@ag.ds-next/a11y';
import { highContrastOutlineStyles } from '@ag.ds-next/box';

const cellSize = '2.875rem';

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
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			marginBottom: mapSpacing(1),
		},
		'.rdp-caption_label': {
			zIndex: 1,
			whiteSpace: 'nowrap',
			margin: 0,
			color: boxPalette.foregroundText,
			fontWeight: tokens.fontWeight.bold,
			...fontGrid('lg', 'nospace'),
		},
		// Left / right arrows
		'.rdp-nav_button': {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: tokens.borderRadius,
		},
		'.rdp-nav_button_previous': {
			position: 'absolute',
			top: mapSpacing(1.5),
			left: mapSpacing(1.5),
		},
		'.rdp-nav_button_next': {
			position: 'absolute',
			top: mapSpacing(1.5),
			right: mapSpacing(1.5),
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
			color: boxPalette.foregroundAction,
		},
		'.rdp-button[disabled]': {
			color: boxPalette.foregroundText,
			opacity: 0.3,
			cursor: 'not-allowed',
		},
		'.rdp-button:hover:not([disabled])': {
			backgroundColor: boxPalette.backgroundShade,
		},
		'.rdp-button:focus, .rdp-button:active': packs.outline,
		'.rdp-weeknumber, .rdp-day': {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: cellSize,
			height: cellSize,
			borderRadius: tokens.borderRadius,
		},
		// Table
		'.rdp-months': {
			display: 'flex',
		},
		'.rdp-month': {
			margin: `0 ${mapSpacing(1)}`,
		},
		'.rdp-month:first-of-type': {
			marginLeft: 0,
		},
		'.rdp-month:last-of-type': {
			marginRight: 0,
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
			},
		'.rdp-day_selected:not([disabled]).rdp-day_range_middle': {
			backgroundColor: boxPalette.backgroundShade,
			color: boxPalette.foregroundText,
			borderRadius: 0,
		},
		// Selected days have more rounded borders in range mode
		...(range && {
			'.rdp-day_range_start': {
				borderRadius: 0,
				borderTopLeftRadius: '50%',
				borderBottomLeftRadius: '50%',
			},
			'.rdp-day_range_end:not(.rdp-day_range_start)': {
				borderRadius: 0,
				borderTopRightRadius: '50%',
				borderBottomRightRadius: '50%',
			},
		}),
	} as const);
