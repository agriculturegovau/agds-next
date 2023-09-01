import { PropsWithChildren, ReactNode } from 'react';
import FocusLock from 'react-focus-lock';
import { animated, SpringValue } from '@react-spring/web';
import { Box } from '../box';
import { Flex } from '../flex';
import { mapResponsiveProp, mapSpacing, mq, tokens } from '../core';
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
				<FilterDrawerHeader>
					<FilterDrawerHeaderTitle id={titleId}>
						{title}
					</FilterDrawerHeaderTitle>
				</FilterDrawerHeader>
				<FilterDrawerContent>{children}</FilterDrawerContent>
				{actions ? <FilterDrawerFooter>{actions}</FilterDrawerFooter> : null}
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

// Filter drawer header

type FilterDrawerHeaderProps = PropsWithChildren<{}>;

function FilterDrawerHeader({ children }: FilterDrawerHeaderProps) {
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
			css={{
				display: 'inline-block',
			}}
		>
			{children}
		</Text>
	);
}

// Filter drawer content

type FilterDrawerContentProps = PropsWithChildren<{}>;

function FilterDrawerContent({ children }: FilterDrawerContentProps) {
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

// Filter drawer footer

type FilterDrawerFooterProps = PropsWithChildren<{}>;

function FilterDrawerFooter({ children }: FilterDrawerFooterProps) {
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
