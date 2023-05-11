import { PropsWithChildren, ReactNode } from 'react';
import { Global } from '@emotion/react';
import FocusLock from 'react-focus-lock';
import { animated } from '@react-spring/web';
import { Button, ButtonGroup } from '@ag.ds-next/react/button';
import { Box, Stack } from '@ag.ds-next/react/box';
import { mapSpacing, tokens } from '@ag.ds-next/react/core';
import { Text } from '@ag.ds-next/react/text';
import { CloseIcon } from '@ag.ds-next/react/icon';

export type FilterModalProps = PropsWithChildren<{
	actions?: ReactNode;
	onApply: () => void;
	onDismiss: () => void;
	title: string;
	resetFilters: () => void;
	style?: any;
}>;

const AnimatedStack = animated(Stack);

export const FilterModal = ({
	children,
	title,
	onApply,
	onDismiss,
	resetFilters,
	style,
}: FilterModalProps) => {
	const titleId = 'modal-title';
	return (
		<FocusLock returnFocus>
			<AnimatedStack
				role="dialog"
				aria-modal="true"
				background="body"
				aria-labelledby={titleId}
				maxWidth="32rem"
				css={{
					position: 'fixed',
					top: 0,
					bottom: 0,
					right: 0,
					zIndex: 100,
				}}
				style={style}
			>
				<Box padding={1.5} borderBottom borderColor="muted">
					<Text
						as="h2"
						fontSize="lg"
						fontWeight="bold"
						lineHeight="heading"
						data-autofocus
						focus
						tabIndex={-1}
						css={{ display: 'inline-block' }}
					>
						{title}
					</Text>
				</Box>
				<Box css={{ overflowY: 'scroll' }}>
					<Box padding={1.5}>{children}</Box>
				</Box>
				<Box
					borderTop
					borderColor="muted"
					padding={1.5}
					css={{
						[tokens.mediaQuery.min.sm]: {
							marginTop: 'auto',
						},
					}}
				>
					<ButtonGroup>
						<Button onClick={onApply}>Apply filters</Button>
						<Button variant="secondary" onClick={resetFilters}>
							Reset filters
						</Button>
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
