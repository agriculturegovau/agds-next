import {
	AlertFilledIcon,
	SuccessFilledIcon,
	WarningFilledIcon,
} from '@ag.ds-next/react/icon';

export const sectionAlertIconMap = {
	success: (
		<SuccessFilledIcon
			color="success"
			aria-hidden="false"
			aria-label="Success"
		/>
	),
	error: (
		<AlertFilledIcon color="error" aria-hidden="false" aria-label="Error" />
	),
	warning: (
		<WarningFilledIcon
			color="warning"
			aria-hidden="false"
			aria-label="Warning"
		/>
	),
};

export type SectionAlertTone = keyof typeof sectionAlertIconMap;
