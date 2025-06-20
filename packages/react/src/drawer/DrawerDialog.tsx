import { PropsWithChildren, ReactNode } from 'react';
import FocusLock from 'react-focus-lock';
import { Box } from '../box';
import { Flex } from '../flex';
import { mapResponsiveProp, mapSpacing, mq, packs, tokens } from '../core';
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
	/** The title displayed at the top of the draw. */
	title: string;
}>;

export function DrawerDialog({
	actions,
	children,
	elementToFocusOnClose,
	onClose,
	title,
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
			<Flex
				aria-labelledby={titleId}
				aria-modal
				background="body"
				css={{
					boxShadow: tokens.shadow.lg,
					inset: 0,
					position: 'fixed',
				}}
				flexDirection="column"
				highContrastOutline
				role="dialog"
			>
				<DrawerHeader>
					<DrawerHeaderTitle id={titleId}>{title}</DrawerHeaderTitle>
					{/* This button is a non-functioning clone of the normal Close button just to reserve the correct space */}
					<Button
						aria-hidden
						css={{ visibility: 'hidden' }}
						iconAfter={CloseIcon}
						tabIndex={-1}
						variant="text"
					>
						Close
					</Button>
				</DrawerHeader>
				<DrawerContent title={title}>{children}</DrawerContent>
				{actions ? <DrawerFooter>{actions}</DrawerFooter> : null}
				<Button
					css={mq({
						position: 'fixed',
						right: mapResponsiveProp({
							xs: mapSpacing(0.75),
							md: mapSpacing(1.5),
						}),
						top: '1.25rem', // align with title
						zIndex: tokens.zIndex.elevated,
					})}
					iconAfter={CloseIcon}
					onClick={onClose}
					variant="text"
				>
					Close
				</Button>
			</Flex>
		</FocusLock>
	);
}

// Drawer header

type DrawerHeaderProps = PropsWithChildren<{}>;

function DrawerHeader({ children }: DrawerHeaderProps) {
	return (
		<Flex
			background="body"
			borderBottom
			paddingX={{ xs: 0.75, md: 1.5 }}
			paddingY={1}
		>
			{children}
		</Flex>
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

type DrawerContentProps = PropsWithChildren<{ title: string }>;

function DrawerContent({ children, title }: DrawerContentProps) {
	return (
		<Box
			aria-label={`${title} content`}
			as="section"
			background="body"
			css={{
				overflowY: 'auto',
				':focus': { outlineOffset: `-${packs.outline.outlineWidth}` },
			}}
			flexGrow={1}
			focusRingFor="keyboard"
			paddingX={{ xs: 0.75, md: 1.5 }}
			paddingY={{ xs: 1, md: 1.5 }}
			tabIndex={0}
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
