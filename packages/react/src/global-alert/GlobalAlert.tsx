import { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { boxPalette, tokens, mapSpacing } from '../core';
import { WarningFilledIcon, InfoFilledIcon } from '../icon';
import { Heading } from '../heading';
import {
	GlobalAlertCloseButton,
	GLOBAL_ALERT_CLOSE_BUTTON_LABEL_VISIBLE_MQ,
} from './GlobalAlertCloseButton';

type GlobalAlertTone = 'info' | 'warning';

export type GlobalAlertProps = PropsWithChildren<{
	/** Function to be called when the 'Close' button is pressed. */
	onDismiss?: MouseEventHandler<HTMLButtonElement>;
	/** The title of the alert. */
	title?: string;
	/** The tone of the alert. */
	tone?: GlobalAlertTone;
}>;

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

export function GlobalAlert({
	children,
	onDismiss,
	title,
	tone = 'warning',
}: GlobalAlertProps) {
	const { bg, Icon } = toneMap[tone];

	return (
		<section aria-label={title} css={{ backgroundColor: bg }}>
			<Flex
				flexDirection="row"
				css={{
					position: 'relative',
				}}
			>
				<GlobalAlertIconContainer tone={tone}>
					<Icon aria-hidden="false" aria-label="Warning" color="inherit" />
				</GlobalAlertIconContainer>

				<Flex padding={1}>
					<Stack gap={0.5} maxWidth={tokens.maxWidth.bodyText}>
						{title ? (
							<Heading
								as="h2"
								type="h3"
								css={{
									marginRight: mapSpacing(2),
									[GLOBAL_ALERT_CLOSE_BUTTON_LABEL_VISIBLE_MQ]: {
										marginRight: '0rem',
									},
								}}
							>
								{title}
							</Heading>
						) : null}
						<Box
							flexGrow={1}
							css={
								title
									? null
									: {
											marginRight: mapSpacing(2),
											[GLOBAL_ALERT_CLOSE_BUTTON_LABEL_VISIBLE_MQ]: {
												marginRight: '0rem',
											},
									  }
							}
						>
							{children}
						</Box>
					</Stack>
				</Flex>
				{onDismiss ? <GlobalAlertCloseButton onClick={onDismiss} /> : null}
			</Flex>
		</section>
	);
}

const GlobalAlertIconContainer = ({
	children,
	tone,
}: {
	children: ReactNode;
	tone: GlobalAlertTone;
}) => {
	const { fg } = toneMap[tone];

	return (
		<Flex
			// flexShrink={0}
			alignItems="center"
			justifyContent="center"
			padding={1}
			css={{
				backgroundColor: fg,
				color: boxPalette.backgroundBody,
			}}
		>
			{children}
		</Flex>
	);
};
