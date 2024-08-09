import { boxPalette } from '../core';
import {
	AlertIcon,
	ProgressBlockedIcon,
	ProgressDoingIcon,
	ProgressTodoIcon,
	SuccessFilledIcon,
	SuccessIcon,
} from '../icon';

// Colours

export const hoverColorMap = {
	body: boxPalette.backgroundShade,
	bodyAlt: boxPalette.backgroundShadeAlt,
};

export type ProgressIndicatorBackground = keyof typeof hoverColorMap;

// Selectors

export const progressIndicatorItemTimelineDataAttr =
	'data-agds-progress-indicator-item-timeline-action';
export const progressIndicatorItemRingDataAttr =
	'data-agds-progress-indicator-item-ring';
export const progressIndicatorItemTextContainerDataAttr =
	'data-agds-progress-indicator-item-text-container';
export const progressIndicatorItemTextDataAttr =
	'data-agds-progress-indicator-item-text';

// Status

export const activeProgressStatusAllowedList: Array<ProgressIndicatorItemStatus> =
	['blocked', 'doing', 'started'];

export const activeProgressStatusBlockedList: Array<ProgressIndicatorItemStatus> =
	['done', 'error', 'saved', 'todo'];
export const allProgressStatuses: Array<ProgressIndicatorItemStatus> = [
	...activeProgressStatusAllowedList,
	...activeProgressStatusBlockedList,
];

export const statusMap = {
	blocked: {
		label: 'Cannot start yet',
		icon: ProgressBlockedIcon,
		iconColor: 'border',
	},
	doing: {
		label: 'In progress',
		icon: ProgressDoingIcon,
		iconColor: 'border',
	},
	started: {
		label: 'In progress',
		icon: ProgressDoingIcon,
		iconColor: 'border',
	},
	todo: {
		label: 'Not started',
		icon: ProgressTodoIcon,
		iconColor: 'border',
	},
	done: {
		label: 'Completed',
		icon: SuccessFilledIcon,
		iconColor: 'success',
	},
	saved: {
		label: 'Saved',
		icon: SuccessIcon,
		iconColor: 'success',
	},
	error: {
		label: 'Error',
		icon: AlertIcon,
		iconColor: 'error',
	},
} as const;

export type ProgressIndicatorItemStatus = keyof typeof statusMap;
