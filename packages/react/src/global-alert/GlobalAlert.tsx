import { MouseEventHandler, PropsWithChildren } from 'react';
import { Box } from '../box';
import { Flex } from '../flex';
import { Stack } from '../stack';
import { boxPalette } from '../core';
import { WarningFilledIcon } from '../icon';
import { Content } from '../content';
import { Heading } from '../heading';
import { GlobalAlertCloseButton } from './GlobalAlertCloseButton';

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
					{onDismiss ? <GlobalAlertCloseButton onClick={onDismiss} /> : null}
				</Flex>
			</Content>
		</section>
	);
}
