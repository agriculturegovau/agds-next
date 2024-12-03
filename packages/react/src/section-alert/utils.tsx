import {
	AlertFilledIcon,
	SuccessFilledIcon,
	WarningFilledIcon,
} from '@ag.ds-next/react/icon';

export const sectionAlertIconMap = {
	error: <AlertFilledIcon color="error" />,
	success: <SuccessFilledIcon color="success" />,
	warning: <WarningFilledIcon color="warning" />,
};

export type SectionAlertTone = keyof typeof sectionAlertIconMap;
