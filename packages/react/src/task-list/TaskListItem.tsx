import { ButtonHTMLAttributes, ElementType, PropsWithChildren } from 'react';
import { Flex } from '../flex';
import { Text } from '../text';
import { TextLink } from '../text-link';
import {
	ProgressNotRequiredIcon,
	ProgressDoingIcon,
	SuccessFilledIcon,
	ProgressTodoIcon,
	ProgressBlockedIcon,
	ArrowRightIcon,
} from '../icon';
import { boxPalette, LinkProps, mq, packs, tokens } from '../core';
import { BaseButton } from '../button';
import { VisuallyHidden } from '../a11y';

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
		message={message}
		ordered={ordered}
		status={status}
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
	const { icon: Icon, iconColor, label } = statusMap[status];

	return (
		<li css={{ counterIncrement: 'task-count' }}>
			<Flex
				alignItems={['flex-start', 'center']}
				as={as}
				borderBottom
				className={className}
				color="text"
				css={{
					position: 'relative',
					textDecoration: 'none',

					...(status === 'doneRecently' && {
						backgroundColor: boxPalette.systemSuccessMuted,
					}),

					...(status === 'doing' && {
						'&::before': {
							content: '""',
							background: boxPalette.foregroundAction,
							position: 'absolute',
							top: 0,
							bottom: 0,
							left: 0,
							width: tokens.borderWidth.xl,
						},
					}),

					[`[${taskListItemTextDataAttr}]`]: {
						...packs.underline,
						color: boxPalette.foregroundAction,
					},

					'&:hover': {
						backgroundColor: boxPalette.backgroundShade,
						[`[${taskListItemTextDataAttr}]`]: {
							textDecoration: 'none',
							color: boxPalette.foregroundText,
						},
					},
				}}
				flexDirection={['column', 'row']}
				focusRingFor="keyboard"
				fontFamily="body"
				gap={1}
				justifyContent="space-between"
				paddingX={[0.75, 1]}
				paddingY={1}
				width="100%"
				{...props}
			>
				<Flex as="span" gap={[0, 1]}>
					<Flex alignItems="center" as="span">
						<Icon
							color={iconColor}
							css={mq({
								display: ['none', 'block'],
							})}
							size="xl"
						/>
					</Flex>
					<Flex as="span" flexDirection="column" gap={0.5}>
						<Text
							{...{ [taskListItemTextDataAttr]: '' }}
							color="action"
							css={
								ordered
									? {
											'&::before': {
												content: 'counter(task-count)',
											},
									  }
									: undefined
							}
							fontSize={['md', 'lg']}
							fontWeight="bold"
							lineHeight="heading"
						>
							{ordered && <span aria-hidden>. </span>}
							{children}
							<VisuallyHidden>.</VisuallyHidden>
						</Text>
						<Flex alignItems="center" as="span" gap={0.25}>
							<Icon
								color={iconColor}
								css={mq({
									display: ['block', 'none'],
								})}
								size="md"
							/>
							<Text as="span" fontSize={['xs', 'sm']} lineHeight="nospace">
								{label}
								<VisuallyHidden>.</VisuallyHidden>
							</Text>
						</Flex>
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
	notRequired: {
		label: 'No longer required',
		icon: ProgressNotRequiredIcon,
		iconColor: 'border',
	},
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
