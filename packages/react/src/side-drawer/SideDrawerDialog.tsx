import { PropsWithChildren, ReactNode } from 'react';
import FocusLock from 'react-focus-lock';
import { animated } from '@react-spring/web';
import { Box, Flex } from '../box';
import { mapSpacing } from '../core';
import { CloseIcon } from '../icon';
import { Button } from '../button';
import { Text } from '../text';
import { useSideDrawerId } from './utils';

export type SideDrawerDialogProps = PropsWithChildren<{
	/** The actions to display at the bottom of the SideDrawer panel. Typically a `ButtonGroup`. */
	actions?: ReactNode;
	/** Function to be called when the SideDrawer is closed. */
	onDismiss: () => void;
	/** The title of the SideDrawer dialog. It can span lines but should not be too long. */
	title: string;
	overlay?: boolean;
	style?: any; // TODO
}>;

const AnimatedFlex = animated(Flex);

export const SideDrawerDialog = ({
	actions,
	children,
	title,
	onDismiss,
	overlay = true,
	style,
}: SideDrawerDialogProps) => {
	const { titleId } = useSideDrawerId();
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
					margin: `0 0 0 auto`,
					height: '100vh',
					overflow: 'hidden',
					position: 'fixed',
					top: 0,
					right: 0,
					bottom: 0,
					zIndex: 100,
					...(!overlay && {
						boxShadow: '-2px 0px 4px rgba(0, 0, 0, 0.3)',
					}),
				}}
				style={style}
			>
				<SideDrawerHeader>
					<SideDrawerHeaderTitle id={titleId}>{title}</SideDrawerHeaderTitle>
				</SideDrawerHeader>
				<SideDrawerContent>{children}</SideDrawerContent>
				{actions ? <SideDrawerFooter>{actions}</SideDrawerFooter> : null}
				<Button
					variant="tertiary"
					aria-label="Close SideDrawer"
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
};

type SideDrawerHeaderProps = PropsWithChildren<{}>;

function SideDrawerHeader({ children }: SideDrawerHeaderProps) {
	return (
		<Box borderBottom borderColor="muted" padding={1.5}>
			{children}
		</Box>
	);
}

type SideDrawerHeaderTitleProps = PropsWithChildren<{ id: string }>;

function SideDrawerHeaderTitle({ children, id }: SideDrawerHeaderTitleProps) {
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

type SideDrawerContentProps = PropsWithChildren<{}>;

function SideDrawerContent({ children }: SideDrawerContentProps) {
	return (
		<Box padding={1.5} css={{ overflowY: 'auto' }}>
			{children}
		</Box>
	);
}

type SideDrawerFooterProps = PropsWithChildren<{}>;

function SideDrawerFooter({ children }: SideDrawerFooterProps) {
	return (
		<Box
			borderTop
			borderColor="muted"
			padding={1.5}
			css={{ marginTop: 'auto' }}
		>
			{children}
		</Box>
	);
}
