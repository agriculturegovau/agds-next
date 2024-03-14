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
			as="section"
			aria-label={title || ariaLabel}
			css={{ backgroundColor: bg }}
		>
			<Flex
				alignItems="center"
				justifyContent="center"
				padding={0.75}
				flexShrink={0}
				css={{ backgroundColor: fg, color: boxPalette.backgroundBody }}
			>
				<Icon aria-hidden="false" aria-label={ariaLabel} color="inherit" />
			</Flex>
			<Flex
				flexGrow={1}
				alignItems="flex-start"
				padding={1.5}
				gap={2}
				css={{ position: 'relative' }}
			>
				<Stack flexGrow={1} gap={0.75}>
					{title ? (
						<Heading
							as="h2"
							type="h3"
							maxWidth={tokens.maxWidth.bodyText}
							css={{
								...(addTitleMargin && {
									marginRight: '2.5rem', // (1.5rem icon + 1rem gap)
									[tokens.mediaQuery.min.lg]: { marginRight: 0 },
								}),
							}}
						>
							{title}
						</Heading>
					) : null}
					<Box
						maxWidth={tokens.maxWidth.bodyText}
						css={{
							...(addContentMargin && {
								marginRight: '2.5rem', // (1.5rem icon + 1rem gap)
								[tokens.mediaQuery.min.lg]: { marginRight: 0 },
							}),
						}}
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
