import { MouseEventHandler, PropsWithChildren } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { boxPalette, tokens } from '../core';
import { WarningFilledIcon, InfoFilledIcon } from '../icon';
import { Heading } from '../heading';
import { GlobalAlertCloseButton } from './GlobalAlertCloseButton';

export type GlobalAlertProps = PropsWithChildren<{
	/** Function to be called when the 'Close' button is pressed. */
	onDismiss?: MouseEventHandler<HTMLButtonElement>;
	/** The title of the alert. */
	title?: string;
	/** The tone of the alert. */
	tone?: GlobalAlertTone;
}>;

export function GlobalAlert({
	children,
	onDismiss,
	title,
	tone = 'warning',
}: GlobalAlertProps) {
	const { bg, fg, Icon } = toneMap[tone];

	const addTitleMargin = Boolean(onDismiss);
	const addContentMargin = Boolean(onDismiss && !title);

	return (
		<Flex as="section" aria-label={title} css={{ backgroundColor: bg }}>
			<Flex
				alignItems="center"
				justifyContent="center"
				padding={0.75}
				flexShrink={0}
				css={{ backgroundColor: fg, color: boxPalette.foregroundInverse }}
			>
				<Icon aria-hidden="false" aria-label="Warning" color="inherit" />
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
				{onDismiss ? <GlobalAlertCloseButton onClick={onDismiss} /> : null}
			</Flex>
		</Flex>
	);
}

const toneMap = {
	info: {
		bg: boxPalette.systemInfoMuted,
		fg: boxPalette.systemInfo,
		Icon: InfoFilledIcon,
	},
	warning: {
		bg: boxPalette.systemWarningMuted,
		fg: boxPalette.systemWarning,
		Icon: WarningFilledIcon,
	},
};

export type GlobalAlertTone = keyof typeof toneMap;
