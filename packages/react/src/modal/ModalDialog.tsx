import { PropsWithChildren, ReactNode } from 'react';
import FocusLock from 'react-focus-lock';
import { keyframes } from '@emotion/react';
import { Box, Stack } from '../box';
import { mapSpacing, tokens } from '../core';
import { CloseIcon } from '../icon';
import { Button } from '../button';
import { ModalTitle } from './ModalTitle';
import { useModalId } from './utils';

export type ModalDialogProps = PropsWithChildren<{
	/** The actions to display at the bottom of the modal panel. Typically a `ButtonGroup`. */
	actions?: ReactNode;
	/** Function to be called when the modal is closed. */
	onDismiss: () => void;
	/** The title of the modal dialog. It can span lines but should not be too long. */
	title: string;
}>;

export const ModalDialog = ({
	actions,
	children,
	title,
	onDismiss,
}: ModalDialogProps) => {
	const { titleId } = useModalId();
	return (
		<FocusLock returnFocus>
			<Stack
				role="dialog"
				aria-modal="true"
				background="body"
				aria-labelledby={titleId}
				rounded
				focus
				padding={1.5}
				paddingTop={4}
				gap={1}
				maxWidth={tokens.maxWidth.modalDialog}
				css={{
					position: 'relative',
					margin: '0 auto',
					minHeight: '100vh',
					animation: `${animateSlideInUp} ${tokens.transition.duration}ms ${tokens.transition.timingFunction}`,
					[tokens.mediaQuery.min.sm]: {
						margin: `${mapSpacing(6)} auto ${mapSpacing(1)}`,
						minHeight: 'auto',
					},
				}}
			>
				<ModalTitle id={titleId}>{title}</ModalTitle>
				<Box>{children}</Box>
				{actions ? (
					<Box paddingTop={1} css={{ marginTop: 'auto' }}>
						{actions}
					</Box>
				) : null}
				<Button
					variant="tertiary"
					aria-label="Close modal"
					onClick={onDismiss}
					iconAfter={CloseIcon}
					css={{
						position: 'absolute',
						top: mapSpacing(0.5),
						right: mapSpacing(0.5),
					}}
				>
					Close
				</Button>
			</Stack>
		</FocusLock>
	);
};

const animateSlideInUp = keyframes`
  0% { transform: translateY(1rem); }
	100% { transform: translateY(0); }
`;
