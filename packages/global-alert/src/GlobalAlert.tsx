import { MouseEventHandler, PropsWithChildren } from 'react';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Button } from '@ag.ds-next/button';
import { boxPalette } from '@ag.ds-next/core';
import { CloseIcon, WarningFilledIcon } from '@ag.ds-next/icon';
import { Content } from '@ag.ds-next/content';
import { Heading } from '@ag.ds-next/heading';

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
			css={{ backgroundColor: boxPalette.systemWarningMuted }}
		>
			<Content>
				<Flex
					flexDirection={['column', 'row']}
					alignItems="flex-start"
					justifyContent="space-between"
					gap={[1, 1.5]}
					paddingY={1}
				>
					<Flex flexDirection={['column', 'row']} gap={[0.5, 1]}>
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
						<Button onClick={onDismiss} iconAfter={CloseIcon} variant="text">
							Dismiss
						</Button>
					) : null}
				</Flex>
			</Content>
		</section>
	);
}
