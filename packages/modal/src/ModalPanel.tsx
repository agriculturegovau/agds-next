import { PropsWithChildren } from 'react';
import FocusLock from 'react-focus-lock';
import { animated, useSpring } from 'react-spring';
import { Stack } from '@ag.ds-next/box';
import { usePrefersReducedMotion, mapSpacing, tokens } from '@ag.ds-next/core';
import { CloseIcon } from '@ag.ds-next/icon';
import { Button } from '@ag.ds-next/button';

import { ModalTitle } from './ModalTitle';
import { useModalId } from './utils';

export type ModalPanelProps = PropsWithChildren<{
	onDismiss: () => void;
	title?: string;
}>;

const AnimatedStack = animated(Stack);

export const ModalPanel = ({ children, title, onDismiss }: ModalPanelProps) => {
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
				tabIndex={-1}
				data-autofocus
				background="body"
				aria-labelledby={titleId}
				rounded
				focus
				padding={1.5}
				paddingTop={4}
				gap={1}
				maxWidth={tokens.maxWidth.bodyText}
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
				{title && <ModalTitle id={titleId}>{title}</ModalTitle>}
				<div>{children}</div>

				<Button
					variant="tertiary"
					onClick={onDismiss}
					iconAfter={CloseIcon}
					css={{
						position: 'absolute',
						top: `${mapSpacing(0.5)}`,
						right: `${mapSpacing(0.5)}`,
					}}
				>
					Close
				</Button>
			</AnimatedStack>
		</FocusLock>
	);
};
