import { Stack } from '@ag.ds-next/box';
import { TaskListContainer } from './TaskListContainer';
import { TaskListHeading } from './TaskListHeading';
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

export const TaskList = ({ items, ordered }: TaskListProps) => {
	const stepsCompleted = items.filter((item) => item.status === 'done').length;
	const totalSteps = items.length;

	return (
		<Stack gap={1.5}>
			<TaskListHeading
				stepsCompleted={stepsCompleted}
				totalSteps={totalSteps}
			/>
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
};
const isItemLink = (
	item: Omit<TaskListItem, 'label'>
): item is TaskListItemLinkProps => 'href' in item;
