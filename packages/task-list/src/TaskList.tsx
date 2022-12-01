import { Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { TaskListContainer } from './TaskListContainer';
import {
	TaskListItemButton,
	TaskListItemButtonProps,
	TaskListItemLink,
	TaskListItemLinkProps,
} from './TaskListItem';

type TaskListItem = (TaskListItemButtonProps | TaskListItemLinkProps) & {
	label: string;
	message?: string;
};

export type TaskListProps = {
	items: TaskListItem[];
	ordered?: boolean;
};

export const TaskList = ({ items, ordered = true }: TaskListProps) => (
	<Stack gap={1.5}>
		<Stack gap={0.5}>
			<Text fontSize="lg" fontWeight="bold" lineHeight="heading">
				Task list
			</Text>
			<Text fontSize="sm" color="muted">
				1 of 4 tasks completed
			</Text>
		</Stack>
		<TaskListContainer as={ordered ? 'ol' : 'ul'}>
			{items.map(({ label, ...props }, index) => {
				if (isItemLink(props)) {
					return (
						<TaskListItemLink key={index} ordered={ordered} {...props}>
							{label}
						</TaskListItemLink>
					);
				}
				return (
					<TaskListItemButton key={index} ordered={ordered} {...props}>
						{label}
					</TaskListItemButton>
				);
			})}
		</TaskListContainer>
	</Stack>
);

const isItemLink = (
	item: Omit<TaskListItem, 'label'>
): item is TaskListItemLinkProps => 'href' in item;
