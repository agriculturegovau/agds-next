import { PropsWithChildren, ReactNode } from 'react';
import FocusLock from 'react-focus-lock';
import { animated } from '@react-spring/web';
import { Box, Flex } from '../box';
import { mapSpacing } from '../core';
import { CloseIcon } from '../icon';
import { Button } from '../button';
import { Text } from '../text';
import { useFilterDrawerId } from './utils';

export type FilterDrawerDialogProps = PropsWithChildren<{
	/** The actions to display at the bottom of the FilterDrawer panel. Typically a `ButtonGroup`. */
	actions?: ReactNode;
	/** Function to be called when the FilterDrawer is closed. */
	onDismiss: () => void;
	/** The title of the FilterDrawer dialog. It can span lines but should not be too long. */
	title: string;

	// TODO This probably will be removed
	overlay?: boolean;
	// TODO This can be cleaned up
	style?: any;
}>;

const AnimatedFlex = animated(Flex);

export const FilterDrawerDialog = ({
	actions,
	children,
	title,
	onDismiss,
	overlay = true,
	style,
}: FilterDrawerDialogProps) => {
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
				<FilterDrawerHeader>
					<FilterDrawerHeaderTitle id={titleId}>
						{title}
					</FilterDrawerHeaderTitle>
				</FilterDrawerHeader>
				<FilterDrawerContent>{children}</FilterDrawerContent>
				{actions ? <FilterDrawerFooter>{actions}</FilterDrawerFooter> : null}
				<Button
					variant="tertiary"
					aria-label="Close FilterDrawer"
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

type FilterDrawerHeaderProps = PropsWithChildren<{}>;

function FilterDrawerHeader({ children }: FilterDrawerHeaderProps) {
	return (
		<Box borderBottom borderColor="muted" padding={1.5}>
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
			padding={1.5}
			css={{ marginTop: 'auto' }}
		>
			{children}
		</Box>
	);
}
