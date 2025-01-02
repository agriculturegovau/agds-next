import { MouseEventHandler, PropsWithChildren } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { boxPalette, tokens } from '../core';
import { WarningFilledIcon, InfoFilledIcon } from '../icon';
import { Heading } from '../heading';
import { getOptionalCloseHandler } from '../getCloseHandler';
import { GlobalAlertCloseButton } from './GlobalAlertCloseButton';

export type GlobalAlertProps = PropsWithChildren<{
	/** @deprecated use `onClose` instead */
	onDismiss?: MouseEventHandler<HTMLButtonElement>;
	/** Function to be called when the 'Close' button is pressed. */
	onClose?: MouseEventHandler<HTMLButtonElement>;
	/** The title of the alert. */
	title?: string;
	/** The tone of the alert. */
	tone?: GlobalAlertTone;
}>;

export function GlobalAlert({
	children,
	onDismiss,
	onClose,
	title,
	tone = 'warning',
}: GlobalAlertProps) {
	const { ariaLabel, bg, fg, Icon } = toneMap[tone];

	const closeHandler = getOptionalCloseHandler(onClose, onDismiss);

	const addTitleMargin = Boolean(closeHandler);
	const addContentMargin = Boolean(closeHandler && !title);

	return (
		<Flex
			aria-label={title || ariaLabel}
			as="section"
			css={{ backgroundColor: bg }}
			highContrastOutline
		>
			<Flex
				alignItems="center"
				css={{ backgroundColor: fg, color: boxPalette.backgroundBody }}
				flexShrink={0}
				justifyContent="center"
				padding={0.75}
			>
				<Icon aria-hidden="false" aria-label={ariaLabel} color="inherit" />
			</Flex>
			<Flex
				alignItems="flex-start"
				css={{ position: 'relative' }}
				flexGrow={1}
				gap={2}
				padding={1.5}
			>
				<Stack flexGrow={1} gap={0.75}>
					{title ? (
						<Heading
							as="h2"
							css={{
								...(addTitleMargin && {
									marginRight: '2.5rem', // (1.5rem icon + 1rem gap)
									[tokens.mediaQuery.min.lg]: { marginRight: 0 },
								}),
							}}
							maxWidth={tokens.maxWidth.bodyText}
							type="h3"
						>
							{title}
						</Heading>
					) : null}
					<Box
						css={{
							...(addContentMargin && {
								marginRight: '2.5rem', // (1.5rem icon + 1rem gap)
								[tokens.mediaQuery.min.lg]: { marginRight: 0 },
							}),
						}}
						maxWidth={tokens.maxWidth.bodyText}
					>
						{children}
					</Box>
				</Stack>
				{closeHandler ? (
					<GlobalAlertCloseButton onClick={closeHandler} />
				) : null}
			</Flex>
		</Flex>
	);
}

const toneMap = {
	info: {
		ariaLabel: 'Information',
		bg: boxPalette.systemInfoMuted,
		fg: boxPalette.systemInfo,
		Icon: InfoFilledIcon,
	},
	warning: {
		ariaLabel: 'Warning',
		bg: boxPalette.systemWarningMuted,
		fg: boxPalette.systemWarning,
		Icon: WarningFilledIcon,
	},
};

export type GlobalAlertTone = keyof typeof toneMap;
