import { PropsWithChildren } from 'react';
import { Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import {
	ProgressDoingIcon,
	ProgressDoneIcon,
	ProgressTodoIcon,
} from '@ag.ds-next/icon';
import { boxPalette, forwardRefWithAs, packs } from '@ag.ds-next/core';
import { BaseButton } from '@ag.ds-next/button';

export type TaskListItemStatus = 'doing' | 'todo' | 'done';

export type TaskListItemProps = PropsWithChildren<{
	status: TaskListItemStatus;
	message?: string;
	ordered?: boolean;
}>;

export const TaskListItem = forwardRefWithAs<'button', TaskListItemProps>(
	function TaskListItem(
		{ as = BaseButton, children, status, message, ordered, ...props },
		ref
	) {
		const active = status === 'doing';
		const Icon = ICON_MAP[status];
		return (
			<li css={{ counterIncrement: 'task-count' }}>
				<Flex
					as={as}
					ref={ref}
					gap={0.75}
					paddingY={1.5}
					paddingX={0.75}
					fontSize="sm"
					color="text"
					borderBottom
					borderLeft
					borderLeftWidth="xl"
					width="100%"
					focus
					css={{
						borderLeftColor: active
							? boxPalette.foregroundAction
							: 'transparent',
						textDecoration: 'none',
						'&:hover': {
							backgroundColor: boxPalette.backgroundShade,
						},
					}}
					{...props}
				>
					<Icon
						size="md"
						color="action"
						css={{
							// Use padding to ensure the icon is aligned centered with the status label and title
							paddingTop: '0.75rem',
						}}
					/>
					<Flex flexDirection="column" gap={0.25}>
						<Text color="muted" fontSize="xs" lineHeight="nospace">
							{LABEL_MAP[status]}
						</Text>
						<Text
							fontSize="md"
							lineHeight="heading"
							fontWeight="bold"
							color="action"
							css={{
								...packs.underline,
								...(ordered && {
									'&:before': {
										content: "counter(task-count) '. '",
									},
								}),
							}}
						>
							{children}
						</Text>
						<Text color="muted" fontSize="xs">
							{message}
						</Text>
					</Flex>
				</Flex>
			</li>
		);
	}
);

const ICON_MAP = {
	doing: ProgressDoingIcon,
	todo: ProgressTodoIcon,
	done: ProgressDoneIcon,
} as const;

const LABEL_MAP = {
	doing: 'Doing',
	todo: 'To do',
	done: 'Done',
} as const;
