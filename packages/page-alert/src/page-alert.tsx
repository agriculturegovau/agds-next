import { PropsWithChildren } from 'react';
import { Box, Flex } from '@ag.ds-next/box';
import { Body } from '@ag.ds-next/body';
import { globalPalette } from '@ag.ds-next/core';

import {
	SuccessIcon,
	ErrorIcon,
	InfoIcon,
	WarningIcon,
} from './page-alert-icon';

export type PageAlertTone = 'success' | 'error' | 'warning' | 'info';

export type PageAlertProps = PropsWithChildren<{
	tone: PageAlertTone;
}>;

export const PageAlert = ({ children, tone }: PageAlertProps) => {
	const toneColor = globalPalette[tone];
	const Icon = icons[tone];

	return (
		<Box
			rounded
			border
			borderWidth="lg"
			css={{
				borderColor: toneColor,
			}}
		>
			<Flex
				padding={0.75}
				alignItems="center"
				css={{
					backgroundColor: toneColor,
				}}
			>
				<Icon size="md" color="body" />
			</Flex>
			<Box padding={1}>
				<Body>{children}</Body>
			</Box>
		</Box>
	);
};

const icons = {
	success: SuccessIcon,
	error: ErrorIcon,
	info: InfoIcon,
	warning: WarningIcon,
};
