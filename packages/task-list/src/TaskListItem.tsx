import { ButtonHTMLAttributes, ElementType, PropsWithChildren } from 'react';
import { Flex } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { TextLink } from '@ag.ds-next/text-link';
import {
	ProgressDoingIcon,
	SuccessFilledIcon,
	ProgressTodoIcon,
	ProgressBlockedIcon,
	ArrowRightIcon,
} from '@ag.ds-next/icon';
import { boxPalette, LinkProps, mq, packs, tokens } from '@ag.ds-next/core';
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
				flexDirection={['column', 'row']}
				justifyContent="space-between"
				alignItems={['flex-start', 'center']}
				className={className}
				gap={0.75}
				padding={1}
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
					...(status === 'doneRecently'
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
				<Flex as="span" gap={[0, 1]}>
					<Flex as="span" alignItems="center">
						<Icon
							size="xl"
							color={iconColor}
							css={mq({
								display: ['none', 'block'],
							})}
						/>
					</Flex>
					<Flex as="span" flexDirection="column" gap={0.5}>
						<Flex as="span" gap={0.25} alignItems="center">
							<Icon
								size="md"
								color={iconColor}
								css={mq({
									display: ['block', 'none'],
								})}
							/>
							<Text as="span" fontSize={['xs', 'sm']} lineHeight="nospace">
								{label}
							</Text>
						</Flex>
						<Text
							{...{ [taskListItemTextDataAttr]: '' }}
							fontSize={['md', 'lg']}
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
				<ArrowRightIcon color="action" size={['sm', 'lg']} />
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
	doneRecently: {
		label: 'Completed',
		icon: SuccessFilledIcon,
		iconColor: 'success',
	},
} as const;
