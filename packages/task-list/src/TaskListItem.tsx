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
	ordered?: boolean;
}>;

const TaskListItem = ({
	as,
	children,
	status,
	message,
	ordered,
	...props
}: TaskListItemProps) => {
	const active = status === 'doing';
	const Icon = statusIconMap[status];
	return (
		<li css={{ counterIncrement: 'li-count' }}>
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
					'&:hover': {
						// ...packs.underline,
						backgroundColor: boxPalette.backgroundShade,
					},
				}}
				{...props}
			>
				<Icon size="md" color="action" />
				<Flex flexDirection="column" gap={0.25}>
					<Text color="muted" fontSize="xs" lineHeight="nospace">
						{statusLabelMap[status]}
					</Text>
					<Text
						fontSize="md"
						color="action"
						css={{
							...packs.underline,
							...(ordered && {
								'&:before': {
									content: "counter(li-count) '. '",
								},
							}),
						}}
					>
						{children}
					</Text>
					<Text color="muted" fontSize="sm">
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
	todo: 'Todo',
	done: 'Done',
} as const;
