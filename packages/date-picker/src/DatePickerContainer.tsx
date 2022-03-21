import React, { ReactNode } from 'react';
import { css } from '@emotion/react';
import {
	boxPalette,
	globalPalette,
	mapSpacing,
	tokens,
} from '@ag.ds-next/core';

export type DatePickerContainerProps = {
	children: ReactNode;
};

export const DatePickerContainer = ({ children }: DatePickerContainerProps) => (
	<div
		css={css`
		& {
			.DayPicker {
				display: inline-block;
				font-size: ${tokens.fontSize.sm}rem;
				color: ${boxPalette.foregroundText};
			}

			.DayPicker-wrapper {
				position: relative;
				flex-direction: row;
				user-select: none;
				outline: 0;
			}

			.DayPicker-Months {
				display: flex;
				// flex-wrap: wrap;
				// justify-content: center;
				// align-items: flex-start;
			}

			.DayPicker-Month {
				display: 'table',
				border-spacing: 0 2px;
				border-collapse: separate
				margin: ${mapSpacing(0.25)},
				position: relative;
			}

			.DayPicker-NavButton:hover {
				opacity: 0.8;
			}

			.DayPicker-NavButton--next {
				background-image: url('data:image/svg;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==');
			}

			.DayPicker-NavButton--interactionDisabled {
				display: none;
			}

			.DayPicker-Caption {
				display: table-caption;
				margin-bottom: ${mapSpacing(1)};
				padding: 0 0.5em;
				text-align: left;
			}

			.DayPicker-Caption > div {
				font-size: ${tokens.fontSize.lg};
			}

			.DayPicker-Weekdays {
				display: table-header-group;
				margin-top: 1em;
			}

			.DayPicker-WeekdaysRow {
				display: table-row;
			}

			.DayPicker-Weekday {
				display: table-cell;
				padding: ${mapSpacing(0.5)};
				color: ${boxPalette.foregroundMuted};
				font-size: ${tokens.fontSize.xs}rem;
				text-align: center;
			}

			.DayPicker-Weekday abbr[title] {
				border-bottom: none;
				text-decoration: none;
			}

			.DayPicker-Body {
				display: table-row-group;
			}

			.DayPicker-Week {
				display: table-row;
			}

			.DayPicker-Day {
				display: table-cell;
				width: 2.5rem;
				height: 2.5rem;
				border-radius: 50%;
				vertical-align: middle;
				text-align: center;
				cursor: pointer;
				color: ${boxPalette.foregroundText};
				font-size: ${tokens.fontSize.xs}rem;
			}

			.DayPicker:not(.DayPicker--interactionDisabled)
			.DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside) {
				color: ${boxPalette.foregroundAction};
				&:hover {
					background-color: ${boxPalette.backgroundShade};
				}
			}

			.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
				color: ${globalPalette.darkForegroundText};
				background-color: ${boxPalette.foregroundAction};
			}

			.DayPicker-Day--rangeBetween.DayPicker-Day--selected:not(.DayPicker-Day--outside), 
			.DayPicker-Day--rangeBetween.DayPicker-Day--selected:not(.DayPicker-Day--outside):hover, 
			.DayPicker-Day--rangeBetween.DayPicker-Day--selected:not(.DayPicker-Day--outside) {
				background-color: red;
			}

			.DayPicker-WeekNumber {
				display: table-cell;
				padding: 0.5em;
				min-width: 1em;
				border-right: 1px solid #eaecec;
				color: #8b9898;
				vertical-align: middle;
				text-align: right;
				font-size: 0.75em;
				cursor: pointer;
			}

			.DayPicker--interactionDisabled .DayPicker-Day {
				cursor: default;
			}

			.DayPicker-Footer {
				padding-top: 0.5em;
			}

			.DayPicker-TodayButton {
				border: none;
				background-color: transparent;
				background-image: none;
				box-shadow: none;
				color: #4a90e2;
				font-size: 0.875em;
				cursor: pointer;
			}

			.DayPicker-Day--outside {
			}

			.DayPicker-Day--disabled {
				opacity: 0.3;
				cursor: not-allowed;
			}

			.DayPickerInput-OverlayWrapper {
				position: relative;
			}

			.DayPickerInput-Overlay {
				position: absolute;
				top: 0.5rem;
				left: 0;
				z-index: 1;
				padding: ${mapSpacing(1)};
				border-width: ${tokens.borderWidth.sm}px;
				border-style: solid;
				border-color: ${boxPalette.border};
				background: ${boxPalette.backgroundBody};
				border-radius: ${tokens.borderRadius}px;
			}
		}
	`}
	>
		{children}
	</div>
);
