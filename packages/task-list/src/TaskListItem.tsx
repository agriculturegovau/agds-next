import { ButtonHTMLAttributes, ElementType, PropsWithChildren } from 'react';
import { Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { TextLink } from '@ag.ds-next/text-link';
import {
	ProgressDoingIcon,
	SuccessFilledIcon,
	ProgressTodoIcon,
	ProgressBlockedIcon,
} from '@ag.ds-next/icon';
import { boxPalette, LinkProps, packs } from '@ag.ds-next/core';
import { BaseButton } from '@ag.ds-next/button';

export type TaskListItemStatus = keyof typeof statusMap;

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
	const { Icon, color, label } = statusMap[status];
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
					color={color}
					css={{
						// Use padding to ensure the icon is aligned centered with the status label and title
						paddingTop: '0.75rem',
					}}
				/>
				<Flex as="span" flexDirection="column" gap={0.25}>
					<Text as="span" color="muted" fontSize="sm" lineHeight="nospace">
						{label}
					</Text>
					<Text
						fontSize="lg"
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

const statusMap = {
	blocked: {
		Icon: ProgressBlockedIcon,
		color: 'muted',
		label: 'Cannot start yet',
	},
	doing: { Icon: ProgressDoingIcon, label: 'In progress', color: 'action' },
	todo: { Icon: ProgressTodoIcon, label: 'Not started', color: 'action' },
	done: { Icon: SuccessFilledIcon, label: 'Completed', color: 'success' },
} as const;
