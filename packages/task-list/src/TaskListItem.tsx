import { ButtonHTMLAttributes, ElementType, PropsWithChildren } from 'react';
import { Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { TextLink } from '@ag.ds-next/text-link';
import {
	ProgressDoingIcon,
	ProgressDoneIcon,
	ProgressTodoIcon,
} from '@ag.ds-next/icon';
import { boxPalette, LinkProps, packs } from '@ag.ds-next/core';
import { BaseButton } from '@ag.ds-next/button';

export type TaskListItemStatus = 'doing' | 'todo' | 'done';

export type TaskListItemLinkProps = LinkProps & {
	status: TaskListItemStatus;
	message?: string;
	ordered?: boolean;
};

export const TaskListItemLink = ({
	children,
	message,
	status,
	ordered,
	...props
}: TaskListItemLinkProps) => (
	<TaskListItem
		as={TextLink}
		status={status}
		message={message}
		ordered={ordered}
		{...props}
	>
		{children}
	</TaskListItem>
);

export type TaskListItemButtonProps =
	ButtonHTMLAttributes<HTMLButtonElement> & {
		status: TaskListItemStatus;
		message?: string;
		ordered?: boolean;
	};

export const TaskListItemButton = ({
	children,
	...props
}: TaskListItemButtonProps) => (
	<TaskListItem as={BaseButton} {...props}>
		{children}
	</TaskListItem>
);

type TaskListItemProps = PropsWithChildren<{
	as: ElementType;
	className?: string;
	status: TaskListItemStatus;
	message?: string;
	ordered?: boolean;
}>;

const TaskListItem = ({
	as,
	children,
	status,
	message,
	ordered,
	className,
	...props
}: TaskListItemProps) => {
	const active = status === 'doing';
	const Icon = statusIconMap[status];
	return (
		<li css={{ counterIncrement: 'task-count' }}>
			<Flex
				as={as}
				className={className}
				gap={0.75}
				paddingY={1.5}
				paddingX={0.75}
				fontFamily="body"
				color="text"
				borderBottom
				borderLeft
				borderLeftWidth="xl"
				width="100%"
				focus
				css={{
					borderLeftColor: active ? boxPalette.foregroundAction : 'transparent',
					textDecoration: 'none',
					'&:hover': {
						backgroundColor: boxPalette.backgroundShade,
					},
				}}
				{...props}
			>
				<Icon
					size="md"
					color={status === 'done' ? 'success' : 'action'}
					css={{
						// Use padding to ensure the icon is aligned centered with the status label and title
						paddingTop: '0.75rem',
					}}
				/>
				<Flex flexDirection="column" gap={0.25}>
					<Text color="muted" fontSize="xs" lineHeight="nospace">
						{statusLabelMap[status]}
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
};

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
