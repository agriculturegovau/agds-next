import { PropsWithChildren } from 'react';
import { Box, Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import {
	ProgressDoingIcon,
	ProgressDoneIcon,
	ProgressTodoIcon,
} from '@ag.ds-next/icon';
import { boxPalette, forwardRefWithAs, packs } from '@ag.ds-next/core';
import { BaseButton } from '@ag.ds-next/button';

export type ProgressIndicatorItemProps = PropsWithChildren<{
	status: ProgressIndicatorItemStatus;
}>;

export type ProgressIndicatorItemStatus = 'doing' | 'todo' | 'done';

export const ProgressIndicatorItem = forwardRefWithAs<
	'button',
	ProgressIndicatorItemProps
>(function ProgressIndicatorItem(
	{ as = BaseButton, children, status, ...props },
	ref
) {
	const active = status === 'doing';
	const Icon = statusIconMap[status];
	return (
		<Box as="li" borderBottom>
			<Flex
				ref={ref}
				as={as}
				alignItems="center"
				gap={0.75}
				padding={0.75}
				color="text"
				fontSize="sm"
				fontWeight={active ? 'bold' : 'normal'}
				borderLeft
				borderLeftWidth="xl"
				width="100%"
				focus
				css={{
					borderLeftColor: active ? boxPalette.foregroundAction : 'transparent',
					textDecoration: 'none',
					'&:hover': {
						...packs.underline,
						backgroundColor: boxPalette.backgroundShade,
					},
				}}
				{...props}
			>
				<Icon size="md" color="action" />
				<Flex flexDirection="column" gap={0}>
					<Text color="muted" fontSize="xs" lineHeight="nospace">
						{statusLabelMap[status]}
					</Text>
					{children}
				</Flex>
			</Flex>
		</Box>
	);
});

const statusIconMap = {
	doing: ProgressDoingIcon,
	todo: ProgressTodoIcon,
	done: ProgressDoneIcon,
} as const;

const statusLabelMap = {
	doing: 'Doing',
	todo: 'To do',
	done: 'Done',
} as const;
