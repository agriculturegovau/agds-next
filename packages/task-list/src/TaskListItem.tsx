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
import { boxPalette, LinkProps, packs, tokens } from '@ag.ds-next/core';
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

const taskListItemTextDataAttr = 'data-agds-task-list-item-text';

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
	const { icon: Icon, iconColor, label } = statusMap[status];
	return (
		<li css={{ counterIncrement: 'task-count' }}>
			<Flex
				as={as}
				className={className}
				gap={0.75}
				paddingY={1.5}
				paddingLeft={0.75}
				paddingRight={active ? 0.5 : 0.25}
				fontFamily="body"
				color="text"
				borderBottom
				width="100%"
				focus
				css={{
					position: 'relative',
					textDecoration: 'none',
					[`[${taskListItemTextDataAttr}]`]: {
						...packs.underline,
						color: boxPalette.foregroundAction,
					},
					...(status === 'recentlyCompleted'
						? {
								backgroundColor: boxPalette.systemSuccessMuted,
						  }
						: null),
					...(active
						? {
								'&:before': {
									content: '""',
									background: boxPalette.foregroundAction,
									position: 'absolute',
									top: 0,
									bottom: 0,
									left: 0,
									width: tokens.borderWidth.xl,
								},
						  }
						: null),

					'&:hover': {
						backgroundColor: boxPalette.backgroundShade,
						[`[${taskListItemTextDataAttr}]`]: {
							textDecoration: 'none',
							color: boxPalette.foregroundText,
						},
					},
				}}
				{...props}
			>
				<Icon
					size="lg"
					color={iconColor}
					css={{
						// Use padding to ensure the icon is aligned centered with the status label and title
						paddingTop: '0.75rem',
					}}
				/>
				<Flex as="span" flexDirection="column" gap={0.25}>
					<Text as="span" fontSize="sm" lineHeight="nospace">
						{label}
					</Text>
					<Text
						{...{ [taskListItemTextDataAttr]: '' }}
						fontSize="lg"
						lineHeight="heading"
						fontWeight="bold"
						color="action"
						css={{
							...(ordered && {
								'&:before': {
									content: "counter(task-count) '. '",
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

const statusMap = {
	blocked: {
		label: 'Cannot start yet',
		icon: ProgressBlockedIcon,
		iconColor: 'border',
	},
	doing: {
		label: 'In progress',
		icon: ProgressDoingIcon,
		iconColor: 'action',
	},
	todo: {
		label: 'Not started',
		icon: ProgressTodoIcon,
		iconColor: 'action',
	},
	done: {
		label: 'Completed',
		icon: SuccessFilledIcon,
		iconColor: 'success',
	},
	recentlyCompleted: {
		label: 'Completed',
		icon: SuccessFilledIcon,
		iconColor: 'success',
	},
} as const;
