import { PropsWithChildren, ReactNode } from 'react';
import FocusLock from 'react-focus-lock';
import { animated, SpringValue } from '@react-spring/web';
import { Box } from '../box';
import { Flex } from '../flex';
import { mapSpacing } from '../core';
import { CloseIcon } from '../icon';
import { Button } from '../button';
import { Text } from '../text';
import { useFilterDrawerId } from './utils';

export type FilterDrawerDialogProps = PropsWithChildren<{
	actions?: ReactNode;
	onDismiss: () => void;
	title: string;
	style?: { translateX: SpringValue<string> };
}>;

const AnimatedFlex = animated(Flex);

export function FilterDrawerDialog({
	actions,
	children,
	title,
	onDismiss,
	style,
}: FilterDrawerDialogProps) {
	const { titleId } = useFilterDrawerId();
	return (
		<FocusLock returnFocus>
			<AnimatedFlex
				flexDirection="column"
				role="dialog"
				aria-modal="true"
				background="body"
				aria-labelledby={titleId}
				maxWidth="32rem"
				borderLeft
				borderColor="muted"
				css={{
					height: '100vh',
					overflow: 'hidden',
					position: 'fixed',
					inset: 0,
					marginLeft: 'auto',
					zIndex: 100,
				}}
				style={style}
			>
				<FilterDrawerHeader>
					<FilterDrawerHeaderTitle id={titleId}>
						{title}
					</FilterDrawerHeaderTitle>
				</FilterDrawerHeader>
				<FilterDrawerContent>{children}</FilterDrawerContent>
				{actions ? <FilterDrawerFooter>{actions}</FilterDrawerFooter> : null}
				<Button
					variant="tertiary"
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
			</AnimatedFlex>
		</FocusLock>
	);
}

type FilterDrawerHeaderProps = PropsWithChildren<{}>;

function FilterDrawerHeader({ children }: FilterDrawerHeaderProps) {
	return (
		<Box borderBottom borderColor="muted" paddingX={1.5} paddingY={1}>
			{children}
		</Box>
	);
}

type FilterDrawerHeaderTitleProps = PropsWithChildren<{ id: string }>;

function FilterDrawerHeaderTitle({
	children,
	id,
}: FilterDrawerHeaderTitleProps) {
	return (
		<Text
			as="h2"
			fontSize="lg"
			fontWeight="bold"
			lineHeight="heading"
			id={id}
			data-autofocus
			focus
			tabIndex={-1}
			css={{ display: 'inline-block' }}
		>
			{children}
		</Text>
	);
}

type FilterDrawerContentProps = PropsWithChildren<{}>;

function FilterDrawerContent({ children }: FilterDrawerContentProps) {
	return (
		<Box padding={1.5} css={{ overflowY: 'auto' }}>
			{children}
		</Box>
	);
}

type FilterDrawerFooterProps = PropsWithChildren<{}>;

function FilterDrawerFooter({ children }: FilterDrawerFooterProps) {
	return (
		<Box
			borderTop
			borderColor="muted"
			paddingX={1.5}
			paddingY={1}
			css={{ marginTop: 'auto' }}
		>
			{children}
		</Box>
	);
}
