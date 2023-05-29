import { MouseEventHandler, PropsWithChildren } from 'react';
import { Box, Flex, Stack } from '../box';
import { Button } from '../button';
import { boxPalette, tokens } from '../core';
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
				position: 'relative',
			}}
		>
			<Content>
				<Flex
					flexDirection={{ xs: 'column', sm: 'row' }}
					alignItems="flex-start"
					justifyContent="space-between"
					gap={[1, 1.5]}
					paddingY={1}
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
						<div
							css={{
								position: 'absolute',
								top: '1rem',
								right: '1rem',
								[tokens.mediaQuery.min.sm]: {
									position: 'relative',
									top: 'unset',
									right: 'unset',
								},
							}}
						>
							<Button onClick={onDismiss} iconAfter={CloseIcon} variant="text">
								Dismiss
							</Button>
						</div>
					) : null}
				</Flex>
			</Content>
		</section>
	);
}
