import { MouseEventHandler, PropsWithChildren } from 'react';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Button } from '@ag.ds-next/button';
import { boxPalette, mq } from '@ag.ds-next/core';
import { CloseIcon, WarningIcon } from '@ag.ds-next/icon';
import { Content } from '@ag.ds-next/content';
import { Heading } from '@ag.ds-next/heading';

export type GlobalAlertProps = PropsWithChildren<{
	onDismiss?: MouseEventHandler<HTMLButtonElement>;
	title?: string;
}>;

export function GlobalAlert({ children, onDismiss, title }: GlobalAlertProps) {
	return (
		<GlobalAlertContainer>
			{title ? (
				<Stack gap={0.5}>
					<Flex alignItems="center">
						<GlobalAlertIcon />
						<Heading as="h2" type="h3">
							{title}
						</Heading>
					</Flex>
					<GlobalAlertText title={true}>{children}</GlobalAlertText>
				</Stack>
			) : (
				<Flex>
					<GlobalAlertIcon />
					<GlobalAlertText title={false}>{children}</GlobalAlertText>
				</Flex>
			)}
			{onDismiss ? <GlobalAlertDismissButton onClick={onDismiss} /> : null}
		</GlobalAlertContainer>
	);
}

function GlobalAlertContainer({ children }: PropsWithChildren<{}>) {
	return (
		<Box as="section" css={{ backgroundColor: boxPalette.systemWarningMuted }}>
			<Content>
				<Flex
					flexDirection={['column', 'row']}
					alignItems="flex-start"
					gap={[1, 2]}
					paddingY={1}
				>
					{children}
				</Flex>
			</Content>
		</Box>
	);
}

const COLUMN_WIDTH = '2.5rem';

function GlobalAlertIcon() {
	return (
		<Box
			width={COLUMN_WIDTH}
			flexShrink={0}
			css={{ color: boxPalette.systemWarning }}
		>
			<WarningIcon
				aria-hidden="false"
				aria-label="Warning"
				color="inherit"
				css={{ display: 'block' }}
			/>
		</Box>
	);
}

function GlobalAlertText({
	children,
	title,
}: PropsWithChildren<{ title: boolean }>) {
	return (
		<Box
			flexGrow={1}
			css={mq({ paddingLeft: [undefined, title ? COLUMN_WIDTH : undefined] })}
		>
			{children}
		</Box>
	);
}

function GlobalAlertDismissButton({
	onClick,
}: {
	onClick: MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<Button onClick={onClick} iconAfter={CloseIcon} variant="text">
			Close
		</Button>
	);
}
