import {
	forwardRef,
	HTMLAttributes,
	MouseEventHandler,
	PropsWithChildren,
} from 'react';
import { Box, Flex } from '@ag.ds-next/react/box';
import { Text } from '@ag.ds-next/react/text';
import { boxPalette, tokens } from '@ag.ds-next/react/core';
import { Button } from '@ag.ds-next/react/button';
import {
	AlertFilledIcon,
	CloseIcon,
	InfoFilledIcon,
	SuccessFilledIcon,
	WarningFilledIcon,
} from '@ag.ds-next/react/icon';

type SectionAlertTone = keyof typeof sectionAlertToneMap;

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

const SectionAlertDismissButton = forwardRef<
	HTMLButtonElement,
	{ onDismiss: MouseEventHandler<HTMLButtonElement> }
>(function SectionAlertDismissButton({ onDismiss, ...props }, ref) {
	return (
		<Button
			onClick={onDismiss}
			iconAfter={CloseIcon}
			variant="text"
			aria-label="Dismiss"
			ref={ref}
			{...props}
		>
			<Text display={{ xs: 'none', sm: 'block' }} color="action">
				Dismiss
			</Text>
		</Button>
	);
});

export const SectionAlert = forwardRef<HTMLDivElement, SectionAlertProps>(
	function SectionAlert(
		{ id, role, tabIndex, tone, title, children, onDismiss, ...props },
		ref
	) {
		const { fg, bg, icon } = sectionAlertToneMap[tone];
		return (
			<Flex
				ref={ref}
				role={role}
				id={id}
				tabIndex={tabIndex}
				rounded
				focus
				highContrastOutline
				css={{ backgroundColor: bg }}
				gap={0.5}
				paddingRight={1}
				alignItems="center"
				justifyContent="space-between"
				{...props}
			>
				<Flex gap={0.5} alignItems="center">
					<Flex
						css={{
							borderTopLeftRadius: tokens.borderRadius,
							borderBottomLeftRadius: tokens.borderRadius,
							backgroundColor: fg,
							width: 4,
							height: '100%',
						}}
					/>

					<Flex
						css={{
							color: fg,
						}}
					>
						{icon}
					</Flex>

					<Flex paddingY={1} gap={0.25} alignItems="center">
						{title && <Text fontWeight="bold">{title}</Text>}
						{children}
					</Flex>
				</Flex>
				{onDismiss ? <SectionAlertDismissButton onDismiss={onDismiss} /> : null}
			</Flex>
		);
	}
);

const sectionAlertToneMap = {
	success: {
		fg: boxPalette.systemSuccess,
		bg: boxPalette.systemSuccessMuted,
		icon: <SuccessFilledIcon aria-hidden="false" aria-label="Success" />,
	},
	error: {
		fg: boxPalette.systemError,
		bg: boxPalette.systemErrorMuted,
		icon: <AlertFilledIcon aria-hidden="false" aria-label="Error" />,
	},
	info: {
		fg: boxPalette.systemInfo,
		bg: boxPalette.systemInfoMuted,
		icon: <InfoFilledIcon aria-hidden="false" aria-label="Information" />,
	},
	warning: {
		fg: boxPalette.systemWarning,
		bg: boxPalette.systemWarningMuted,
		icon: <WarningFilledIcon aria-hidden="false" aria-label="Warning" />,
	},
};
