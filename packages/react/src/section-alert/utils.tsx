import {
	AlertCircleIcon,
	AlertFilledIcon,
	AlertIcon,
	InfoFilledIcon,
	InfoIcon,
	SuccessFilledIcon,
	SuccessIcon,
	WarningCircleIcon,
	WarningFilledIcon,
	WarningIcon,
} from '@ag.ds-next/react/icon';

export const sectionAlertToneMap = {
	errorHigh: {
		background: 'error',
		borderColor: 'error',
		enclosedBorder: false,
		icon: AlertFilledIcon,
		iconColor: 'error',
		iconLabel: 'error',
	},
	errorLow: {
		background: 'body',
		borderColor: 'border',
		enclosedBorder: true,
		icon: AlertCircleIcon,
		iconColor: 'muted',
		iconLabel: 'error',
	},
	errorMedium: {
		background: 'body',
		borderColor: 'error',
		enclosedBorder: true,
		icon: AlertIcon,
		iconColor: 'error',
		iconLabel: 'error',
	},
	infoHigh: {
		background: 'info',
		borderColor: 'info',
		enclosedBorder: false,
		icon: InfoFilledIcon,
		iconColor: 'info',
		iconLabel: 'information',
	},
	infoLow: {
		background: 'body',
		borderColor: 'border',
		enclosedBorder: true,
		icon: InfoIcon,
		iconColor: 'muted',
		iconLabel: 'information',
	},
	infoMedium: {
		background: 'body',
		borderColor: 'info',
		enclosedBorder: true,
		icon: InfoIcon,
		iconColor: 'info',
		iconLabel: 'information',
	},
	successHigh: {
		background: 'success',
		borderColor: 'success',
		enclosedBorder: false,
		icon: SuccessFilledIcon,
		iconColor: 'success',
		iconLabel: 'success',
	},
	successLow: {
		background: 'body',
		borderColor: 'border',
		enclosedBorder: true,
		icon: SuccessIcon,
		iconColor: 'muted',
		iconLabel: 'success',
	},
	successMedium: {
		background: 'body',
		borderColor: 'success',
		enclosedBorder: true,
		icon: SuccessIcon,
		iconColor: 'success',
		iconLabel: 'success',
	},
	warningHigh: {
		background: 'warning',
		borderColor: 'warning',
		enclosedBorder: false,
		icon: WarningFilledIcon,
		iconColor: 'warning',
		iconLabel: 'warning',
	},
	warningLow: {
		background: 'body',
		borderColor: 'border',
		enclosedBorder: true,
		icon: WarningCircleIcon,
		iconColor: 'muted',
		iconLabel: 'warning',
	},
	warningMedium: {
		background: 'body',
		borderColor: 'warning',
		enclosedBorder: true,
		icon: WarningIcon,
		iconColor: 'warning',
		iconLabel: 'warning',
	},
} as const;

export type SectionAlertTones = keyof typeof sectionAlertToneMap;

export const sectionAlertLegacyToneMap = {
	error: 'errorHigh',
	success: 'successHigh',
	warning: 'warningHigh',
} as const;

type SectionAlertLegacyTone = keyof typeof sectionAlertLegacyToneMap;

export type SectionAlertTone = SectionAlertTones | SectionAlertLegacyTone;

// Legacy tones will default to its high variant
export function getTone(tone: SectionAlertTone): SectionAlertTones {
	if (tone in sectionAlertLegacyToneMap) {
		return sectionAlertLegacyToneMap[tone as SectionAlertLegacyTone];
	}

	return tone as SectionAlertTones;
}
