import { boxPalette, fontGrid, mapSpacing, tokens } from '../core';
import { visuallyHiddenStyles } from '../a11y';
import { focusStyles, highContrastOutlineStyles } from '../box';

const cellSizeLarge = '3rem';
const cellSizeSmall = '2.75rem';

const buttonReset = {
	appearance: 'none',
	background: 'none',
	border: 'none',
	margin: 0,
	padding: 0,
	cursor: 'pointer',
	color: 'inherit',
	font: 'inherit',
};
const buttonNextPrevious = {
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
};

export const reactDayPickerStyles = {
	// Visually hidden
	'.rdp-vhidden': visuallyHiddenStyles, //REMOVED
	// Header
	'.rdp-month_caption': {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: mapSpacing(0.5),
	},
	'.rdp-month_caption_label': {
		zIndex: tokens.zIndex.elevated,
		whiteSpace: 'nowrap',
		margin: 0,
		color: boxPalette.foregroundText,
		fontWeight: tokens.fontWeight.bold,
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
		padding: 0,
		position: 'relative',
		textAlign: 'center',
		verticalAlign: 'middle',
		width: cellSizeSmall,
		'&[disabled]': {
			color: boxPalette.foregroundText,
			opacity: 0.3,
			cursor: 'not-allowed',
		},
		'&:not([disabled], :focus):hover': {
			backgroundColor: boxPalette.backgroundShade,
			color: boxPalette.foregroundText,
			fontWeight: 'bold',
			textDecoration: 'underline',
			zIndex: tokens.zIndex.elevated,
			...highContrastOutlineStyles,
			'&::before': {
				backgroundColor: boxPalette.backgroundShade,
				borderColor: boxPalette.selected,
				borderRadius: '0.25rem',
				borderStyle: 'solid',
				borderWidth: tokens.borderWidth.lg,
				content: '""',
				inset: 0,
				pointerEvents: 'none',
				position: 'absolute',
				zIndex: -1,
			},
		},
		'&:focus': {
			zIndex: tokens.zIndex.elevated,
		},
		'& span': {
			alignItems: 'center',
			display: 'flex',
			height: cellSizeSmall,
			justifyContent: 'center',
			position: 'relative',
			width: cellSizeSmall,
			'@media (min-width: 375px)': {
				height: cellSizeLarge,
				width: cellSizeLarge,
			},
			'::before': {
				content: '""',
				inset: 0,
				position: 'absolute',
			},
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
				left: '50%',
				height: '0.5rem',
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
		margin: 0,
		width: `calc(${cellSizeSmall} * 7)`,
		borderCollapse: 'collapse',
		tableLayout: 'fixed',
		'@media (min-width: 375px)': { width: `calc(${cellSizeLarge} * 7)` },
	},
	'.rdp-weeks': {
		border: 0,
	},
	'.rdp-selected:not([disabled]), .rdp-selected:focus:not([disabled]), .rdp-selected:active:not([disabled]), .rdp-selected:hover:not([disabled]), .rdp-selected:hover:not([disabled])':
		{
			backgroundColor: boxPalette.selected,
			color: boxPalette.backgroundBody,
			fontWeight: tokens.fontWeight.bold,
			'&:hover': {
				color: boxPalette.foregroundAction,
			},
			'&::before': {
				content: '""',
				inset: 0,
				pointerEvents: 'none',
				position: 'absolute',
				...highContrastOutlineStyles,
			},
		},
} as const;

// Start date only picked
// rdp-day rdp-day_selected rdp-day_range_end rdp-day_range_start
// rdp-day rdp-day_selected rdp-day_range_start

// Middle date
// rdp-day rdp-day_selected rdp-day_range_middle

// End date picked
// rdp-day rdp-day_selected rdp-day_range_end

// Start date is end date
// rdp-day rdp-day_selected rdp-day_range_end rdp-day_range_start

export const reactDayRangePickerStyles = (
	dateRange?: {
		from?: Date;
		to?: Date;
	},
	inputMode?: 'from' | 'to'
) => {
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
		'.rdp-selected:not([disabled]).rdp-range_middle': {
			backgroundColor: boxPalette.selectedMuted,
			color: boxPalette.foregroundText,
			borderRadius: 0,
		},

		'.hover-range:not([disabled]):not(.rdp-range_start):not(.rdp-range_end)': {
			backgroundColor: boxPalette.selectedMuted,
			borderRadius: 0,
			color: boxPalette.foregroundText,
			fontWeight: 'bold',
		},
		// Start day of date range
		'.rdp-range_start:not(.rdp-range_end)': startStyles,
		'.rdp-range_start:not(.rdp-range_end)::before': startStyles,
		// End day of date range
		'.rdp-range_end:not(.rdp-range_start)': endStyles,
		'.rdp-range_end:not(.rdp-range_start)::before': endStyles,
		// Start and end days of date range
		'.rdp-range_start.rdp-range_end': {
			...(from && startStyles),
			...(to && endStyles),
		},

		...(inputMode && {
			'.rdp-day': {
				...(inputMode === 'from' && startStyles),
				...(inputMode === 'to' && endStyles),
				'&::before': {
					borderColor: 'transparent',
					borderStyle: 'solid',
					borderWidth: tokens.borderWidth.lg,
					content: '""',
					inset: 0,
					pointerEvents: 'none',
					position: 'absolute',
					zIndex: -1,
				} as const,
				'&:hover:not([disabled])::before': {
					...(inputMode === 'from' && startStyles),
					...(inputMode === 'to' && endStyles),
					...highContrastOutlineStyles,
					backgroundColor: boxPalette.backgroundShade,
					borderColor: boxPalette.selected,
				},
				'&:hover:not([disabled])': {
					color: boxPalette.foregroundText,
					textDecoration: 'underline',
				},
			},
			'.rdp-range_start:hover:not([disabled])::before': {
				borderRadius: inputMode === 'to' ? '50%' : undefined,
			},
			'.rdp-range_end:hover:not([disabled])::before': {
				borderRadius: inputMode === 'from' ? '50%' : undefined,
			},
			'.rdp-range_start.rdp-range_end:hover': {
				backgroundColor: boxPalette.backgroundBody,
			},
		}),
	};
};
