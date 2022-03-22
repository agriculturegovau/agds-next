import { PropsWithChildren } from 'react';
import { Box, Flex } from '@ag.ds-next/box';
import { Body } from '@ag.ds-next/body';
import { globalPalette } from '@ag.ds-next/core';
import {
	AlertFilledIcon,
	InfoFilledIcon,
	SuccessFilledIcon,
	WarningFilledIcon,
} from '@ag.ds-next/icon';

export type PageAlertTone = 'success' | 'error' | 'warning' | 'info';

export type PageAlertProps = PropsWithChildren<{
	tone: PageAlertTone;
}>;

export const PageAlert = ({ children, tone }: PageAlertProps) => {
	const { fg, bg } = pageAlertToneMap[tone];
	const Icon = icons[tone];

	return (
		<Flex
			rounded
			css={{
				backgroundColor: bg,
			}}
		>
			<Flex
				padding={0.75}
				alignItems="center"
				palette="dark"
				css={{
					borderTopLeftRadius: 4,
					borderBottomLeftRadius: 4,
					backgroundColor: fg,
				}}
			>
				<Icon color="text" />
			</Flex>
			<Box padding={1} palette="light">
				<Body>{children}</Body>
			</Box>
		</Flex>
	);
};

const icons = {
	success: SuccessFilledIcon,
	error: AlertFilledIcon,
	info: InfoFilledIcon,
	warning: WarningFilledIcon,
};

const pageAlertToneMap = {
	success: { fg: globalPalette.success, bg: globalPalette.successMuted },
	error: { fg: globalPalette.error, bg: globalPalette.errorMuted },
	info: { fg: globalPalette.info, bg: globalPalette.infoMuted },
	warning: { fg: globalPalette.warning, bg: globalPalette.warningMuted },
};
