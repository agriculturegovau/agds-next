import {
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
	},
	errorLow: {
		background: 'body',
		border: true,
		borderColor: 'muted',
		Icon: AlertIcon,
		iconColor: 'muted',
	},
	errorMedium: {
		background: 'body',
		border: true,
		borderColor: 'error',
		Icon: AlertIcon,
		iconColor: 'error',
	},
	infoHigh: {
		background: 'info',
		border: false,
		borderColor: 'info',
		Icon: InfoFilledIcon,
		iconColor: 'info',
	},
	infoLow: {
		background: 'body',
		border: true,
		borderColor: 'muted',
		Icon: InfoIcon,
		iconColor: 'muted',
	},
	infoMedium: {
		background: 'body',
		border: true,
		borderColor: 'info',
		Icon: InfoIcon,
		iconColor: 'info',
	},
	successHigh: {
		background: 'success',
		border: false,
		borderColor: 'success',
		Icon: SuccessFilledIcon,
		iconColor: 'success',
	},
	successLow: {
		background: 'body',
		border: true,
		borderColor: 'muted',
		Icon: SuccessIcon,
		iconColor: 'muted',
	},
	successMedium: {
		background: 'body',
		border: true,
		borderColor: 'success',
		Icon: SuccessIcon,
		iconColor: 'success',
	},
	warningHigh: {
		background: 'warning',
		border: false,
		borderColor: 'warning',
		Icon: WarningFilledIcon,
		iconColor: 'warning',
	},
	warningLow: {
		background: 'body',
		border: true,
		borderColor: 'muted',
		Icon: WarningCircleIcon,
		iconColor: 'muted',
	},
	warningMedium: {
		background: 'body',
		border: true,
		borderColor: 'warning',
		Icon: WarningIcon,
		iconColor: 'warning',
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

// Legacy tones will default to high variants
export function getUpdatedLegacyTone(
	tone: SectionAlertTone
): SectionAlertVariantTone {
	if (tone in sectionAlertLegacyTonesMap) {
		return sectionAlertLegacyTonesMap[tone as SectionAlertLegacyTone];
	}

	return tone as SectionAlertVariantTone;
}
