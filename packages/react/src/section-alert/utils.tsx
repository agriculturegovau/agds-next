import {
	AlertFilledIcon,
	SuccessFilledIcon,
	WarningFilledIcon,
} from '@ag.ds-next/react/icon';

type SectionAlertIconProps = { id: string };

export const sectionAlertIconMap = {
	error: ({ id }: SectionAlertIconProps) => (
		<AlertFilledIcon
			aria-hidden="false"
			aria-label="Error, "
			color="error"
			id={id}
		/>
	),
	success: ({ id }: SectionAlertIconProps) => (
		<SuccessFilledIcon
			aria-hidden="false"
			aria-label="Success, "
			color="success"
			id={id}
		/>
	),
	warning: ({ id }: SectionAlertIconProps) => (
		<WarningFilledIcon
			aria-hidden="false"
			aria-label="Warning, "
			color="warning"
			id={id}
		/>
	),
};

export type SectionAlertTone = keyof typeof sectionAlertIconMap;
