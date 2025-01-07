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
		'@media(min-width: 375px)': { height: cellSizeLarge, width: cellSizeLarge },
		...focusStyles,
		// Today's button
		'&.rdp-day_today': {
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
		width: `calc(${cellSizeSmall} * 7)`,
		borderCollapse: 'collapse',
		tableLayout: 'fixed',
		'@media(min-width: 375px)': { width: `calc(${cellSizeLarge} * 7)` },
	},
	'.rdp-tbody': {
		border: 0,
	},
	'.rdp-day_selected:not([disabled]), .rdp-day_selected:focus:not([disabled]), .rdp-day_selected:active:not([disabled]), .rdp-day_selected:hover:not([disabled]), .rdp-day_selected:hover:not([disabled])':
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

// Start date only picked
// rdp-day rdp-day_selected rdp-day_range_end rdp-day_range_start
// rdp-day rdp-day_selected rdp-day_range_start

// Middle date
// rdp-day rdp-day_selected rdp-day_range_middle

// End date picked
// rdp-day rdp-day_selected rdp-day_range_end

// Start date is end date
// rdp-day rdp-day_selected rdp-day_range_end rdp-day_range_start

// type ReactDayRangePickerStyles = {
// ?: {
// 	from?: Date;
// 	to?: Date;
// }

// }
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

	// console.log(`from`, from);
	// console.log(`to`, to);

	return {
		// Middle of the date range
		'.rdp-day_selected:not([disabled]).rdp-day_range_middle': {
			backgroundColor: boxPalette.selectedMuted,
			color: boxPalette.foregroundText,
			borderRadius: 0,
		},

		'.range:not([disabled]):not(.rdp-day_range_start):not(.rdp-day_range_end)':
			{
				backgroundColor: boxPalette.selectedMuted,
				borderRadius: 0,
				color: boxPalette.foregroundText,
				fontWeight: 'bold',
			},
		// Start day of date range
		'.rdp-day_range_start:not(.rdp-day_range_end)': startStyles,
		'.rdp-day_range_start:not(.rdp-day_range_end)::before': startStyles,
		// End day of date range
		'.rdp-day_range_end:not(.rdp-day_range_start)': endStyles,
		'.rdp-day_range_end:not(.rdp-day_range_start)::before': endStyles,
		// Start and end days of date range
		'.rdp-day_range_start.rdp-day_range_end': {
			...(from && startStyles),
			...(to && endStyles),
		},

		...(inputMode && {
			'.rdp-day': {
				...(inputMode === 'from' && startStyles),
				...(inputMode === 'to' && endStyles),
				'&:hover:not([disabled])::before': {
					...(inputMode === 'from' && startStyles),
					...(inputMode === 'to' && endStyles),
					...highContrastOutlineStyles,
					backgroundColor: boxPalette.backgroundShade,
					borderColor: boxPalette.selected,
					borderStyle: 'solid',
					borderWidth: tokens.borderWidth.lg,
					content: '""',
					inset: 0,
					pointerEvents: 'none',
					position: 'absolute',
					zIndex: -1,
				},
				'&:hover:not([disabled])': {
					color: boxPalette.foregroundText,
				},
			},
			'.rdp-day_range_start, .rdp-day_range_end': {
				'&:hover:not([disabled])::before': {
					borderRadius: '50%',
				},
			},
			'.rdp-day_range_start.rdp-day_range_end:hover': {
				backgroundColor: boxPalette.backgroundBody,
			},
		}),
	};
};
