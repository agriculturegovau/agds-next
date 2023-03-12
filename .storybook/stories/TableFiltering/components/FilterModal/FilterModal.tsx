import { Box, Stack } from '@ag.ds-next/react/box';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { PropsWithChildren, ReactNode } from 'react';
import { Global } from '@emotion/react';
import FocusLock from 'react-focus-lock';
import { animated, useSpring } from '@react-spring/web';
import {
	mapSpacing,
	tokens,
	usePrefersReducedMotion,
} from '@ag.ds-next/react/core';
import { ModalTitle } from '@ag.ds-next/react/src/modal/ModalTitle';
import { CloseIcon } from '@ag.ds-next/react/icon';

export type FilterModalProps = PropsWithChildren<{
	/** The actions to display at the bottom of the modal panel. Typically a `ButtonGroup`. */
	actions?: ReactNode;
	/** Function to be called when the modal is closed to accept changes. */
	onApply: () => void;
	/** Function to be called when the modal is closed. */
	onDismiss: () => void;
	/** The title of the modal dialog. It can span lines but should not be too long. */
	title: string;
}>;

const AnimatedStack = animated(Stack);

export const FilterModal = ({
	children,
	title,
	onApply,
	onDismiss,
}: FilterModalProps) => {
	// const { titleId } = useModalId()
	const titleId = 'modal-title';

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
				maxWidth={tokens.maxWidth.modalDialog}
				css={{
					position: 'relative',
					margin: '0 auto',
					minHeight: '100vh',
					[tokens.mediaQuery.min.sm]: {
						margin: `${mapSpacing(1)} auto ${mapSpacing(1)}`,
						height: 'calc(100vh - 2rem)',
						minHeight: 'auto',
					},
				}}
				style={animationStyles}
			>
				<Box padding={1.5} borderBottom={{ xs: false, md: true }}>
					<ModalTitle id={titleId}>{title}</ModalTitle>
				</Box>

				<Box
					css={{
						overflowY: 'scroll',
					}}
				>
					{children}
				</Box>

				<Box
					borderTop={{ xs: false, md: true }}
					padding={1.5}
					css={{
						[tokens.mediaQuery.min.sm]: {
							marginTop: 'auto',
						},
					}}
				>
					<ButtonGroup>
						<Button onClick={onApply}>Apply filters</Button>
						<Button variant="tertiary" onClick={onDismiss}>
							Cancel
						</Button>
					</ButtonGroup>
				</Box>

				<Button
					variant="tertiary"
					aria-label="Close modal"
					onClick={onDismiss}
					iconAfter={CloseIcon}
					css={{
						position: 'absolute',
						top: mapSpacing(1),
						right: mapSpacing(1),
					}}
				>
					Close
				</Button>
			</AnimatedStack>
		</FocusLock>
	);
};

export const LockScroll = () => (
	<Global styles={{ body: { overflow: 'hidden' } }} />
);
