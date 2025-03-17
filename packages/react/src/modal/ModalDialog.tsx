import { PropsWithChildren, ReactNode } from 'react';
import FocusLock from 'react-focus-lock';
import { keyframes } from '@emotion/react';
import { Box } from '../box';
import { Stack } from '../stack';
import { mapSpacing, tokens } from '../core';
import { CloseIcon } from '../icon';
import { Button } from '../button';
import { ModalTitle } from './ModalTitle';
import { useModalId } from './utils';

export type ModalDialogProps = PropsWithChildren<{
	/** The actions to display at the bottom of the modal panel. Typically a `ButtonGroup`. */
	actions?: ReactNode;
	/** Function to be called when the 'Close' button is pressed. */
	onClose?: () => void;
	/** The title of the modal dialog. It can span lines but should not be too long. */
	title: string;
}>;

const MAX_WIDTH = '45rem'; // 720 px

export const ModalDialog = ({
	actions,
	children,
	onClose,
	title,
}: ModalDialogProps) => {
	const { titleId } = useModalId();
	return (
		<FocusLock returnFocus>
			<Stack
				aria-labelledby={titleId}
				aria-modal
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
					aria-label="Close modal"
					css={{ alignSelf: 'flex-end' }}
					iconAfter={CloseIcon}
					onClick={onClose}
					variant="text"
				>
					Close
				</Button>
				<ModalTitle id={titleId}>{title}</ModalTitle>
				<Box>{children}</Box>
				{actions ? (
					<Box css={{ marginTop: 'auto' }} paddingTop={1}>
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
