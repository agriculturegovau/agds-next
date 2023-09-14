import {
	forwardRef,
	HTMLAttributes,
	MouseEventHandler,
	PropsWithChildren,
} from 'react';
import { Flex } from '@ag.ds-next/react/flex';
import { Text } from '@ag.ds-next/react/text';
import {
	AlertFilledIcon,
	InfoFilledIcon,
	SuccessFilledIcon,
	WarningFilledIcon,
} from '@ag.ds-next/react/icon';
import { SectionAlertDismissButton } from './SectionAlertDismissButton';

type SectionAlertTone = keyof typeof sectionAlertIconMap;

type DivProps = HTMLAttributes<HTMLDivElement>;

export type SectionAlertProps = PropsWithChildren<{
	id?: string;
	role?: DivProps['role'];
	tabIndex?: number;
	tone: SectionAlertTone;
	/** Function to be called when the 'Close' button is pressed. */
	onDismiss?: MouseEventHandler<HTMLButtonElement>;
	/** The title of the alert. */
	title?: string;
}>;

export const SectionAlert = forwardRef<HTMLDivElement, SectionAlertProps>(
	function SectionAlert(
		{ id, role, tabIndex, tone, title, children, onDismiss, ...props },
		ref
	) {
		const Icon = sectionAlertIconMap[tone];
		return (
			<Flex
				ref={ref}
				role={role}
				id={id}
				tabIndex={tabIndex}
				rounded
				focus
				background={tone}
				borderColor={tone}
				borderLeft
				borderLeftWidth="xl"
				highContrastOutline
				gap={0.5}
				padding={1}
				alignItems="center"
				justifyContent="space-between"
				{...props}
			>
				<Flex gap={0.5} alignItems="center">
					{Icon}
					<Flex gap={0.25} alignItems="center">
						{title && <Text fontWeight="bold">{title}</Text>}
						{children}
					</Flex>
				</Flex>
				{onDismiss ? <SectionAlertDismissButton onClick={onDismiss} /> : null}
			</Flex>
		);
	}
);

const sectionAlertIconMap = {
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
	info: (
		<InfoFilledIcon color="info" aria-hidden="false" aria-label="Information" />
	),
	warning: (
		<WarningFilledIcon
			color="warning"
			aria-hidden="false"
			aria-label="Warning"
		/>
	),
};
