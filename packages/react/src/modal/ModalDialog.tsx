import { PropsWithChildren, ReactNode } from 'react';
import FocusLock from 'react-focus-lock';
import { animated, useSpring } from '@react-spring/web';
import { Box, Stack } from '../box';
import { usePrefersReducedMotion, mapSpacing, tokens } from '../core';
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

const AnimatedStack = animated(Stack);

export const ModalDialog = ({
	actions,
	children,
	title,
	onDismiss,
}: ModalDialogProps) => {
	const { titleId } = useModalId();

	const prefersReducedMotion = usePrefersReducedMotion();
	const animationStyles = useSpring({
		from: { y: 20, opacity: 0 },
		to: { y: 0, opacity: 1 },
		immediate: prefersReducedMotion,
	});

	return (
		<FocusLock returnFocus>
			<AnimatedStack
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
					[tokens.mediaQuery.min.sm]: {
						margin: `${mapSpacing(6)} auto ${mapSpacing(1)}`,
						minHeight: 'auto',
					},
				}}
				style={animationStyles}
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
			</AnimatedStack>
		</FocusLock>
	);
};
