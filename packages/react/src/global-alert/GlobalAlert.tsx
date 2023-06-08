import { MouseEventHandler, PropsWithChildren } from 'react';
import { Box, Flex, Stack } from '../box';
import { Button } from '../button';
import { boxPalette, mapSpacing, tokens } from '../core';
import { CloseIcon, WarningFilledIcon } from '../icon';
import { Content } from '../content';
import { Heading } from '../heading';

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
			<Content>
				<Flex
					flexDirection={{ xs: 'column', sm: 'row' }}
					alignItems="flex-start"
					justifyContent="space-between"
					gap={[1, 1.5]}
					paddingY={1}
					css={{
						position: 'relative',
					}}
				>
					<Flex flexDirection={{ xs: 'column', sm: 'row' }} gap={[0.5, 1]}>
						<Box
							flexShrink={0}
							css={{ color: boxPalette.systemWarning }}
							paddingTop={title ? [0, 0.25] : undefined}
						>
							<WarningFilledIcon
								aria-hidden="false"
								aria-label="Warning"
								color="inherit"
								css={{ display: 'block' }}
							/>
						</Box>
						<Stack gap={0.5}>
							{title ? (
								<Heading as="h2" type="h3">
									{title}
								</Heading>
							) : null}
							<Box flexGrow={1}>{children}</Box>
						</Stack>
					</Flex>
					{onDismiss ? (
						<Button
							onClick={onDismiss}
							iconAfter={CloseIcon}
							variant="text"
							aria-label="Dismiss"
							css={{
								position: 'absolute',
								top: mapSpacing(0.75),
								right: 0,
								flexShrink: 0,
								// Reset the position on larger screens
								[tokens.mediaQuery.min.sm]: {
									position: 'relative',
									top: 'unset',
									right: 'unset',
								},
								// Hide the button text on small screens
								'& > span:first-of-type': {
									display: 'none',
									[tokens.mediaQuery.min.sm]: {
										display: 'block',
									},
								},
							}}
						>
							Dismiss
						</Button>
					) : null}
				</Flex>
			</Content>
		</section>
	);
}
