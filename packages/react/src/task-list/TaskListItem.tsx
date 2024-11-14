import { ButtonHTMLAttributes, ElementType, PropsWithChildren, ReactElement } from 'react';
import { Flex } from '../flex';
import { Text } from '../text';
import { TextLink } from '../text-link';
import {
	AlertCircleIcon,
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
	message?: string | ReactElement;
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
		message?: string | ReactElement;
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
	message?: string | ReactElement;
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
	const isDisabled = status === 'notRequired';

	return (
		<li css={{ counterIncrement: 'task-count' }}>
			<Flex
				as={as}
				flexDirection={['column', 'row']}
				justifyContent="space-between"
				alignItems={['flex-start', 'center']}
				className={className}
				gap={1}
				paddingY={1}
				paddingX={[0.75, 1]}
				fontFamily="body"
				color="text"
				borderBottom
				width="100%"
				focusRingFor="keyboard"
				css={{
					position: 'relative',
					textDecoration: 'none',
					cursor: isDisabled ? 'not-allowed' : 'pointer',
					opacity: isDisabled ? 0.5 : 1,

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
						color: isDisabled ? 'textDisabled' : boxPalette.foregroundAction,
					},

					'&:hover': {
						backgroundColor: isDisabled ? 'transparent' : boxPalette.backgroundShade,
						[`[${taskListItemTextDataAttr}]`]: {
							textDecoration: isDisabled ? 'underline':'none',
							color: isDisabled ? 'textDisabled' : boxPalette.foregroundText,
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
						<Text
							{...{ [taskListItemTextDataAttr]: '' }}
							fontSize={['md', 'lg']}
							lineHeight="heading"
							fontWeight="bold"
							color={isDisabled ? 'muted':'action'}
							css={
								ordered
									? {
										'&::before': {
											content: 'counter(task-count)',
										},
									}
									: undefined
							}
						>
							{ordered && <span aria-hidden="true">. </span>}
							{children}
							<VisuallyHidden>.</VisuallyHidden>
						</Text>
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
								<VisuallyHidden>.</VisuallyHidden>
							</Text>
						</Flex>
						<Text color="muted" fontSize="sm">
							{message}
						</Text>
					</Flex>
				</Flex>
				{!isDisabled && <ArrowRightIcon color="action" size={['sm', 'lg']} />}
			</Flex>
		</li>
	);
};

const statusMap = {
	notRequired: {
		label: 'Not required',
		icon: AlertCircleIcon,
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
