import { boxPalette, fontGrid, mapSpacing, tokens } from '../core';
import { visuallyHiddenStyles } from '../a11y';
import { focusStyles, highContrastOutlineStyles } from '../box';

const cellSizeLarge = '3rem';
const cellSizeSmall = '2.75rem';

export const reactDayPickerStyles = {
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
		color: boxPalette.foregroundMuted,
		fontWeight: tokens.fontWeight.normal,
		height: cellSizeSmall,
		margin: 0,
		padding: 0,
		width: cellSizeSmall,
		'@media(min-width: 375px)': { height: cellSizeLarge, width: cellSizeLarge },
		...fontGrid('sm', 'default'),
	},
	// Day button which is actually applied to the cell
	'.rdp-day': {
		borderRadius: tokens.borderRadius,
		boxSizing: 'border-box',
		color: boxPalette.foregroundAction,
		cursor: 'pointer',
		height: cellSizeSmall,
		textAlign: 'center',
		verticalAlign: 'middle',
		width: cellSizeSmall,
		'&[disabled]': {
			color: boxPalette.foregroundText,
			opacity: 0.3,
			cursor: 'not-allowed',
		},
		'&:not([disabled]):hover': {
			backgroundColor: boxPalette.backgroundShade,
			color: boxPalette.foregroundText,
			textDecoration: 'underline',
		},
		'@media(min-width: 375px)': { height: cellSizeLarge, width: cellSizeLarge },
		...focusStyles,
		// Today's button
		'&.rdp-day_today': {
			position: 'relative',
			fontWeight: tokens.fontWeight.bold,
			'&::after': {
				backgroundColor: 'currentColor',
				borderRadius: '0.25rem',
				bottom: '0.3rem',
				content: '""',
				left: '50%',
				height: '0.5rem',
				marginLeft: '-0.25rem',
				position: 'absolute',
				width: '0.5rem',
			},
		},
	},
	'.rdp-day_outside': {
		cursor: 'default',
	},
	// Table
	'.rdp-months': {
		display: 'flex',
		height: '21.5rem',
		'@media(min-width: 375px)': { height: '23.5rem' },
	},
	'.rdp-month': {
		margin: `0 ${mapSpacing(1)}`,
		'&:first-of-type': { marginLeft: 0 },
		'&:last-of-type': { marginRight: 0 },
	},
	'.rdp-table': {
		margin: 0,
		maxWidth: `calc(${cellSizeLarge} * 7)`,
		borderCollapse: 'collapse',
		tableLayout: 'fixed',
	},
	'.rdp-tbody': {
		border: 0,
	},
	'.rdp-day_selected:not([disabled]), .rdp-day_selected:focus:not([disabled]), .rdp-day_selected:active:not([disabled]), .rdp-day_selected:hover:not([disabled]), .rdp-day_selected:hover:not([disabled])':
		{
			'&:not(:focus)': highContrastOutlineStyles,
			backgroundColor: boxPalette.selected,
			color: boxPalette.backgroundBody,
			fontWeight: tokens.fontWeight.bold,
		},
} as const;

export const reactDayRangePickerStyles = (dateRange?: {
	from?: Date;
	to?: Date;
}) => {
	const { from, to } = dateRange ?? {};
	const startStyles = {
		borderRadius: 0,
		borderBottomLeftRadius: '50%',
		borderTopLeftRadius: '50%',
	};
	const endStyles = {
		borderRadius: 0,
		borderBottomRightRadius: '50%',
		borderTopRightRadius: '50%',
	};

	return {
		// Middle of the date range
		'.rdp-day_selected:not([disabled]).rdp-day_range_middle': {
			backgroundColor: boxPalette.selectedMuted,
			color: boxPalette.foregroundText,
			borderRadius: 0,
		},
		// Start day of date range
		'.rdp-day_range_start:not(.rdp-day_range_end)': startStyles,
		// End day of date range
		'.rdp-day_range_end:not(.rdp-day_range_start)': endStyles,
		// Start and end days of date range
		'.rdp-day_range_start.rdp-day_range_end': {
			...(from && startStyles),
			...(to && endStyles),
		},
	};
};
