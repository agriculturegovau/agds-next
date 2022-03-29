import { ReactNode } from 'react';
import { animated, useSpring } from 'react-spring';
import { Box, Flex } from '@ag.ds-next/box';
import { usePrefersReducedMotion } from '@ag.ds-next/core';
import { CloseIcon } from '@ag.ds-next/icon';
import { Button } from '@ag.ds-next/button';

export type ModalPanelProps = { children: ReactNode; onDismiss: () => void };

// configure if default close button is visible
const AnimatedBox = animated(Box);

export const ModalPanel = ({ children, onDismiss }: ModalPanelProps) => {
	const prefersReducedMotion = usePrefersReducedMotion();
	const style = useSpring({
		from: { y: 20, opacity: 0 },
		to: { y: 0, opacity: 1 },
		immediate: prefersReducedMotion,
	});

	return (
		<AnimatedBox
			role="dialog"
			aria-modal="true"
			background="body"
			rounded
			padding={1.5}
			maxWidth="32rem"
			style={{
				position: 'relative',
				margin: '24px auto',
				...style,
			}}
		>
			<Flex justifyContent="flex-end">
				<Button
					size="sm"
					variant="tertiary"
					onClick={onDismiss}
					iconAfter={CloseIcon}
				>
					Close
				</Button>
			</Flex>

			<Box>{children}</Box>
		</AnimatedBox>
	);
};
