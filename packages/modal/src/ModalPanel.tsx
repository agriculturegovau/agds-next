import { PropsWithChildren } from 'react';
import FocusLock from 'react-focus-lock';
import { animated, useSpring } from 'react-spring';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { usePrefersReducedMotion, mapSpacing, tokens } from '@ag.ds-next/core';
import { CloseIcon } from '@ag.ds-next/icon';
import { Button } from '@ag.ds-next/button';

import { ModalTitle } from './ModalTitle';
import { useModalId } from './utils';

export type ModalPanelProps = PropsWithChildren<{
	onDismiss: () => void;
	title?: string;
}>;

const AnimatedBox = animated(Box);

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
			<AnimatedBox
				role="dialog"
				aria-modal="true"
				tabIndex={-1}
				data-autofocus
				background="body"
				aria-labelledby={titleId}
				rounded
				focus
				padding={1.5}
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
				<Flex justifyContent="flex-end">
					<Button
						variant="tertiary"
						onClick={onDismiss}
						iconAfter={CloseIcon}
						css={{
							position: 'relative',
							top: `-${mapSpacing(1)}`,
							right: `-${mapSpacing(1)}`,
						}}
					>
						Close
					</Button>
				</Flex>

				<Stack gap={1}>
					{title && <ModalTitle id={titleId}>{title}</ModalTitle>}
					<div>{children}</div>
				</Stack>
			</AnimatedBox>
		</FocusLock>
	);
};
