import { PropsWithChildren } from 'react';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { boxPalette } from '@ag.ds-next/core';
import { WarningIcon } from '@ag.ds-next/icon';
import { Content } from '@ag.ds-next/content';
import { GlobalAlertTitle } from './GlobalAlertTitle';

export type GlobalAlertProps = PropsWithChildren<{
	title?: string;
}>;

export function GlobalAlert({ children, title }: GlobalAlertProps) {
	return (
		<Box css={{ backgroundColor: boxPalette.systemWarningMuted }}>
			<Content>
				<Stack gap={0.5} paddingY={1}>
					<Flex alignItems="center">
						<Box width="2.5rem" css={{ color: boxPalette.systemWarning }}>
							<WarningIcon
								aria-hidden="false"
								aria-label="Warning"
								color="inherit"
							/>
						</Box>
						{title ? <GlobalAlertTitle>{title}</GlobalAlertTitle> : null}
					</Flex>
					<Box css={{ paddingLeft: '2.5rem' }}>{children}</Box>
				</Stack>
			</Content>
		</Box>
	);
}
