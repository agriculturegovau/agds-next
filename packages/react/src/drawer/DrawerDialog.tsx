import { PropsWithChildren, ReactNode } from 'react';
import FocusLock from 'react-focus-lock';
import { animated, SpringValue } from '@react-spring/web';
import { Box } from '../box';
import { Flex } from '../flex';
import { mapResponsiveProp, mapSpacing, mq, tokens } from '../core';
import { CloseIcon } from '../icon';
import { Button } from '../button';
import { Text } from '../text';
import { useDrawerId } from './utils';

export type DrawerDialogProps = PropsWithChildren<{
	actions?: ReactNode;
	onDismiss: () => void;
	title: string;
	style?: { translateX: SpringValue<string> };
}>;

const AnimatedFlex = animated(Flex);

export function DrawerDialog({
	actions,
	children,
	title,
	onDismiss,
	style,
}: DrawerDialogProps) {
	const { titleId } = useDrawerId();
	return (
		<FocusLock returnFocus>
			<AnimatedFlex
				flexDirection="column"
				role="dialog"
				aria-modal="true"
				background="body"
				aria-labelledby={titleId}
				maxWidth="32rem"
				css={{
					boxShadow: tokens.shadow.lg,
					position: 'fixed',
					inset: 0,
					marginLeft: 'auto',
					zIndex: tokens.zIndex.dialog,
					[tokens.mediaQuery.max.xs]: {
						overflowY: 'auto',
					},
				}}
				style={style}
			>
				<DrawerHeader>
					<DrawerHeaderTitle id={titleId}>{title}</DrawerHeaderTitle>
				</DrawerHeader>
				<DrawerContent>{children}</DrawerContent>
				{actions ? <DrawerFooter>{actions}</DrawerFooter> : null}
				<Button
					variant="text"
					onClick={onDismiss}
					iconAfter={CloseIcon}
					css={mq({
						position: 'fixed',
						zIndex: tokens.zIndex.elevated,
						top: '1.25rem', // align with title
						right: mapResponsiveProp({
							xs: mapSpacing(0.75),
							md: mapSpacing(1.5),
						}),
					})}
				>
					Close
				</Button>
			</AnimatedFlex>
		</FocusLock>
	);
}

// Drawer header

type DrawerHeaderProps = PropsWithChildren<{}>;

function DrawerHeader({ children }: DrawerHeaderProps) {
	return (
		<Box
			background="body"
			borderBottom
			paddingX={{ xs: 0.75, md: 1.5 }}
			paddingY={1}
			css={{
				position: 'sticky',
				top: 0,
				zIndex: tokens.zIndex.elevated,
				[tokens.mediaQuery.min.sm]: {
					position: 'relative',
				},
			}}
		>
			{children}
		</Box>
	);
}

type DrawerHeaderTitleProps = PropsWithChildren<{ id: string }>;

function DrawerHeaderTitle({ children, id }: DrawerHeaderTitleProps) {
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
			css={{
				display: 'inline-block',
			}}
		>
			{children}
		</Text>
	);
}

// Drawer content

type DrawerContentProps = PropsWithChildren<{}>;

function DrawerContent({ children }: DrawerContentProps) {
	return (
		<Box
			background="body"
			flexGrow={1}
			paddingX={{ xs: 0.75, md: 1.5 }}
			paddingY={{ xs: 1, md: 1.5 }}
			css={{
				[tokens.mediaQuery.min.sm]: {
					overflowY: 'auto',
				},
			}}
		>
			{children}
		</Box>
	);
}

// Drawer footer

type DrawerFooterProps = PropsWithChildren<{}>;

function DrawerFooter({ children }: DrawerFooterProps) {
	return (
		<Box
			background="body"
			borderTop
			paddingX={{ xs: 0.75, md: 1.5 }}
			paddingY={1}
			css={{ marginTop: 'auto' }}
		>
			{children}
		</Box>
	);
}
