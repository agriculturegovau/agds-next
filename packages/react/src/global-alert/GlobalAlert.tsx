import { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { boxPalette, tokens, mapSpacing } from '../core';
import { WarningFilledIcon } from '../icon';
import { Heading } from '../heading';
import {
	GlobalAlertCloseButton,
	GLOBAL_ALERT_CLOSE_BUTTON_LABEL_VISIBLE_MQ,
} from './GlobalAlertCloseButton';

export type GlobalAlertProps = PropsWithChildren<{
	/** Function to be called when the 'Close' button is pressed. */
	onDismiss?: MouseEventHandler<HTMLButtonElement>;
	/** The title of the alert. */
	title?: string;
}>;

export function GlobalAlert({ children, onDismiss, title }: GlobalAlertProps) {
	return (
		<section
			aria-label={title}
			css={{
				backgroundColor: boxPalette.systemWarningMuted,
			}}
		>
			<Flex
				flexDirection="row"
				css={{
					position: 'relative',
				}}
			>
				<GlobalAlertIconContainer>
					<WarningFilledIcon
						aria-hidden="false"
						aria-label="Warning"
						color="inherit"
					/>
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

const GlobalAlertIconContainer = ({ children }: { children: ReactNode }) => {
	return (
		<Flex
			// flexShrink={0}
			alignItems="center"
			justifyContent="center"
			padding={1}
			css={{
				backgroundColor: boxPalette.systemWarning,
				color: boxPalette.backgroundBody,
			}}
		>
			{children}
		</Flex>
	);
};
