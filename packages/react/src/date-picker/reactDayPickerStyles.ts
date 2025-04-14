import { focusStyles, highContrastOutlineStyles } from '../box';
import { boxPalette, fontGrid, mapSpacing, tokens } from '../core';

const cellSizeLarge = '3rem';
const cellSizeSmall = '2.75rem';

// Base button
const buttonReset = {
	appearance: 'none',
	background: 'none',
	border: 'none',
	color: 'inherit',
	cursor: 'pointer',
	font: 'inherit',
	margin: 0,
	padding: 0,
} as const;

// Left / right chevrons
const buttonNextPrevious = {
	alignItems: 'center',
	borderRadius: tokens.borderRadius,
	color: boxPalette.foregroundAction,
	display: 'flex',
	height: '2rem',
	justifyContent: 'center',
	position: 'absolute',
	top: 0,
	width: '2rem',
	'&:hover': { color: boxPalette.foregroundText },
	...focusStyles,
} as const;

export const reactDayPickerStyles = {
	// Header
	'.rdp-month_caption': {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center',
		marginBottom: mapSpacing(0.5),
		position: 'relative',
	},
	'.rdp-month_caption_label': {
		color: boxPalette.foregroundText,
		fontWeight: tokens.fontWeight.bold,
		margin: 0,
		whiteSpace: 'nowrap',
		zIndex: tokens.zIndex.elevated,
		...fontGrid('lg', 'nospace'),
	},
	// Left / right arrows
	'.rdp-button_previous': {
		...buttonReset,
		...buttonNextPrevious,
		left: 0,
	},
	'.rdp-button_next': {
		...buttonReset,
		...buttonNextPrevious,
		right: 0,
	},
	// Days of week
	'.rdp-weekday': {
		color: boxPalette.foregroundMuted,
		fontWeight: tokens.fontWeight.normal,
		height: cellSizeSmall,
		margin: 0,
		padding: 0,
		width: cellSizeSmall,
		'@media (min-width: 375px)': {
			height: cellSizeLarge,
			width: cellSizeLarge,
		},
		...fontGrid('sm', 'default'),
	},
	// Day button which is actually applied to the cell
	'.rdp-day': {
		borderRadius: tokens.borderRadius,
		boxSizing: 'border-box',
		color: boxPalette.foregroundAction,
		cursor: 'pointer',
		height: cellSizeSmall,
		position: 'relative',
		textAlign: 'center',
		verticalAlign: 'middle',
		width: cellSizeSmall,
		'&[disabled]': {
			color: boxPalette.foregroundText,
			cursor: 'not-allowed',
			opacity: 0.3,
		},
		'&:not([disabled], :focus):hover': {
			backgroundColor: boxPalette.backgroundShade,
			color: boxPalette.foregroundText,
			textDecoration: 'underline',
			zIndex: tokens.zIndex.elevated,
			...highContrastOutlineStyles,
		},
		'&:focus': {
			zIndex: tokens.zIndex.elevated,
		},
		'@media (min-width: 375px)': {
			height: cellSizeLarge,
			width: cellSizeLarge,
		},
		...focusStyles,
		// Today's button
		'&.rdp-today': {
			fontWeight: tokens.fontWeight.bold,
			'&::after': {
				backgroundColor: 'currentColor',
				borderRadius: '0.25rem',
				bottom: '0.3rem',
				content: '""',
				height: '0.5rem',
				left: '50%',
				marginLeft: '-0.25rem',
				position: 'absolute',
				width: '0.5rem',
				...highContrastOutlineStyles,
			},
		},
	},
	'.rdp-outside': {
		cursor: 'default',
	},
	// Table
	'.rdp-months': {
		display: 'flex',
		height: '21.5rem',
		'@media (min-width: 375px)': { height: '23.5rem' },
	},
	'.rdp-month': {
		margin: `0 ${mapSpacing(1)}`,
		'&:first-of-type': { marginLeft: 0 },
		'&:last-of-type': { marginRight: 0 },
	},
	'.rdp-month_grid': {
		borderCollapse: 'collapse',
		margin: 0,
		tableLayout: 'fixed',
		width: `calc(${cellSizeSmall} * 7)`,
		'@media (min-width: 375px)': { width: `calc(${cellSizeLarge} * 7)` },
	},
	'.rdp-weeks': {
		border: 0,
	},
	'.rdp-selected:not([disabled]), .rdp-selected:focus:not([disabled]), .rdp-selected:active:not([disabled]), .rdp-day_selected:hover:not([disabled]), .rdp-day_selected:hover:not([disabled])':
		{
			backgroundColor: boxPalette.selected,
			color: boxPalette.backgroundBody,
			fontWeight: tokens.fontWeight.bold,
			'&::before': {
				content: '""',
				inset: 0,
				pointerEvents: 'none',
				position: 'absolute',
				...highContrastOutlineStyles,
			},
		},
} as const;

export const reactDayRangePickerStyles = (dateRange?: {
	from?: Date;
	to?: Date;
}) => {
	const { from, to } = dateRange ?? {};
	const startStyles = {
		borderBottomLeftRadius: '50%',
		borderRadius: 0,
		borderTopLeftRadius: '50%',
	};
	const endStyles = {
		borderBottomRightRadius: '50%',
		borderRadius: 0,
		borderTopRightRadius: '50%',
	};

	return {
		// Middle of the date range
		//'.rdp-day_selected:not([disabled]).rdp-day_range_middle': {
		'.rdp-selected:not([disabled]).rdp-range_middle': {
			backgroundColor: boxPalette.selectedMuted,
			borderRadius: 0,
			color: boxPalette.foregroundText,
		},
		// Start day of date range
		////'.rdp-day_range_start:not(.rdp-day_range_end)': startStyles,
		'.rdp-range_start:not(.rdp-range_end)': startStyles,
		////'.rdp-day_range_start:not(.rdp-day_range_end)::before': startStyles,
		'.rdp-range_start:not(.rdp-range_end)::before': startStyles,
		// End day of date range
		//'.rdp-day_range_end:not(.rdp-day_range_start)': endStyles,
		'.rdp-range_end:not(.rdp-range_start)': endStyles,
		//'.rdp-day_range_end:not(.rdp-day_range_start)::before': endStyles,
		'.rdp-range_end:not(.rdp-range_start)::before': endStyles,
		// Start and end days of date range
		//'.rdp-day_range_start.rdp-day_range_end': {
		'.rdp-range_start.rdp-range_end': {
			...(from && startStyles),
			...(to && endStyles),
		},
	};
};
