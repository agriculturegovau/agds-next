import { PropsWithChildren, ReactNode } from 'react';
import FocusLock from 'react-focus-lock';
import { keyframes } from '@emotion/react';
import { Box } from '../box';
import { Stack } from '../stack';
import { mapSpacing, tokens } from '../core';
import { CloseIcon } from '../icon';
import { Button } from '../button';
import { getRequiredCloseHandler } from '../getCloseHandler';
import { ModalTitle } from './ModalTitle';
import { useModalId } from './utils';

export type ModalDialogProps = PropsWithChildren<{
	/** The actions to display at the bottom of the modal panel. Typically a `ButtonGroup`. */
	actions?: ReactNode;
	/** On close of the modal, this element will be focused, rather than the trigger element. */
	elementToFocusOnClose?: HTMLElement | null;
	/** Function to be called when the 'Close' button is pressed. */
	onClose?: () => void;
	/** @deprecated use `onClose` instead */
	onDismiss?: () => void;
	/** The title of the modal dialog. It can span lines but should not be too long. */
	title: string;
}>;

const MAX_WIDTH = '45rem'; // 720 px

export const ModalDialog = ({
	actions,
	children,
	elementToFocusOnClose,
	onClose,
	onDismiss,
	title,
}: ModalDialogProps) => {
	const closeHandler = getRequiredCloseHandler(onClose, onDismiss);
	const { titleId } = useModalId();
	return (
		<FocusLock
			returnFocus={
				elementToFocusOnClose
					? () => {
							// Running focus after focus-lock-react does its cleanup, more info here: https://github.com/theKashey/react-focus-lock#unmounting-and-focus-management
							window.setTimeout(() => elementToFocusOnClose.focus(), 0);

							return false;
					  }
					: true // Return focus to trigger on close
			}
		>
			<Stack
				aria-labelledby={titleId}
				aria-modal="true"
				background="body"
				css={{
					boxShadow: tokens.shadow.lg,
					position: 'relative',
					margin: '0 auto',
					minHeight: '100vh',
					animation: `${animateSlideInUp} ${tokens.transition.duration}ms ${tokens.transition.timingFunction}`,
					'@supports (min-height: 100dvh)': {
						minHeight: '100dvh',
					},
					[tokens.mediaQuery.min.sm]: {
						borderRadius: tokens.borderRadius,
						margin: `${mapSpacing(6)} auto ${mapSpacing(1)}`,
						minHeight: 'auto',
					},
				}}
				gap={1}
				highContrastOutline
				maxWidth={MAX_WIDTH}
				paddingX={{ xs: 0.75, md: 1.5 }}
				paddingY={{ xs: 1, md: 1.5 }}
				role="dialog"
			>
				<Button
					variant="text"
					aria-label="Close modal"
					onClick={closeHandler}
					iconAfter={CloseIcon}
					css={{ alignSelf: 'flex-end' }}
				>
					Close
				</Button>
				<ModalTitle id={titleId}>{title}</ModalTitle>
				<Box>{children}</Box>
				{actions ? (
					<Box paddingTop={1} css={{ marginTop: 'auto' }}>
						{actions}
					</Box>
				) : null}
			</Stack>
		</FocusLock>
	);
};

const animateSlideInUp = keyframes`
  0% { transform: translateY(1rem); }
	100% { transform: translateY(0); }
`;
