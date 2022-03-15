import { ButtonHTMLAttributes, ElementType, PropsWithChildren } from 'react';
import { Flex } from '@ag.ds-next/box';
import { Text, TextLink } from '@ag.ds-next/text';
import {
	ProgressDoingIcon,
	ProgressDoneIcon,
	ProgressTodoIcon,
} from '@ag.ds-next/icon';
import { boxPalette, LinkProps, packs } from '@ag.ds-next/core';

export type TaskListItemStatus = 'doing' | 'todo' | 'done';

export type TaskListItemLinkProps = LinkProps & {
	status: TaskListItemStatus;
	message?: string;
};

export const TaskListItemLink = ({
	children,
	message,
	status,
	...props
}: TaskListItemLinkProps) => (
	<TaskListItem as={TextLink} status={status} message={message} {...props}>
		{children}
	</TaskListItem>
);

export type TaskListItemButtonProps =
	ButtonHTMLAttributes<HTMLButtonElement> & {
		status: TaskListItemStatus;
	};

export const TaskListItemButton = ({
	children,
	...props
}: TaskListItemButtonProps) => (
	<TaskListItem
		as="button"
		css={{
			appearance: 'none',
			background: 'transparent',
			cursor: 'pointer',
			textAlign: 'left',
			fontSize: 'inherit',
		}}
		{...props}
	>
		{children}
	</TaskListItem>
);

type TaskListItemProps = PropsWithChildren<{
	as: ElementType;
	status: TaskListItemStatus;
	message?: string;
}>;

const TaskListItem = ({
	as,
	children,
	status,
	message,
	...props
}: TaskListItemProps) => {
	const active = status === 'doing';
	const Icon = statusIconMap[status];
	return (
		<li>
			<Flex
				as={as}
				alignItems="center"
				gap={0.75}
				padding={0.75}
				color="text"
				// fontFamily="body"
				// fontWeight={active ? 'bold' : 'normal'}
				borderBottom
				borderLeft
				borderLeftWidth="xl"
				width="100%"
				focus
				css={{
					borderLeftColor: active ? boxPalette.foregroundAction : 'transparent',
					textDecoration: 'none',
					// '&:hover': {
					// 	...packs.underline,
					// 	backgroundColor: boxPalette.backgroundShade,
					// },
				}}
				{...props}
			>
				<Icon size="md" color="action" />
				<Flex flexDirection="column" gap={0}>
					<Text color="muted" fontSize="xs" lineHeight="nospace">
						{statusLabelMap[status]}
					</Text>
					<Text
						fontSize="md"
						color="text"
						// fontWeight={active ? 'bold' : 'normal'}
					>
						{children}
					</Text>
					<Text>{message}</Text>
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
	todo: 'Todo',
	done: 'Done',
} as const;
