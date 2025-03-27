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
		border: false,
		borderColor: 'error',
		Icon: AlertFilledIcon,
		iconColor: 'error',
		iconLabel: 'error',
	},
	errorLow: {
		background: 'body',
		border: true,
		borderColor: 'border',
		Icon: AlertCircleIcon,
		iconColor: 'muted',
		iconLabel: 'error',
	},
	errorMedium: {
		background: 'body',
		border: true,
		borderColor: 'error',
		Icon: AlertIcon,
		iconColor: 'error',
		iconLabel: 'error',
	},
	infoHigh: {
		background: 'info',
		border: false,
		borderColor: 'info',
		Icon: InfoFilledIcon,
		iconColor: 'info',
		iconLabel: 'information',
	},
	infoLow: {
		background: 'body',
		border: true,
		borderColor: 'border',
		Icon: InfoIcon,
		iconColor: 'muted',
		iconLabel: 'information',
	},
	infoMedium: {
		background: 'body',
		border: true,
		borderColor: 'info',
		Icon: InfoIcon,
		iconColor: 'info',
		iconLabel: 'information',
	},
	successHigh: {
		background: 'success',
		border: false,
		borderColor: 'success',
		Icon: SuccessFilledIcon,
		iconColor: 'success',
		iconLabel: 'success',
	},
	successLow: {
		background: 'body',
		border: true,
		borderColor: 'border',
		Icon: SuccessIcon,
		iconColor: 'muted',
		iconLabel: 'success',
	},
	successMedium: {
		background: 'body',
		border: true,
		borderColor: 'success',
		Icon: SuccessIcon,
		iconColor: 'success',
		iconLabel: 'success',
	},
	warningHigh: {
		background: 'warning',
		border: false,
		borderColor: 'warning',
		Icon: WarningFilledIcon,
		iconColor: 'warning',
		iconLabel: 'warning',
	},
	warningLow: {
		background: 'body',
		border: true,
		borderColor: 'border',
		Icon: WarningCircleIcon,
		iconColor: 'muted',
		iconLabel: 'warning',
	},
	warningMedium: {
		background: 'body',
		border: true,
		borderColor: 'warning',
		Icon: WarningIcon,
		iconColor: 'warning',
		iconLabel: 'warning',
	},
} as const;

export type SectionAlertVariantTone = keyof typeof sectionAlertToneMap;

export const sectionAlertLegacyTonesMap = {
	error: 'errorHigh',
	success: 'successHigh',
	warning: 'warningHigh',
} as const;

type SectionAlertLegacyTone = keyof typeof sectionAlertLegacyTonesMap;

export type SectionAlertTone = SectionAlertVariantTone | SectionAlertLegacyTone;

// Legacy tones will default to its high variant
export function getUpdatedLegacyTone(
	tone: SectionAlertTone
): SectionAlertVariantTone {
	if (tone in sectionAlertLegacyTonesMap) {
		return sectionAlertLegacyTonesMap[tone as SectionAlertLegacyTone];
	}

	return tone as SectionAlertVariantTone;
}
