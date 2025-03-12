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
import { DrawerProps } from './Drawer';

export type DrawerDialogProps = PropsWithChildren<{
	/** Used to render buttons at the bottom of the draw. */
	actions?: ReactNode;
	/** On close of the drawer, this element will be focused, rather than the trigger element. */
	elementToFocusOnClose?: DrawerProps['elementToFocusOnClose'];
	/** Function to be called when the 'Close' button is pressed. */
	onClose?: () => void;
	style: { translateX: SpringValue<string> };
	/** The title displayed at the top of the draw. */
	title: string;
	/** The width of the draw. */
	width: DrawerDialogWidth;
}>;

const WIDTH_MAP = {
	md: '32rem', // 512px
	lg: '45rem', // 720px
};

export type DrawerDialogWidth = keyof typeof WIDTH_MAP;

const AnimatedFlex = animated(Flex);

export function DrawerDialog({
	actions,
	children,
	elementToFocusOnClose,
	onClose,
	style,
	title,
	width,
}: DrawerDialogProps) {
	const { titleId } = useDrawerId();

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
			<AnimatedFlex
				aria-labelledby={titleId}
				aria-modal
				background="body"
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
				flexDirection="column"
				highContrastOutline
				maxWidth={WIDTH_MAP[width]}
				role="dialog"
				style={style}
			>
				<DrawerHeader>
					<DrawerHeaderTitle id={titleId}>{title}</DrawerHeaderTitle>
				</DrawerHeader>
				<DrawerContent>{children}</DrawerContent>
				{actions ? <DrawerFooter>{actions}</DrawerFooter> : null}
				<Button
					css={mq({
						position: 'fixed',
						zIndex: tokens.zIndex.elevated,
						top: '1.25rem', // align with title
						right: mapResponsiveProp({
							xs: mapSpacing(0.75),
							md: mapSpacing(1.5),
						}),
					})}
					iconAfter={CloseIcon}
					onClick={onClose}
					variant="text"
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
			css={{
				position: 'sticky',
				top: 0,
				zIndex: tokens.zIndex.elevated,
				[tokens.mediaQuery.min.sm]: {
					position: 'relative',
				},
			}}
			paddingX={{ xs: 0.75, md: 1.5 }}
			paddingY={1}
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
			css={{
				display: 'inline-block',
			}}
			data-autofocus
			focusRingFor="keyboard"
			fontSize="lg"
			fontWeight="bold"
			id={id}
			lineHeight="heading"
			tabIndex={-1}
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
			css={{
				[tokens.mediaQuery.min.sm]: {
					overflowY: 'auto',
				},
			}}
			flexGrow={1}
			paddingX={{ xs: 0.75, md: 1.5 }}
			paddingY={{ xs: 1, md: 1.5 }}
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
			css={{ marginTop: 'auto' }}
			paddingX={{ xs: 0.75, md: 1.5 }}
			paddingY={1}
		>
			{children}
		</Box>
	);
}
